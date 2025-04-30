using EmployeeERP.API.Models.DbModel;
using EmployeeERP.API.Models.Dtos;
using EmployeeERP.API.Models.Dtos.UnitDtos;
using EmployeeERP.API.Service.MemoryCache;
using Microsoft.Extensions.Caching.Memory;
using System.Linq;

namespace EmployeeERP.API.Service.UnitOfWork
{
    public class UnitService<T>(IMemoryCacheCustomizeService<T> _memoryCache) : IUnitService<T> where T : BaseModel
    {
        async Task<UnitGetDto<T>> IUnitService<T>.Filter(T input,Func<T, T, bool> predicate, int? page=1, int? count=10)
        {
            var filter_list = _memoryCache.GetData().Where(d=>d.soft_delete==false).Where(item => predicate(item, input));
            return new UnitGetDto<T>(_data:filter_list.Skip(((page ?? 1) - 1) * (count ?? 1)).Take(count ?? 10)
                , _pages:(int)Math.Ceiling((decimal)filter_list.Count()/(count??10))
                ,_count: filter_list.Count(),
                _page_count:page??1);
        }

        async Task<UnitGetDto<T>> IUnitService<T>.GetAll(int? page, int? count)
        {
            var data = _memoryCache.GetData().Where(d=>d.soft_delete==false);
            return new UnitGetDto<T>(_data: data.Skip(((page ?? 1) - 1)*(count??1)).Take(count ?? 10)
                , _pages: (int)Math.Ceiling((decimal)data.Count() / (count ?? 10))
                , _count: data.Count(),
                _page_count: page ?? 1);
        }

        async Task<T?> IUnitService<T>.GetWithId(int Id)
        => _memoryCache.GetData().Where(d => d.soft_delete == false).FirstOrDefault(d=>d.id.Equals(Id));

        async Task<T> IUnitService<T>.Insert(T input, string? owner)
        {

            var data = _memoryCache.GetData().ToList();
            input.creation = DateTime.UtcNow;
            input.owner = owner??string.Empty;
            input.id = (data.LastOrDefault()?.id??0) + 1;
            data.Add(input);
            _memoryCache.UpdateList(data);
            return input;

        }

        async Task<bool> IUnitService<T>.Remove(int id,string? modified_by)
        {
            var data = _memoryCache.GetData().ToList();
            var node=data.FirstOrDefault(d => d.soft_delete==false&&d.id.Equals(id));
            if (node == null)
                return false;
            node.modified = DateTime.UtcNow;
            node.modified_by = modified_by ?? string.Empty;
            node.soft_delete = true;
            _memoryCache.UpdateList(data);
            return true;
        }

        async Task<T?> IUnitService<T>.Update(T input, string? modified_by)
        {
            var data = _memoryCache.GetData().ToList();
            var node = data.FirstOrDefault(d => d.soft_delete==false&&d.id.Equals(input.id));
            if (node == null)
                return null;
            node.updateData(input);
            node.modified = DateTime.UtcNow;
            node.modified_by = modified_by ?? string.Empty;
            _memoryCache.UpdateList(data);
            return node;
        }




        
    }
}
