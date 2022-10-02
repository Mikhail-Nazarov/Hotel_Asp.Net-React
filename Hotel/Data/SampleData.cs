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
                    Name = "Номер 1",
                    Price = 3000,
                    startOfBooking = new DateTime(2022, 09, 29),
                    endOfBooking = new DateTime(2022, 09, 30),
                    imgPaths = "room1.jpg room2.jpg room3.jpg",
                    services = "2 комнаты,Уборка,Красивый вид,Минибар",
                    description = "Длинное описание номера Длинное описание номера Длинное описание номера Длинное описание номера"
                });
                context.Rooms.Add(new Room
                {
                    Name = "Номер 2",
                    Price = 4000,
                    startOfBooking = new DateTime(2022, 09, 29),
                    endOfBooking = new DateTime(2022, 09, 30),
                    imgPaths = "room4.jpg room5.jpg room6.jpg",
                    services = "2 комнаты,Уборка,Красивый вид,Минибар",
                    description = "Длинное описание номера Длинное описание номера Длинное описание номера Длинное описание номера"
                });
                context.Rooms.Add(new Room
                {
                    Name = "Номер 3",
                    Price = 5000,
                    startOfBooking = new DateTime(2022, 09, 29),
                    endOfBooking = new DateTime(2022, 09, 30),
                    imgPaths = "room7.jpg room8.jpg room9.jpg",
                    services = "2 комнаты,Уборка,Красивый вид,Минибар",
                    description = "Длинное описание номера Длинное описание номера Длинное описание номера Длинное описание номера"
                });
                context.SaveChanges();
            }

            if(!context.Employees.Any())
            {
                context.Employees.Add(new Employee
                {
                    Name="Иван",
                    Surname="Иванов",
                    Post="Менеджер",
                    PhotoPath= "-14-08-2021-085927.jpg"
                });
                context.Employees.Add(new Employee
                {
                    Name = "Иван",
                    Surname = "Иванов",
                    Post = "Менеджер",
                    PhotoPath = "Christine-de-Vries.jpeg"
                });
                context.Employees.Add(new Employee
                {
                    Name = "Иван",
                    Surname = "Иванов",
                    Post = "Менеджер",
                    PhotoPath = "conseiller_immobilier_cap_riviera_menton_c.jpg"
                });
                context.Employees.Add(new Employee
                {
                    Name = "Иван",
                    Surname = "Иванов",
                    Post = "Менеджер",
                    PhotoPath = "ekip-mehmetak.png"
                });
                context.Employees.Add(new Employee
                {
                    Name = "Иван",
                    Surname = "Иванов",
                    Post = "Менеджер",
                    PhotoPath = "image-53.jpg"
                });
                context.Employees.Add(new Employee
                {
                    Name = "Иван",
                    Surname = "Иванов",
                    Post = "Менеджер",
                    PhotoPath = "photo.jpg"
                });
                context.Employees.Add(new Employee
                {
                    Name = "Иван",
                    Surname = "Иванов",
                    Post = "Менеджер",
                    PhotoPath = "stepanova-750x683.jpg"
                });
                context.Employees.Add(new Employee
                {
                    Name = "Иван",
                    Surname = "Иванов",
                    Post = "Менеджер",
                    PhotoPath = "27622331974_7a7fd1a709_b.jpg"
                });
                context.SaveChanges();
            }
        }
    }
}
