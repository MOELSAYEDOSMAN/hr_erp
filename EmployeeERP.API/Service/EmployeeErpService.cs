using EmployeeERP.API.Service.MemoryCache;
using EmployeeERP.API.Service.UnitOfWork;

namespace EmployeeERP.API.Service
{
    public static class EmployeeErpService
    {
        public static IServiceCollection AddEmployeeErpService(this IServiceCollection services, IConfiguration conf)
        {
            services.AddMemoryCache();
            services.AddScoped(typeof(IMemoryCacheCustomizeService<>), typeof(MemoryCacheCustomizeService<>));
            services.AddScoped(typeof(IUnitService<>), typeof(UnitService<>));
            return services;
        }
    }
}
