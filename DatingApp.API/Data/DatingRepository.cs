using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.API.Helpers;
using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    public class DatingRepository : IDatingRepository
    {
        private readonly DataContext _context;
        public DatingRepository(DataContext context)
        {
            _context = context;

        }

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<Like> GetLike(int userId, int reciepentId)
        {
            return await _context.Likes.FirstOrDefaultAsync(u => u.LikerId == userId && u.LikeeId == reciepentId);
        }

        public async Task<Photo> GetMainPhoto(int userId)
        {
            return await _context.Photo.Where(u => u.UserId == userId).FirstOrDefaultAsync(p => p.IsMain);
        }

        public async Task<Photo> GetPhoto(int id)
        {
            var photoForReturn = await _context.Photo.FirstOrDefaultAsync(p => p.Id == id);
            return photoForReturn;
        }

        public async Task<User> GetUser(int id)
        {
            var user = await _context.Users.Include(p => p.Photos)
                .FirstOrDefaultAsync(u => u.Id == id);
            return user;
        }

        public async Task<PagedList<User>> GetUsers(UserParams userParams)
        {
            var users =  _context.Users.Include(p => p.Photos).AsQueryable();

            users = users.Where(u => u.Id != userParams.UserId);
            users = users.Where( u => u.Gender == userParams.Gender);

            if(userParams.Likers)
            {
                var likers = await GetUserLikes(userParams.UserId, userParams.Likers);
                users = users.Where(u => likers.Contains(u.Id));
            }

            if(userParams.Likees)
            {
                var likees = await GetUserLikes(userParams.UserId, userParams.Likers);
                users = users.Where(u => likees.Contains(u.Id));
            }

            if(userParams.OrderBy == "created") users = users.OrderByDescending(u => u.Created);
            else users = users.OrderByDescending(u => u.LastActive);

            if(userParams.MinAge != 18 || userParams.MaxAge != 99)
            {
                var minDob = DateTime.Today.AddYears(-userParams.MinAge - 1);
                var maxDob = DateTime.Today.AddYears(-userParams.MaxAge);

                users = users.Where(u => u.DateOfBirth >= maxDob && u.DateOfBirth <= minDob);
            }

            return await PagedList<User>.CreateAsync(users, userParams.PageNumber, userParams.PageSize);
        }

        private async Task<IEnumerable<int>> GetUserLikes(int id, bool likers)
        {
            var user = await _context.Users
                .Include(u => u.Likers)
                .Include(u => u.Likees)
                .FirstOrDefaultAsync(u => u.Id == id);

            if(likers) return user.Likers.Where(u => u.LikeeId == id).Select(u => u.LikerId);
            else return user.Likees.Where(u => u.LikerId == id).Select(u => u.LikeeId);
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<Message> GetMessage(int id)
        {
            return await _context.Messages.FirstOrDefaultAsync(m => m.Id == id);
        }

        public async Task<PagedList<Message>> GetMessagesForUser(MessageParams messageParams)
        {
            var messages = _context.Messages
                .Include(u => u.Sender).ThenInclude(u => u.Photos)
                .Include(u => u.Recipient).ThenInclude(u => u.Photos)
                .AsQueryable();

            switch(messageParams.MessageContainer) {
                case "Inbox":
                    messages = messages.Where(m => m.Recipient.Id == messageParams.UserId
                        && m.RecipientDeleted == false);
                    break;
                case "Outbox":
                    messages = messages.Where(m => m.Sender.Id == messageParams.UserId
                        && m.SenderDeleted == false);
                    break;
                default:
                    messages = messages.Where(m => m.Recipient.Id == messageParams.UserId
                        && m.IsRead == false && m.RecipientDeleted == false);
                    break;
            }

            messages = messages.OrderByDescending(m => m.MessageSent);

            return await PagedList<Message>.CreateAsync(messages, messageParams.PageNumber, messageParams.PageSize);
        }

        public async Task<IEnumerable<Message>> GetMessagesThread(int SenderId, int recipientId)
        {
            //sender is the current user
            var messages = await _context.Messages
                .Include(u => u.Sender).ThenInclude(u => u.Photos)
                .Include(u => u.Recipient).ThenInclude(u => u.Photos)
                .Where(m => m.SenderId == recipientId && m.RecipientId == SenderId
                    && m.RecipientDeleted == false
                    || m.SenderId == SenderId && m.RecipientId == recipientId
                    && m.SenderDeleted == false)
                .OrderByDescending(m => m.MessageSent)
                .ToListAsync();

            return messages;
        }
    }
}