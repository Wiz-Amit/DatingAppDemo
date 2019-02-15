using System.Threading.Tasks;
using DatingApp.API.Dtos;
using DatingApp.API.Models;

namespace DatingApp.API.Hubs
{
    public interface IMessageHub
    {
        Task PushNewMessage(MessageToReturnDto message);
    }
}