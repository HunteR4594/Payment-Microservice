using PaymentRefund.Domain;

namespace PaymentRefund.Integrations;

public class PayMongoRefundAdapter
{
    private readonly HttpClient _client;

    public PayMongoRefundAdapter(IHttpClientFactory http)
    {
        _client = http.CreateClient();
    }

    public async Task<GatewayResult> ProcessRefundAsync(Refund refund)
    {
        await Task.Delay(300); // simulate API call

        // Here you later integrate the real PayMongo endpoint
        return new GatewayResult
        {
            Success = true,
            Raw = "{}"
        };
    }
}
