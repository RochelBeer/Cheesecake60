using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cheesecake60.Data
{
    public class Repository
    {
        private string _connectionString;
        public Repository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public List<Order> GetOrders()
        {
            using var context = new OrdersDataContext(_connectionString);
            return context.Orders.ToList();
        }
        public Order GetOrderById(int id)
        {
            using var context = new OrdersDataContext(_connectionString);
            return context.Orders.FirstOrDefault(o => o.Id == id);
        }
        public void AddOrder(Order order)
        {
            using var context = new OrdersDataContext(_connectionString);
            context.Orders.Add(order);
            context.SaveChanges();
        }
    }
}
