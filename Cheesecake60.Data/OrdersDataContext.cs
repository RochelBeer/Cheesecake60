using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cheesecake60.Data
{
    public class OrdersDataContext: DbContext 
    {
        private string _connectionString;
        public OrdersDataContext(string connectionString)
        {
            _connectionString = connectionString;
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }
       public DbSet<Order> Orders { get; set; }
     
    }
}
