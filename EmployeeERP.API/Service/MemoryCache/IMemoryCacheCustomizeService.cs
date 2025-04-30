using EmployeeERP.API.Models.DbModel;

namespace EmployeeERP.API.Service.MemoryCache
{
    public interface IMemoryCacheCustomizeService<T> where T:BaseModel
    {
        IEnumerable<T> GetData();
        T? GetData(int Id);
        void UpdateList(IEnumerable<T> data);
    }
}
