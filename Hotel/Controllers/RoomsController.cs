using Hotel.Data;
using Hotel.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Hotel.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RoomsController : Controller
    {
        DataContext db;
        public RoomsController(DataContext context)
        {
            db = context;
        }
        [HttpGet]
        public IEnumerable<Room> Get()
        {
            List<Room> rooms = new List<Room>();
            for(int i=0;i<3;i++)
                rooms.Add(db.Rooms.ToList()[i]);
            return rooms;
        }
    }
}
