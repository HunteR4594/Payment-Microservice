namespace PaymentRefund.Domain;

public class RefundRequest
{
    public string OrderId { get; set; }
    public decimal Amount { get; set; }
    public string TransactionId { get; set; }
    public string Reason { get; set; }
}
