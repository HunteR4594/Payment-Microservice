using Dapper;
using PaymentRefund.Domain;

namespace PaymentRefund.Data;

public class RefundRepository
{
    private readonly DbConnectionFactory _factory;

    public RefundRepository(DbConnectionFactory factory)
    {
        _factory = factory;
    }

    public async Task<Refund?> GetRefundAsync(string id)
    {
        using var conn = _factory.CreateConnection();
        var sql = "SELECT * FROM refunds WHERE id = @Id";
        return await conn.QuerySingleOrDefaultAsync<Refund>(sql, new { Id = id });
    }

    public async Task CreateRefundAsync(Refund refund)
    {
        using var conn = _factory.CreateConnection();

        var sql = @"
            INSERT INTO refunds
            (id, order_id, amount, status, reason, transaction_id, created_at, updated_at)
            VALUES
            (@Id, @OrderId, @Amount, @Status, @Reason, @TransactionId, @CreatedAt, @UpdatedAt)";

        await conn.ExecuteAsync(sql, refund);
    }

    public async Task UpdateStatusAsync(string id, string status)
    {
        using var conn = _factory.CreateConnection();

        var sql = "UPDATE refunds SET status = @Status WHERE id = @Id";

        await conn.ExecuteAsync(sql, new { Id = id, Status = status });
    }
}
