using Cheesecake60.Data;
using Cheesecake60.Web.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Cheesecake60.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private string _connectionString;
        public OrdersController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        [Route("getall")]
        public List<Order> GetAll()
        {
            Repository repo = new(_connectionString);
            return repo.GetOrders();
        }
        [Route("addorder")]
        [HttpPost]
        public void AddOrder(Order order)
        {
            Repository repo = new(_connectionString);
            repo.AddOrder(order);
        }
        [Route("getorderbyid")]
        [HttpPost]
        public Order GetOrderById(ViewModel vm)
        {
            Repository repo = new(_connectionString);
            Order o =repo.GetOrderById(vm.Id);
            return o;
        }
    }
}
