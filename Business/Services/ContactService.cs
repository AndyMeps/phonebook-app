using Business.Models;
using System.Collections.Generic;

namespace Business.Services
{
    public class ContactService
    {
        public List<Contact> GetContactList()
        {
            return new List<Contact>
            {
                new Contact(1, "John", "Smith", "john.smith@email.com")
            };
        }
    }
}
