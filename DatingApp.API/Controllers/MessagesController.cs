using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using DatingApp.API.Data;
using DatingApp.API.Dtos;
using DatingApp.API.Helpers;
using DatingApp.API.Hubs;
using DatingApp.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace DatingApp.API.Controllers
{
    [ServiceFilter(typeof(LogUserActivity))]
    [Authorize]
    [Route("api/users/{userId}/[controller]")]
    [ApiController]
    public class MessagesController : ControllerBase
    {
        private readonly IDatingRepository _repo;
        private readonly IMapper _mapper;
        private readonly IHubContext<MessageHub> _messageHub;

        // private IHubContext<MessageHub, IMessageHub> _messageHubContext;

        public MessagesController(IDatingRepository repo, IMapper mapper, IHubContext<MessageHub> messageHub)
        {
            // _messageHubContext = messageHubContext;
            _mapper = mapper;
            _messageHub = messageHub;
            _repo = repo;
        }

        [HttpGet("{id}", Name = "GetMessage")]
        public async Task<IActionResult> GetMessage(int userId, int messageId)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var messageFromRepo = await _repo.GetMessage(messageId);

            if (messageFromRepo == null) NotFound();

            return Ok(messageFromRepo);
        }

        [HttpGet]
        public async Task<IActionResult> GetMessagesForUser(int userId, [FromQuery]MessageParams messageParams)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            messageParams.UserId = userId;
            var messagesFromRepo = await _repo.GetMessagesForUser(messageParams);
            var messages = _mapper.Map<IEnumerable<MessageToReturnDto>>(messagesFromRepo);
            Response.AddPagination(messagesFromRepo.CurrentPage, messagesFromRepo.PageSize,
                messagesFromRepo.TotalCount, messagesFromRepo.TotalPage);

            return Ok(messages);
        }

        [HttpPost]
        public async Task<IActionResult> CreateMessage(int userId, MessageCreationDto messageForCreation)
        {
            var sender = await _repo.GetUser(userId);

            if (sender.Id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            messageForCreation.SenderId = userId;

            var recipient = await _repo.GetUser(messageForCreation.RecipientId);
            if (recipient == null)
                return BadRequest("User not found");

            var message = _mapper.Map<Message>(messageForCreation);
            _repo.Add(message);

            if (await _repo.SaveAll())
            {
                var messageToReturn = _mapper.Map<MessageToReturnDto>(message);

                try
                {
                    // await _messageHub.PushNewMessage(messageToReturn);
                    await _messageHub.Clients.All.SendAsync("newMessage", messageToReturn);
                    // await _messageHubContext.Clients.All.PushNewMessage(messageToReturn);
                }
                catch (Exception e)
                {
                    throw new Exception(e.ToString());
                } 

                return CreatedAtRoute("GetMessage", new { id = message.Id }, messageToReturn);
            }

            throw new Exception("Could not save the message");
        }

        [HttpGet("thread/{recipientId}")]
        public async Task<IActionResult> GetMessagesThread(int userId, int recipientId)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            if (await _repo.GetUser(recipientId) == null)
                return BadRequest("User not found");

            var messagesFromRepo = await _repo.GetMessagesThread(userId, recipientId);

            var messagesToReturn = _mapper.Map<IEnumerable<MessageToReturnDto>>(messagesFromRepo);

            return Ok(messagesToReturn);
        }

        [HttpPost("{messageId}")]
        public async Task<IActionResult> DeleteMessage(int userId, int messageId)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var message = await _repo.GetMessage(messageId);

            if (message.SenderId == userId) message.SenderDeleted = true;
            if (message.RecipientId == userId) message.RecipientDeleted = true;

            if (message.SenderDeleted == true && message.RecipientDeleted == true)
                _repo.Delete(message);

            if (await _repo.SaveAll()) return NoContent();
            throw new Exception("Failed to delete the message");
        }

        [HttpPost("{messageId}/read")]
        public async Task<IActionResult> MarkMessageAsRead(int userId, int messageId)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var message = await _repo.GetMessage(messageId);

            if (message.RecipientId == userId && message.IsRead == false)
            {
                message.IsRead = true;
                message.DataRead = DateTime.Now;
            }

            await _repo.SaveAll();

            return NoContent();
        }
    }
}