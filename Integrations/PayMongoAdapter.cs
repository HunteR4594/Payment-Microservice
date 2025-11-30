using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using PaymentService.Domain.DTOs;

namespace PaymentService.Integrations;

public class PayMongoAdapter
{
    private readonly HttpClient _httpClient;
    private readonly string _secretKey;

    public PayMongoAdapter(HttpClient httpClient, IConfiguration config)
    {
        _httpClient = httpClient;
        _secretKey = config["PayMongo:SecretKey"] ?? throw new InvalidOperationException("PayMongo:SecretKey not found in configuration.");
        _httpClient.BaseAddress = new Uri("https://api.paymongo.com");
    }

    public async Task<List<string>> GetAvailablePaymentMethodsAsync()
    {
        // 1. Auth Header
        var authBytes = Encoding.ASCII.GetBytes($"{_secretKey}:");
        _httpClient.DefaultRequestHeaders.Authorization = 
            new AuthenticationHeaderValue("Basic", Convert.ToBase64String(authBytes));

        // 2. Call the Endpoint (This specific endpoint lists what your account can do)
        // Note: If this 404s in Test Mode, we can fallback to a hardcoded list for the demo.
        var response = await _httpClient.GetAsync("/v1/payment_methods"); 
        
        if (!response.IsSuccessStatusCode)
        {
            // Fallback for Student Demo if API fails or requires live activation
            return new List<string> { "card", "gcash", "paymaya", "grab_pay" };
        }

        var jsonString = await response.Content.ReadAsStringAsync();
        
        // 3. Deserialize using System.Text.Json (Case Insensitive is safer)
        var options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
        var result = JsonSerializer.Deserialize<PaymentMethodListResponse>(jsonString, options);

        // 4. Return just the types (e.g., "gcash", "card")
        return result?.data.Select(x => x.attributes.type).Distinct().ToList() 
               ?? new List<string>();
    }

    public async Task<string> CreateCheckoutSessionAsync(decimal amount, string description, string paymentMethod)
    {
        // 1. Auth Header
        var authBytes = Encoding.ASCII.GetBytes($"{_secretKey}:");
        _httpClient.DefaultRequestHeaders.Authorization = 
            new AuthenticationHeaderValue("Basic", Convert.ToBase64String(authBytes));

        // 2. Create the checkout session payload
        var payload = new
        {
            data = new
            {
                attributes = new
                {
                    amount = (long)(amount * 100), // PayMongo expects amount in cents
                    description = description,
                    payment_method_types = new[] { paymentMethod },
                    success_url = "https://yourapp.com/success", // TODO: Configure your success URL
                    cancel_url = "https://yourapp.com/cancel",   // TODO: Configure your cancel URL
                    reference_number = Guid.NewGuid().ToString()
                }
            }
        };

        var json = JsonSerializer.Serialize(payload);
        var content = new StringContent(json, Encoding.UTF8, "application/json");

        // 3. Call the PayMongo API
        var response = await _httpClient.PostAsync("/v1/checkout_sessions", content);

        if (!response.IsSuccessStatusCode)
        {
            throw new Exception($"PayMongo API Error: {response.StatusCode} - {await response.Content.ReadAsStringAsync()}");
        }

        var responseJson = await response.Content.ReadAsStringAsync();
        var options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
        
        // TODO: Parse the response properly based on PayMongo's actual response format
        // For now, return a placeholder - adjust based on PayMongo's actual response
        return "https://checkout.paymongo.com/session_id"; // Replace with actual parsing
    }
}