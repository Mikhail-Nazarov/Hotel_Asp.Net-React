using Hotel.Data;
using Hotel.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Hotel.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StaffController : ControllerBase
    {
        DataContext db;
        public StaffController(DataContext context)
        {
            db = context;
        }
        [HttpGet]
        public IEnumerable<Employee> Get()
        {
            return db.Employees.ToList();
        }
    }
}
