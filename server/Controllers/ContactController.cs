using System.Collections.Generic;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Server.Models;
using Server.Models.DataTransfer;
using Business.Services;
using server.Interfaces;

namespace Server.Controllers
{
    public class ContactsController : BaseApiController
    {
        private readonly ILogger _logger;
        private readonly IContactService _contactService;

        public ContactsController(ILoggerFactory loggerFactory, IContactService contactService)
        {
            _logger = loggerFactory.CreateLogger<ContactsController>();
            _contactService = contactService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return new JsonResult(_contactService.GetContactList());
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            return new JsonResult(_contactService.GetById(id));
        }

        [HttpPost]
        public IActionResult Create([FromBody]CreateContactModel model)
        {
            var createdEntity = _contactService.Create(
                model.FirstName,
                model.LastName,
                model.Email,
                model.HomeNumber,
                model.MobileNumber,
                model.ImageHash
            );

            return new JsonResult(createdEntity);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody]UpdateContactModel model)
        {
            var updatedEntity = _contactService.Update(id, model.FirstName, model.LastName, model.Email, model.ImageHash);

            return new JsonResult(updatedEntity);
        }
    }
}
