using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using UTTT.Abstractions;
using UTTT.Models;

namespace UTTT.Hubs
{
    public class GameHub : Hub
    {
        private readonly IGameManager _manager;

        public GameHub(IGameManager manager)
        {
            _manager = manager;
        }

        public async Task Join(string gameId)
        {
            var game = _manager.Games.ContainsKey(gameId)
                ? _manager.Games[gameId]
                : _manager.CreateGame(gameId);

            var joined = game.Join(Context.ConnectionId);

            if (joined)
            {
                await Groups.AddToGroupAsync(Context.ConnectionId, gameId);
                await Clients.Caller.SendAsync("Joined", game.State);
                await Clients.OthersInGroup(gameId).SendAsync("Update", game.State);
            }
        }

        public async Task ClaimField(string gameId, int area, int field)
        {
            var game = _manager.Games[gameId];

            game.ClaimField(Context.ConnectionId, area, field);

            await Clients.Group(gameId).SendAsync("Update", game.State);
        }

        public string GetConnectionId()
        {
            return Context.ConnectionId;
        }

        public override Task OnDisconnectedAsync(Exception exception)
        {
            return base.OnDisconnectedAsync(exception);
        }
    }
}