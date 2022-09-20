using Hotel.Models;
using Microsoft.EntityFrameworkCore;

namespace Hotel.Data
{
    public class DataContext : DbContext
    {
        public DbSet<Room> Rooms { get; set; } = null!;

        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            Database.EnsureDeleted();
            Database.EnsureCreated();
            SampleData.Initialize(this);
        }
    }
}
