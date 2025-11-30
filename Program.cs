using PaymentService.Data;
using PaymentService.Integrations;
using Services = PaymentService.Services;
using PaymentService.Controllers;

var builder = WebApplication.CreateBuilder(args);

// 1. Add Services to container
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddHttpClient(); // For PayMongo Adapter

// 2. Register Your Custom Classes
builder.Services.AddScoped<PaymentRepository>();
builder.Services.AddScoped<PayMongoAdapter>();
builder.Services.AddScoped<Services.PaymentService>();

var app = builder.Build();

// 3. Configure Pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// 4. Map the Endpoints
app.MapPaymentRoutes();

app.Run();