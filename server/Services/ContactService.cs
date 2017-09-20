using Business.Models;
using server.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace Business.Services
{
    public class ContactService : IContactService
    {
        private readonly List<Contact> CONTACTS = new List<Contact> {
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

        public List<Contact> GetContactList()
        {
            return CONTACTS;
        }

        /// <summary>
        /// Create a new Contact.
        /// </summary>
        /// <returns>The created contact.</returns>
        /// <param name="firstName">First name of contact.</param>
        /// <param name="lastName">Last name of contact.</param>
        /// <param name="email">Email of contact.</param>
        /// <param name="homeNumber">Home number of contact.</param>
        /// <param name="mobileNumber">Mobile number of contact.</param>
        /// <param name="imageHash">Image hash of contact.</param>
        public Contact Create(string firstName, string lastName, string email,
                              string homeNumber, string mobileNumber, 
                              string imageHash)
        {
            var nextContactId = CONTACTS.Max(c => c.Id) + 1;
            var newContact = new Contact(
                nextContactId,
                firstName,
                lastName,
                email,
                homeNumber,
                mobileNumber,
                imageHash
            );

            CONTACTS.Add(newContact);
            
            return newContact;
        }

        public Contact GetById(int id)
        {
            return CONTACTS.FirstOrDefault(c => c.Id == id);
        }

        public int IndexOf(Contact contact)
        {
            return CONTACTS.IndexOf(contact);
        }

        public Contact Update(int id, string firstName, string lastName,
                              string email, string imageHash)
        {
            var contact = GetById(id);

            if (contact == null) return null; // Should throw exception.
            var index = IndexOf(contact);

            if (firstName != null) {
                contact.FirstName = firstName;
            }

            if (lastName != null) {
                contact.LastName = lastName;
            }

            if (email != null) {
                contact.Email = email;
            }

            if (imageHash != null) {
                contact.ImageHash = imageHash;
            }

            CONTACTS[index] = contact; // Gross

            return contact;
        }
    }
}
