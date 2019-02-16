using System.Collections.Generic;
using System.Threading.Tasks;
using DatingApp.API.Dtos;
using DatingApp.API.Models;
using Microsoft.AspNetCore.SignalR;

namespace DatingApp.API.Hubs
{
    public class MessageHub : Hub
    {
        // List<UserConnection> uList=new List<UserConnection>();
        
        // private async Task PushNewMessage(MessageToReturnDto message)
        // {
        //     await Clients.All.SendAsync("newMessage", message);
        // }
    }
}