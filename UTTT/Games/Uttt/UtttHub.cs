using System;
using System.Collections.Generic;
using System.Linq;
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

        public string Identify(string id, string name)
        {
            id = _playerManager.RegisterOrRename(id, name);
            Context.Items.Add("PlayerId", id);
            return id;
        }

        public IDictionary<string, string> GetGames()
        {
            return _gameManager.Games.Where(x => x.State.Winner == Game.Owner.None 
                                                 && x.State.Player2 == null)
                .ToDictionary(x => x.State.Id, x => x.State.Player1.Name);
        }

        public async Task<string> NewGame()
        {
            try
            {
                var playerId = Context.GetPlayerId();
                var game = _gameManager.CreateGame(playerId, _playerManager.GetPlayerName(playerId));

                await Groups.AddToGroupAsync(Context.ConnectionId, game.State.Id);
                await Clients.All.SendAsync("GamesUpdate", GetGames());

                return game.State.Id;
            }
            catch (Exception e)
            {
                await HandleException(e);
                throw;
            }
        }

        public async Task<string> JoinGame(string gameId)
        {
            try
            {
                var playerId = Context.GetPlayerId();
                var game = _gameManager.JoinGame(gameId, playerId, _playerManager.GetPlayerName(playerId));

                await Groups.AddToGroupAsync(Context.ConnectionId, game.State.Id);
                await Clients.All.SendAsync("GamesUpdate", GetGames());

                await Clients.Group(gameId).SendAsync("GameUpdate", game.State);

                return game.State.Id;
            }
            catch (Exception e)
            {
                await HandleException(e);
                throw;
            }
        }

        public async Task ClaimField(string gameId, int area, int field)
        {
            // TODO: continue work here.
            var playerId = (string)Context.Items["PlayerId"];
            try
            {
                var game = _gameManager.GetGameForPlayer(playerId);
                if (game == null)
                    return;

                game.ClaimField(playerId, area, field);

                await Clients.Group(game.State.Id).SendAsync("GameUpdate", game.State);
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
            var currentGame = (string)Context.Items["CurrentGame"];

            var game = _gameManager.GetGameForPlayer(currentGame);
            if (game == null)
            {
                await base.OnDisconnectedAsync(exception);
                return;
            }

            _gameManager.Games.Remove(game);
            await Clients.OthersInGroup(game.State.Id).SendAsync("Disconnected", game.State);
            await Clients.All.SendAsync("GamesUpdate", GetGames());

            await base.OnDisconnectedAsync(exception);
        }
    }
}