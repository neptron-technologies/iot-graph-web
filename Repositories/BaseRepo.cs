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
            return await _dbSet.ToListAsync();
        }
    }
}
