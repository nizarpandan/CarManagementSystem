using CarManagementSystem.API.Models;
using Microsoft.EntityFrameworkCore;

namespace CarManagementSystem.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options){}         

        public DbSet<Car> Cars { get; set; }
    }
}