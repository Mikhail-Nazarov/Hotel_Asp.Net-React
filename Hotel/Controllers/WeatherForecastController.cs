using Microsoft.AspNetCore.Mvc;

namespace Hotel.Controllers
{
    public class WeatherForecastController : ControllerBase
    {
        [HttpGet]
        public int Get()
        {
            return 10;
        }
    }
}