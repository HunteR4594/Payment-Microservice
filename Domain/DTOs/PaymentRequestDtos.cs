namespace PaymentService.Domain.DTOs;

public class CreatePaymentRequest
{
    public Guid OrderId { get; set; }
    public decimal Amount { get; set; }
    public required string Description { get; set; }
    public required string PaymentMethod { get; set; } // e.g., "gcash", "card"
}
