using Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Interfaces
{
    public interface IContactService
    {
        /// <summary>
        /// Get the contact list.
        /// </summary>
        /// <returns>The contact list.</returns>
        List<Contact> GetContactList();

        /// <summary>
        /// Create a new contact.
        /// </summary>
        /// <returns>The create.</returns>
        /// <param name="firstName">First name.</param>
        /// <param name="lastName">Last name.</param>
        /// <param name="email">Email.</param>
        /// <param name="homeNumber">Home number.</param>
        /// <param name="mobileNumber">Mobile number.</param>
        /// <param name="imageHash">Image hash.</param>
        Contact Create(string firstName, string lastName, string email, string homeNumber, string mobileNumber, string imageHash);

        /// <summary>
        /// Get contact by Id.
        /// </summary>
        /// <returns>The by identifier.</returns>
        /// <param name="id">Identifier.</param>
        Contact GetById(int id);

        /// <summary>
        /// Update contact based on provided Id and properties.
        /// </summary>
        /// <returns>The update.</returns>
        /// <param name="id">Identifier.</param>
        /// <param name="firstName">First name.</param>
        /// <param name="lastName">Last name.</param>
        /// <param name="email">Email.</param>
        /// <param name="imageHash">Image hash.</param>
        Contact Update(int id, string firstName, string lastName, string email, string homeNumber, string mobileNumber, string imageHash);

        void DeleteById(int id);
    }
}
