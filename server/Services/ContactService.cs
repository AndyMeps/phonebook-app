using Business.Models;
using server.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace Business.Services
{
    public class ContactService : IContactService
    {
        private readonly List<Contact> CONTACTS = new List<Contact> {
            new Contact(1, "John", "Smith", "john.smith@email.com"),
            new Contact(2, "Betty", "White", "betty.white@email.com")
        };

        public List<Contact> GetContactList()
        {
            return CONTACTS;
        }

        public Contact AddContact()
        {
            CONTACTS.Add(new Contact(3, "John", "Wayne", "john.wayne@email.com"));
            return CONTACTS.First(c => c.Id == 3);
        }
    }
}
