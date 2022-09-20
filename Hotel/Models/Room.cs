using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel.Models
{
    public class Room
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public DateTime startOfBooking { get; set; }
        public DateTime endOfBooking { get; set; }
        public string imgPaths { get; set; }

    }
}
