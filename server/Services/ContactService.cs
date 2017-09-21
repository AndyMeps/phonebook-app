using Server.Models;
using server.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace Server.Services
{
    public class ContactService : IContactService
    {
        private readonly List<Contact> _seedContacts = new List<Contact> {
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

        private readonly List<Contact> CONTACTS;

        public ContactService(List<Contact> contacts = null)
        {
            CONTACTS = contacts ?? _seedContacts;
        }

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
            var nextContactId = CONTACTS.Any() ? CONTACTS.Max(c => c.Id) + 1 : 1;
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

        public Contact Update(int id, string firstName, string lastName,
                              string email, string homeNumber, string mobileNumber, string imageHash)
        {
            var contact = GetById(id);

            if (contact == null) throw new KeyNotFoundException();

            var index = _indexOf(contact);

            if (firstName != null) {
                contact.FirstName = firstName;
            }

            if (lastName != null) {
                contact.LastName = lastName;
            }

            if (email != null) {
                contact.Email = email;
            }

            if (homeNumber != null)
            {
                contact.HomeNumber = homeNumber;
            }

            if (mobileNumber != null)
            {
                contact.MobileNumber = mobileNumber;
            }

            if (imageHash != null) {
                contact.ImageHash = imageHash;
            }

            CONTACTS[index] = contact;

            return contact;
        }

        public void DeleteById(int id)
        {
            var contact = GetById(id);

            if (contact == null) return; // No point in throwing, consider it job done!

            CONTACTS.Remove(contact);
        }

        private int _indexOf(Contact contact)
        {
            return CONTACTS.IndexOf(contact);
        }
    }
}
