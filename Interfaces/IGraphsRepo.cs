using Test_API.Models;

namespace graphs.Interfaces
{
    public interface IGraphsRepo : IBaseRepo<TrendDataValue>
    {
        Task<IEnumerable<TrendDataValue>> GetGraphsByDateAsync(DateTime startDate, DateTime endDate);

    }
}
