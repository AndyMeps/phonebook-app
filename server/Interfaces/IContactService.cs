using Business.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Interfaces
{
    public interface IContactService
    {
        List<Contact> GetContactList();
        Contact AddContact();
    }
}
