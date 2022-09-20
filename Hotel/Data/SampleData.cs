using Hotel.Models;

namespace Hotel.Data
{
    public static class SampleData
    {
        public static void Initialize(DataContext context)
        {
            if (!context.Rooms.Any())
            {
                context.Rooms.Add(new Room
                {
                    Name = "test1",
                    Price = 3000,
                    startOfBooking = new DateTime(2022, 09, 29),
                    endOfBooking = new DateTime(2022, 09, 30),
                    imgPaths = "'../images/room2.jpg'"
                });
                context.Rooms.Add(new Room
                {
                    Name = "test2",
                    Price = 3000,
                    startOfBooking = new DateTime(2022, 09, 29),
                    endOfBooking = new DateTime(2022, 09, 30),
                    imgPaths = "'../images/room3.jpg'"
                });
                context.Rooms.Add(new Room
                {
                    Name = "test3",
                    Price = 3000,
                    startOfBooking = new DateTime(2022, 09, 29),
                    endOfBooking = new DateTime(2022, 09, 30),
                    imgPaths = "'../images/room1.jpg'"
                });
                context.SaveChanges();
            }
        }
    }
}
