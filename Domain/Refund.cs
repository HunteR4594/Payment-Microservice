namespace PaymentRefund.Domain;

public class Refund
{
    public string Id { get; set; }
    public string OrderId { get; set; }
    public string TransactionId { get; set; }
    public decimal Amount { get; set; }
    public string Status { get; set; }
    public string Reason { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}
