using Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Interfaces
{
    public interface IContactProvider
    {
        IEnumerable<Contact> All();
        Contact FindById(int id);
        Contact Create(Contact contact);
        void Update(Contact contact);
        void Delete(Contact contact);
    }
}
