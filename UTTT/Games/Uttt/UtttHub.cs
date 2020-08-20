using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using UTTT.Abstractions;
using UTTT.Abstractions.Models;
using UTTT.Games.Uttt.Models;
using UTTT.Utils;

namespace UTTT.Games.Uttt
{
    public class UtttHub : Hub
    {
        private static readonly ConnectionMapping<string> Connections = new ConnectionMapping<string>();

        private static readonly IList<string> LobbyConnections = new List<string>();
        const string LobbyGroupName = "Lobby";

        private readonly IGameManager _gameManager;

        public UtttHub(IGameManager gameManager)
        {
            _gameManager = gameManager;
        }

        public override async Task OnConnectedAsync()
        {
            await base.OnConnectedAsync();

            // Register connection when using identity/authentication.
        }

        public override async Task OnDisconnectedAsync(Exception exception)
        {
            await base.OnDisconnectedAsync(exception);

            // Unregister connection when using identity/authentication.
        }

        public async Task Identify(string id)
        {
            if (string.IsNullOrEmpty(id))
            {
                id = StringUtil.RandomString(8);
            }
        }

        public LobbyInfo GetLobbyInfo()
        {
            return new LobbyInfo
            {
                Games = new List<string>(),
                Players = LobbyConnections
            };
        }

        public async Task Challenge(string playerId)
        {
            if (Context.ConnectionId == playerId)
                throw new Exception("You cannot challenge yourself");

            await Clients.Client(playerId).SendAsync("challenged", Context.ConnectionId);
        }

        public async Task Accept(string playerId)
        {
            await Clients.Client(playerId).SendAsync("accepted", Context.ConnectionId);
        }

        public async Task Reject(string playerId)
        {
            await Clients.Client(playerId).SendAsync("rejected", Context.ConnectionId);
        }

        public async Task Spectate(string gameId)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, gameId);
        }

        public async Task<string> NewGame()
        {
            var game = _gameManager.CreateGame(Context.ConnectionId);

            await Groups.AddToGroupAsync(Context.ConnectionId, game.State.Id);

            return game.State.Id;
        }

        public async Task<string> JoinGame(string gameId)
        {
            var game = _gameManager.JoinGame(gameId, Context.ConnectionId);

            await Groups.AddToGroupAsync(Context.ConnectionId, game.State.Id);

            await Clients.Group(gameId).SendAsync("GameUpdate", game.State);

            return game.State.Id;
        }

        public Game GetGameState(string gameId)
        {
            var game = _gameManager.GetGameForPlayer(Context.ConnectionId);
            return game.State;
        }

        public async Task Claim(string gameId, int area, int field)
        {
            var game = _gameManager.GetGameForPlayer(Context.ConnectionId);
            if (game == null)
                return;

            game.ClaimField(Context.ConnectionId, area, field);

            await Clients.Group(game.State.Id).SendAsync("claimed", game.State);
        }
    }
}