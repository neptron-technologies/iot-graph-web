using System.Configuration;
using graphs.Interfaces;
using graphs.Mappers;
using graphs.Repositories;
using graphs.ServiceInterfaces;
using graphs.Services;
using Microsoft.EntityFrameworkCore;
using Test_API.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var configuration = builder.Configuration;

builder.Services.AddDbContext<graphsDBContext>(options =>
{
    options.UseSqlServer(configuration.GetConnectionString("graphsDBConnection"));
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped(typeof(IBaseRepo<>), typeof(BaseRepo<>)); //baserepo & interface
builder.Services.AddScoped<IGraphsRepo, GraphsRepo>(); //repo
builder.Services.AddScoped<IGraphsServices, GraphsServices>();

builder.Services.AddAutoMapper(typeof(GraphsMapper));  //mapper

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());  //added

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();