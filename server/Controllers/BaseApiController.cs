using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Server.Models;
using Server.Services;
using server.Interfaces;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    public class BaseApiController : Controller
    {
        public BaseApiController() { }
    }
}
