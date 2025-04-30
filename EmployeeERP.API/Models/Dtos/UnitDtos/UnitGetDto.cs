namespace EmployeeERP.API.Models.Dtos.UnitDtos
{
    public class UnitGetDto<T>
    {
        public UnitGetDto()
        {
            
        }
        public UnitGetDto(IEnumerable<T> _data, int _pages, int _count, int _page_count)
        {
            data = _data;
            pages = _pages;
            count = _count;
            page_count = _page_count;
        }
        public IEnumerable<T> data { get; set; }
        public int pages { get; set; }
        public int count { get; set; }
        public int page_count { get; set; }
    }
}
