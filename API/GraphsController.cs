using graphs.DTO;
using graphs.ServiceInterfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace graphs.API
{
    [Route("api/[controller]")]
    [ApiController]
    public class GraphsController : ControllerBase
    {
        private readonly IGraphsServices _graphsService;

        public GraphsController(IGraphsServices graphsServices)
        {
            _graphsService = graphsServices;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<GraphsDTO>>> GetGraphs()
        {
            var graphs = await _graphsService.GetGraphsAsync();
            return Ok(graphs);
        }
    }
}
