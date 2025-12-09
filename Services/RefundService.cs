using PaymentRefund.Data;
using PaymentRefund.Domain;
using PaymentRefund.Integrations;

namespace PaymentRefund.Services;

public class RefundService
{
    private readonly RefundRepository _repo;
    private readonly PayMongoRefundAdapter _gateway;

    public RefundService(RefundRepository repo, PayMongoRefundAdapter gateway)
    {
        _repo = repo;
        _gateway = gateway;
    }

    public async Task<Refund> CreateRefundAsync(RefundRequest request)
    {
        var refund = new Refund
        {
            Id = Guid.NewGuid().ToString(),
            OrderId = request.OrderId,
            Amount = request.Amount,
            Reason = request.Reason,
            TransactionId = request.TransactionId,
            Status = "PENDING",
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow
        };

        await _repo.CreateRefundAsync(refund);

        var gateway = await _gateway.ProcessRefundAsync(refund);

        refund.Status = gateway.Success ? "PROCESSED" : "FAILED";
        await _repo.UpdateStatusAsync(refund.Id, refund.Status);

        return refund;
    }
}
