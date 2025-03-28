using System.Runtime;
using graphs.DTO;
using AutoMapper;
using Test_API.Models;

namespace graphs.Mappers
{
    public class GraphsMapper : Profile
    {
        public GraphsMapper() 
        {
            CreateMap<TrendDataValue, GraphsDTO>();
            CreateMap<GraphsDTO, TrendDataValue>();
        }
    }
}
