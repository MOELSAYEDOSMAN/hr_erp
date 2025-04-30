using EmployeeERP.API.Models.DbModel.HrSchema;
using EmployeeERP.API.Service.UnitOfWork;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace EmployeeERP.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PositionController(IUnitService<EmployeePosition> _PositionService) : ControllerBase
    {
        [HttpPost("insert")]
        public async Task<IActionResult> insert(string position, string? owner)
        {
            if (string.IsNullOrEmpty(position))
                return BadRequest();
            var data = await _PositionService.GetAll(1, int.MaxValue);
            var serch_data = data.data.FirstOrDefault(d => d.title.Equals(position, StringComparison.OrdinalIgnoreCase));
            if (serch_data != null)
                return Ok(serch_data);
            var input = new EmployeePosition() { title = position, owner = owner };
            return Ok(await _PositionService.Insert(input, owner));
        }

        [HttpPost("GetAll")]
        public async Task<IActionResult> GetAll()
            => Ok(await _PositionService.GetAll(1, int.MaxValue));

    }
}
