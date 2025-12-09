using PaymentRefund.Data;
using PaymentRefund.Integrations;
using PaymentRefund.Services;
using PaymentRefund.Controllers;

var builder = WebApplication.CreateBuilder(args);

// 1. Swagger + HttpClient
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddHttpClient();

// 2. Database
builder.Services.AddSingleton<DbConnectionFactory>();

// 3. Core Logic
builder.Services.AddScoped<RefundRepository>();
builder.Services.AddScoped<PayMongoRefundAdapter>();
builder.Services.AddScoped<RefundService>();

// 4. Controller Mapping (Minimal API)
var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// map refund endpoints
app.MapRefundRoutes();

app.Run();
