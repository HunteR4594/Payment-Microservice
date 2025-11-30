using Dapper;
using Microsoft.Data.SqlClient;
using PaymentService.Domain.Entities;
using System.Data;

namespace PaymentService.Data;

public class PaymentRepository
{
    private readonly string _connectionString;

    public PaymentRepository(IConfiguration config)
    {
        _connectionString = config.GetConnectionString("DefaultConnection") ?? throw new InvalidOperationException("Connection string 'DefaultConnection' not found.");
    }

    private IDbConnection CreateConnection() => new SqlConnection(_connectionString);

    public async Task CreatePaymentAsync(Payment payment)
    {
        // 🟢 PROFESSOR REQUIREMENT: Raw SQL here
        string sql = @"
            INSERT INTO Payments 
            (PaymentId, OrderId, UserId, TotalAmount, Currency, Status, PaymentMethod, CreatedAt)
            VALUES 
            (@PaymentId, @OrderId, @UserId, @TotalAmount, @Currency, @Status, @PaymentMethod, @CreatedAt)";

        using var connection = CreateConnection();
        await connection.ExecuteAsync(sql, payment);
    }

    public async Task UpdateProviderIdAsync(Guid paymentId, string providerId)
    {
        string sql = "UPDATE Payments SET ProviderTransactionId = @ProviderId WHERE PaymentId = @Id";
        using var connection = CreateConnection();
        await connection.ExecuteAsync(sql, new { ProviderId = providerId, Id = paymentId });
    }
}