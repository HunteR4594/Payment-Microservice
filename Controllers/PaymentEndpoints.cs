using Microsoft.AspNetCore.Mvc;
using PaymentService.Domain.DTOs;
using Services = PaymentService.Services;
using PaymentService.Integrations;

namespace PaymentService.Controllers;

public static class PaymentEndpoints
{
    public static void MapPaymentRoutes(this IEndpointRouteBuilder app)
    {
        var group = app.MapGroup("/api/payments");

        // GET /api/payments/methods - Only needs PayMongoAdapter, not PaymentRepository
        group.MapGet("/methods", async (PayMongoAdapter adapter) =>
        {
            try 
            {
                var methods = await adapter.GetAvailablePaymentMethodsAsync();
                return Results.Ok(methods);
            }
            catch (Exception ex)
            {
                // Simple error handling for the student project
                return Results.Problem(ex.Message);
            }
        });

        group.MapPost("/checkout", async (
            [FromBody] CreatePaymentRequest request, 
            Services.PaymentService service) =>
        {
            // Call service
            string url = await service.ProcessPaymentRequest(request);
            
            // Return 200 OK with the URL
            return Results.Ok(new { checkoutUrl = url });
        });
    }
}