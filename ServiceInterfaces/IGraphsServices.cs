using graphs.DTO;

namespace graphs.ServiceInterfaces
{
    public interface IGraphsServices
    {
        Task<IEnumerable<GraphsDTO>> GetGraphsAsync();
    }
}
