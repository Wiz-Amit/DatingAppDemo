using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(8, MinimumLength=8, ErrorMessage="Password must be within 4 to 8 characters.")]
        public string Password { get; set; }
    }
}