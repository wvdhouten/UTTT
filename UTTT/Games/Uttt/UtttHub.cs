using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using UTTT.Abstractions;
using UTTT.Games.Uttt.Models;

namespace UTTT.Games.Uttt
{
    public class UtttHub : Hub
    {
        private readonly IGameManager _gameManager;
        private readonly IPlayerManager _playerManager;

        public UtttHub(IGameManager gameManager, IPlayerManager playerManager)
        {
            _gameManager = gameManager;
            _playerManager = playerManager;
        }

        public IDictionary<string, string> GetGames()
        {
            return _gameManager.Games.Where(x => x.State.Winner == GameState.Owner.None)
                .ToDictionary(x => x.State.Id, x => x.State.Player1.Name);
        }

        public async Task NewGame(string playerName)
        {
            try
            {
                var game = _gameManager.CreateGame(Context.ConnectionId, playerName);

                await Groups.AddToGroupAsync(Context.ConnectionId, game.State.Id);
                await Clients.All.SendAsync("UpdateGames", GetGames());
            }
            catch (Exception e)
            {
                await HandleException(e);
            }
        }

        public async Task JoinGame(string gameId, string playerName)
        {
            try
            {
                var game = _gameManager.JoinGame(gameId, Context.ConnectionId, playerName);

                await Groups.AddToGroupAsync(Context.ConnectionId, gameId);
                await Clients.All.SendAsync("UpdateGames", GetGames());

                await Clients.Group(gameId).SendAsync("Update", game.State);
            }
            catch (Exception e)
            {
                await HandleException(e);
            }
        }

        public async Task ClaimField(int area, int field)
        {
            try
            {
                var game = _gameManager.GetGameForPlayer(Context.ConnectionId);
                if (game == null)
                    return;

                game.ClaimField(Context.ConnectionId, area, field);

                await Clients.Group(game.State.Id).SendAsync("Update", game.State);
            }
            catch (Exception e)
            {
                await HandleException(e);
            }
        }

        private async Task HandleException(Exception e)
        {
            await Clients.Caller.SendAsync("Error", e.Message);
            throw new HubException(e.Message);
        }

        public override async Task OnDisconnectedAsync(Exception exception)
        {
            var game = _gameManager.GetGameForPlayer(Context.ConnectionId);
            if (game == null) { 
                await base.OnDisconnectedAsync(exception);
                return;
            }

            _gameManager.Games.Remove(game);
            await Clients.OthersInGroup(game.State.Id).SendAsync("Disconnected", game.State);
            await Clients.All.SendAsync("UpdateGames", GetGames());

            await base.OnDisconnectedAsync(exception);
        }
    }
}