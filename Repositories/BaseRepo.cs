using graphs.Interfaces;
using Microsoft.EntityFrameworkCore;
using Org.BouncyCastle.Asn1;
using Test_API.Models;

namespace graphs.Repositories
{
    public class BaseRepo<T> : IBaseRepo<T> where T : class
    {
        private readonly graphsDBContext _context;
        private readonly DbSet<T> _dbSet;

        public BaseRepo(graphsDBContext context)
        {
            _context = context;
            _dbSet = context.Set<T>();
        }

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            var sqlQuery = "select top 1000 * from [dbo].[trend data value] where CAST([dbo].[trend data value].[Date] as Date) = '2017-09-30'";
            var data = await _context.TrendDataValues.FromSqlRaw(sqlQuery).ToListAsync();
            return data.Cast<T>().ToList();
        }

        public async Task<IEnumerable<T>> GetGraphsByDateAsync(DateTime startDate, DateTime endDate)
        {
            var sqlQuery = "SELECT * FROM [trend data value] WHERE CAST([dbo].[trend data value].[Date] as Date) BETWEEN {0} AND {1}";
            var data = await _context.TrendDataValues.FromSqlRaw(sqlQuery, startDate, endDate).ToListAsync();
            return data.Cast<T>().ToList();
        }
    }

}