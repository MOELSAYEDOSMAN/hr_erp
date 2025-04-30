using EmployeeERP.API.Models.DbModel;
using EmployeeERP.API.Models.Dtos;
using EmployeeERP.API.Models.Dtos.UnitDtos;
using System.Threading.Tasks;

namespace EmployeeERP.API.Service.UnitOfWork
{
    public interface IUnitService<T> where T: BaseModel
    {
        Task<UnitGetDto<T>> GetAll(int? page = 1, int? count = 10);
        Task<UnitGetDto<T>> Filter<F>(F input, Func<T, F, bool> predicate, int? page=1, int? count=10) where F : BaseDto;
        Task<T?> GetWithId(int Id);
        Task<T> Insert(T input, string? owner) ;
        Task<T?> Update(T input, string? modified_by) ;
        Task<bool> Remove(int id, string? modified_by);

    }
}
