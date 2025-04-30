using EmployeeERP.API.Models.DbModel;
using Microsoft.Extensions.Caching.Memory;

namespace EmployeeERP.API.Service.MemoryCache
{
    public class MemoryCacheCustomizeService<T>(IMemoryCache _memoryCache) : IMemoryCacheCustomizeService<T> where T : BaseModel
    {
        
        public IEnumerable<T>? GetData()
        {
            IEnumerable<T> data;
            _memoryCache.TryGetValue<IEnumerable<T>>(typeof(T).Name, out data);
            return data ?? Enumerable.Empty<T>();
        }

        public T? GetData(int Id)
        {
            return GetData().FirstOrDefault(d => d.id.Equals(Id));
        }

        public void UpdateList(IEnumerable<T> data)
        {
            _memoryCache.Set<IEnumerable<T>>(typeof(T).Name, data);
        }
    }
}
