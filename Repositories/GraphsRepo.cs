using graphs.Interfaces;
using graphs.Repositories;
using Microsoft.EntityFrameworkCore;
using Test_API.Models;

namespace graphs.Repositories
{
    public class GraphsRepo : BaseRepo<TrendDataValue>, IGraphsRepo
    {
        public GraphsRepo(graphsDBContext context) : base(context) { }
    }
}