using Server.Interfaces;
using Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Server.DataLayer
{
    public class ContactProvider : IContactProvider
    {
        private List<Contact> contacts;

        public ContactProvider(IEnumerable<Contact> contacts)
        {
            this.contacts = contacts.ToList();
        }

        public IEnumerable<Contact> All()
        {
            return contacts;
        }

        public Contact Create(Contact contact)
        {
            var nextId = contacts.Any() ? contacts.Max(c => c.Id) + 1 : 1;
            contact.Id = nextId;

            contacts.Add(contact);

            return contact;
        }

        public void Delete(Contact contact)
        {
            contacts.Remove(contact);
        }

        public Contact FindById(int id)
        {
            return contacts.FirstOrDefault(c => c.Id == id);
        }

        public void Update(Contact contact)
        {
            var existing = contacts.FirstOrDefault(c => c.Id == contact.Id);

            if (existing == null) throw new KeyNotFoundException();

            var index = contacts.IndexOf(existing);

            contacts[index] = contact;
        }
    }
}
