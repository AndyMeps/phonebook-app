using System;
using System.Collections.Generic;
using System.Text;

namespace Server.Models
{
    public class Contact
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string ImageHash { get; set; }
        public string HomeNumber {get;set;}
        public string MobileNumber {get;set;}

        public Contact() { }

        public Contact(int id, string firstName, string lastName, string email = null,
            string homeNumber = null, string mobileNumber = null, string imageHash = null)
        {
            Id = id;
            FirstName = firstName;
            LastName = lastName;
            Email = email;
            HomeNumber = homeNumber;
            MobileNumber = mobileNumber;
            ImageHash = imageHash;
        }
    }
}
