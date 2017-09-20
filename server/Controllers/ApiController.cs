// Copyright © 2014-present Kriasoft, LLC. All rights reserved.
// This source code is licensed under the MIT license found in the
// LICENSE.txt file in the root directory of this source tree.

using System.Collections.Generic;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Server.Models;
using Business.Services;
using server.Interfaces;

namespace Server.Controllers
{
    public class ApiController : Controller
    {
        private readonly ILogger _logger;
        private readonly IContactService _contactService;

        public ApiController(ILoggerFactory loggerFactory, IContactService contactService)
        {
            _logger = loggerFactory.CreateLogger<ApiController>();
            _contactService = contactService;
        }

        [HttpGet("api/contacts")]
        public IActionResult Contacts()
        {
            return new JsonResult(_contactService.GetContactList());
        }

        [HttpGet("api/addcontact")]
        public IActionResult AddContact()
        {
            return new JsonResult(_contactService.AddContact());
        }
    }
}
