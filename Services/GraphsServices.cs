using AutoMapper;
using graphs.DTO;
using graphs.Interfaces;
using graphs.Repositories;
using graphs.ServiceInterfaces;
using Org.BouncyCastle.Crypto;

namespace graphs.Services
{
    public class GraphsServices : IGraphsServices
    {
        private readonly IGraphsRepo _graphsRepo;
        private readonly IMapper _mapper;

        public GraphsServices(IGraphsRepo graphRepo, IMapper mapper)
        {
            _graphsRepo = graphRepo;
            _mapper = mapper;
        }

        public async Task<IEnumerable<GraphsDTO>> GetGraphsAsync()
        {
            var graphs = await _graphsRepo.GetAllAsync();
            return _mapper.Map<IEnumerable<GraphsDTO>>(graphs);
        }

        //date range
        public async Task<IEnumerable<GraphsDTO>> GetGraphsByDateRangeAsync(DateTime startDate, DateTime endDate)
        {
            var graphs = await _graphsRepo.GetGraphsByDateAsync(startDate, endDate);
            return _mapper.Map<IEnumerable<GraphsDTO>>(graphs);
        }
    }
}
