using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using Server.Models.DataTransfer;

namespace Server.Models
{
    public class Contact
    {
        public int? Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string ImageHash { get; set; }
        public string HomeNumber { get; set; }
        public string MobileNumber { get; set; }

        public Contact() { }

        public Contact(string firstName, string lastName, string email = null,
            string homeNumber = null, string mobileNumber = null, string imageHash = null)
            : this(null, firstName, lastName, email, homeNumber, mobileNumber, imageHash)
        {  }

        public Contact(int? id, string firstName, string lastName, string email = null,
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

    /// <summary>
    /// Helper methods relating to the Contact entity.
    /// </summary>
    public static class ContactExtensions {
		/// <summary>
		/// Takes an IEnumerable of Contacts and returns an IEnumerable of SimpleContacts.
		/// </summary>
		public static IEnumerable<SimpleContactModel> ToSummary(this IEnumerable<Contact> contacts)
		{
			return contacts.Select(c =>
			{
				return new SimpleContactModel
				{
					Id = c.Id.Value,
					FirstName = c.FirstName,
					LastName = c.LastName,
					ImageSource = c.ImageHash
				};
			});
		}
    }
}
