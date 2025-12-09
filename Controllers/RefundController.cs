using PaymentRefund.Services;
using PaymentRefund.Domain;

namespace PaymentRefund.Controllers;

public static class RefundController
{
    public static void MapRefundRoutes(this WebApplication app)
    {
        app.MapPost("/refund", async (RefundRequest request, RefundService service) =>
        {
            var result = await service.CreateRefundAsync(request);
            return Results.Ok(result);
        });

        app.MapGet("/refund/{id}", async (string id, RefundRepository repo) =>
        {
            var refund = await repo.GetRefundAsync(id);
            return refund is null ? Results.NotFound() : Results.Ok(refund);
        });
    }
}
