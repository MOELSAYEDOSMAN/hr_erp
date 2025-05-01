using EmployeeERP.API.Models.DbModel.HrSchema;
using EmployeeERP.API.Models.Dtos.HrDtos;
using EmployeeERP.API.Service.UnitOfWork;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeERP.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController(IUnitService<Employee> _EmployeeService) : ControllerBase
    {
        [HttpPost("GetAll")]
        public async Task<IActionResult> GetAll(uint? page = 1,uint?count=10)
        {
            if (page == 0)
                page = 1;
            return Ok(await _EmployeeService.GetAll((int)page, (int)count));
        }
        [HttpGet("Get/{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var data = await _EmployeeService.GetWithId(id);
            return data == null ? NotFound(null) : Ok(data);

        }
        [HttpPost("GetAllWithFilter")]
        public async Task<IActionResult> GetAll(Employee? employee,uint? page = 1, uint? count = 10)
        {
            Func<Employee, Employee, bool> predicate = (d, employee) =>
            {
                bool result = true;
                if (employee == null)
                    return true;
                if(employee.id!=null&&employee.id>0)
                {
                    result = d.id.Equals(employee.id);
                }
                if(!string.IsNullOrEmpty(employee.firstName))
                {
                    result = d.firstName.Contains(employee.firstName, StringComparison.OrdinalIgnoreCase);
                }
                if (!string.IsNullOrEmpty(employee.lastName)&&result)
                {
                    result = d.lastName.Contains(employee.lastName, StringComparison.OrdinalIgnoreCase);
                }
                if(!string.IsNullOrEmpty(employee.email) && result)
                {
                    result = d.email.Contains(employee.email, StringComparison.OrdinalIgnoreCase);
                }
                if (!string.IsNullOrEmpty(employee.position) && result)
                {
                    result = d.position.Contains(employee.position, StringComparison.OrdinalIgnoreCase);
                }
                return result;
            };
            return Ok(await _EmployeeService.Filter(employee, predicate, (int)page, (int)count));
        }
        [HttpPost("Insert")]
        public async Task<IActionResult>insert(EmployeeDto? employee)
        {
            if (!ModelState.IsValid)
            {
                string Error = string.Empty;
                foreach (var i in ModelState.Values.SelectMany(x => x.Errors))
                    Error = $"{i.ErrorMessage}\n";
                return BadRequest(Error);
            }
            return Ok(await _EmployeeService.Insert(employee, employee.Owner));
        }
        [HttpPost("Update")]
        public async Task<IActionResult> update(Employee? employee)
        {
            if (employee == null || employee.id < 1 || string.IsNullOrEmpty(employee.owner))
                return BadRequest();
            if (!ModelState.IsValid)
            {
                string Error = string.Empty;
                foreach (var i in ModelState.Values.SelectMany(x => x.Errors))
                    Error = $"{i.ErrorMessage}\n";
                return BadRequest(Error);
            }
            return Ok(await _EmployeeService.Update(employee, employee.owner));
        }
        [HttpPost("Remove")]
        public async Task<IActionResult> Remove(EmployeeDto? employee)
        {
            if (employee == null || employee.id < 1)
                return BadRequest(false);
            return Ok(await _EmployeeService.Remove(employee?.id??0,employee.Owner));
        }
    }
}
