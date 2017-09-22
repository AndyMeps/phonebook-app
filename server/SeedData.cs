using Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server
{
    public static class SeedData
    {
        public static IEnumerable<Contact> Contacts = new List<Contact> {
            new Contact {
                Id = 1,
                FirstName = "John",
                LastName = "Smith",
                Email = "john.smith@email.com"
            },
            new Contact {
                Id = 2,
                FirstName = "Betty",
                LastName = "White",
                MobileNumber = "+447654292101",
                Email = "betty.white@email.com"
            }
        };
    }
}
