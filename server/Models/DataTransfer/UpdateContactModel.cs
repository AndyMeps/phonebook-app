using System.ComponentModel.DataAnnotations;

namespace Server.Models.DataTransfer {

    public class UpdateContactModel
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string HomeNumber { get; set; }

        public string MobileNumber { get; set; }

        [EmailAddress]
        public string Email { get; set; }

        public string ImageHash { get; set; }
    }

}
