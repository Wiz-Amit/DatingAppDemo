using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using DatingApp.API.Data;
using Microsoft.EntityFrameworkCore;
using DatingApp.API.Dtos;
using Microsoft.AspNetCore.Identity;
using DatingApp.API.Models;
using CloudinaryDotNet;
using Microsoft.Extensions.Options;
using DatingApp.API.Helpers;
using CloudinaryDotNet.Actions;

namespace DatingApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly UserManager<User> _userManager;
        private readonly IOptions<CloudinarySettings> _cloudinaryConfig;
        private Cloudinary _cloudinary;

        public AdminController(
            DataContext context,
            UserManager<User> userManager,
            IOptions<CloudinarySettings> cloudinaryConfig)
        {
            _context = context;
            _userManager = userManager;
            _cloudinaryConfig = cloudinaryConfig;

            Account acc = new Account(
                _cloudinaryConfig.Value.CloudName,
                _cloudinaryConfig.Value.ApiKey,
                _cloudinaryConfig.Value.ApiSecret
            );

            _cloudinary = new Cloudinary(acc);
        }

        [Authorize(Policy = "RequireAdminRole")]
        [HttpGet("usersWithRoles")]
        public async Task<IActionResult> GetUsersWithRole()
        {
            var userList = await (from user in _context.Users orderby user.UserName
                                    select new
                                    {
                                        Id = user.Id,
                                        UserName = user.UserName,
                                        Roles = (from userRole in user.UserRoles
                                                    join role in _context.Roles
                                                    on userRole.RoleId
                                                    equals role.Id
                                                    select role.Name).ToList()
                                    }).ToListAsync();

            return Ok(userList);
        }

        [Authorize(Policy = "RequireAdminRole")]
        [HttpPost("editRoles/{userName}")]
        public async Task<IActionResult> EditRoles(string userName, RoleEditDto roleEdit)
        {
            var user = await _userManager.FindByNameAsync(userName);
            var userRoles = await _userManager.GetRolesAsync(user);
            var selectedRoles = roleEdit.RoleNames;

            selectedRoles = selectedRoles ?? new string[] {};

            var result = await _userManager.AddToRolesAsync(user, selectedRoles.Except(userRoles));
            if(!result.Succeeded)
                return BadRequest("Failed to save the roles");

            result = await _userManager.RemoveFromRolesAsync(user, userRoles.Except(selectedRoles));
            if(!result.Succeeded)
                return BadRequest("Failed to remove the roles");

            return Ok(await _userManager.GetRolesAsync(user));
        }

        [Authorize(Policy = "ModeratePhotoRole")]
        [HttpGet("photosForModeration")]
        public async Task<IActionResult> GetPhotosForModeration()
        {
            var photosFromRepo = await _context.Photo
                                    .IgnoreQueryFilters()
                                    .Where(p => !p.IsVerified)
                                    .OrderByDescending(p => p.DateAdded)
                                    .ToListAsync();

            return Ok(photosFromRepo);
        }

        [Authorize(Policy = "ModeratePhotoRole")]
        [HttpPost("approve/{id}")]
        public async Task<IActionResult> ApprovePhoto(int id)
        {
            var photoFromRepo = await _context.Photo
                .IgnoreQueryFilters()
                .FirstOrDefaultAsync(p => p.Id == id);
            photoFromRepo.IsVerified = true;

            if(await _context.SaveChangesAsync() > 0) {
                return Ok();
            } else {
                return BadRequest("Failed to approve the photo");
            }
        }

        [Authorize(Policy = "ModeratePhotoRole")]
        [HttpPost("reject/{id}")]
        public async Task<IActionResult> RejectPhoto(int id)
        {
            var photoFromRepo = await _context.Photo
                .IgnoreQueryFilters()
                .FirstOrDefaultAsync(p => p.Id == id);

            if(photoFromRepo.publicId != null) {
                var deletionParams = new DeletionParams(photoFromRepo.publicId);
                var result = _cloudinary.Destroy(deletionParams);
                if(result.Result == "ok") _context.Remove(photoFromRepo);
            }
            else if(photoFromRepo.publicId == null) _context.Remove(photoFromRepo);

            if(await _context.SaveChangesAsync() > 0) {
                return Ok();
            } else {
                return BadRequest("Filed to delete the photo");
            }
        }
    }
}