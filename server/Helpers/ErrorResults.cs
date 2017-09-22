using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Helpers
{
    public static class ErrorResults
    {
        public static BaseErrorResult ContactNotFoundResult = new BaseErrorResult { Message = "Contact not found." };
    }

    public class BaseErrorResult
    {
        public string Message { get; set; }
    }
}
