using Server.Models;
using Server.Interfaces;
using System.Collections.Generic;
using System.Linq;
using Server.Models.DataTransfer;

namespace Server.Services
{
    public class ContactService : IContactService
    {
        private readonly IContactProvider _contactProvider;

        public ContactService(IContactProvider contactProvider)
        {
            _contactProvider = contactProvider;
        }

        /// <summary>
        /// Get all Contacts.
        /// </summary>
        public IEnumerable<SimpleContactModel> GetContactList()
        {
            return _contactProvider.All().Select(c => {
                return new SimpleContactModel { Id = c.Id.Value, FirstName = c.FirstName, LastName = c.LastName };
            });
        }

        /// <summary>
        /// Create a new Contact.
        /// </summary>
        public Contact Create(string firstName, string lastName, string email,
                              string homeNumber, string mobileNumber, 
                              string imageHash)
        {
            var newContact = _contactProvider.Create(new Contact(
                firstName,
                lastName,
                email,
                homeNumber,
                mobileNumber,
                imageHash
            ));
            
            return newContact;
        }

        /// <summary>
        /// Get a single contact based on Id.
        /// </summary>
        public Contact GetById(int id)
        {
            return _contactProvider.FindById(id);
        }

        /// <summary>
        /// Update a single contact based on Id.
        /// </summary>
        public Contact Update(int id, string firstName, string lastName,
                              string email, string homeNumber, string mobileNumber, string imageHash)
        {
            var contact = GetById(id);

            if (contact == null) throw new KeyNotFoundException();

            // Probably the neater option based on required logic, in reality using
            // EF or another ORM could handle this internally inside the Data Layer
            // rather than manually in the service.
            contact.FirstName = firstName ?? contact.FirstName;
            contact.LastName = lastName ?? contact.LastName;
            contact.Email = email ?? contact.Email;
            contact.HomeNumber = homeNumber ?? contact.HomeNumber;
            contact.MobileNumber = mobileNumber ?? contact.MobileNumber;
            contact.ImageHash = imageHash ?? contact.ImageHash;

            _contactProvider.Update(contact);

            return contact;
        }

        /// <summary>
        /// Delete a single contact based on Id.
        /// </summary>
        public void DeleteById(int id)
        {
            var contact = _contactProvider.FindById(id);

            if (contact == null) return; // No point in throwing, consider it job done!

            _contactProvider.Delete(contact);
        }
    }
}
