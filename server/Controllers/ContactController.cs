using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Server.Helpers;
using Server.Interfaces;
using Server.Models.DataTransfer;

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
            var namesOnly = _contactService.GetContactList();

            return new JsonResult(namesOnly);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var contact = _contactService.GetById(id);
            if (contact == null) return new NotFoundResult();

            return new JsonResult(contact);
        }

        [HttpPost]
        public IActionResult Create([FromBody]CreateContactModel model)
        {
            if (!ModelState.IsValid) return new BadRequestObjectResult(ModelState);

            var createdEntity = _contactService.Create(
                model.FirstName,
                model.LastName,
                model.Email,
                model.HomeNumber,
                model.MobileNumber,
                model.ImageHash
            );

            return new CreatedResult($"/api/contacts/{createdEntity.Id}", createdEntity);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody]UpdateContactModel model)
        {
            try
            {
                var updatedEntity = _contactService.Update(
                    id,
                    model.FirstName,
                    model.LastName,
                    model.Email,
                    model.HomeNumber,
                    model.MobileNumber,
                    model.ImageHash
                );

                return new JsonResult(updatedEntity);
            }
            catch (KeyNotFoundException) // Contact not found.
            {
                return new JsonErrorResult(ErrorResults.ContactNotFoundResult, System.Net.HttpStatusCode.BadRequest);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _contactService.DeleteById(id);

            return new NoContentResult();
        }
    }
}
