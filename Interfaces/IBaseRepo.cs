using Test_API.Models;

namespace graphs.Interfaces
{
    public interface IBaseRepo<T> where T : class
    {
        Task<IEnumerable<T>> GetAllAsync();
        Task<IEnumerable<T>> GetGraphsByDateAsync(DateTime startDate, DateTime endDate);
    }
}
