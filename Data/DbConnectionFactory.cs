using MySqlConnector;
using System.Data;

namespace PaymentRefund.Data;

public class DbConnectionFactory
{
    private readonly IConfiguration _config;

    public DbConnectionFactory(IConfiguration config)
    {
        _config = config;
    }

    public IDbConnection CreateConnection()
    {
        var connStr = _config.GetConnectionString("Default");
        return new MySqlConnection(connStr);
    }
}
