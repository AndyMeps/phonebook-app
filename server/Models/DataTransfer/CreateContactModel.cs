using System.ComponentModel.DataAnnotations;

namespace Server.Models.DataTransfer {

    public class CreateContactModel
    {
        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [EmailAddress]
        public string Email { get; set; }

        public string HomeNumber { get; set; }

        public string MobileNumber { get; set; }

        public string ImageHash { get; set; }
    }
}
