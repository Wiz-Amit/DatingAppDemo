using System.Threading.Tasks;
using DatingApp.API.Dtos;
using DatingApp.API.Models;
using Microsoft.AspNetCore.SignalR;

namespace DatingApp.API.Hubs
{
    // public class MessageHub : Hub<IMessageHub>
    // {
    // }

    public class MessageHub : Hub
    {
        // private async Task PushNewMessage(MessageToReturnDto message)
        // {
        //     await Clients.All.SendAsync("newMessage", message);
        // }
    }
}