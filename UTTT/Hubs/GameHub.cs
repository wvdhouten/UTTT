using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using UTTT.Abstractions;
using UTTT.Models;

namespace UTTT.Hubs
{
    public class GameHub : Hub
    {
        private static readonly Random Random = new Random();
        private readonly IGameManager _manager;

        public GameHub(IGameManager manager)
        {
            _manager = manager;
        }

        public void UpdateName(string name)
        {
            if (_manager.Players.ContainsKey(Context.ConnectionId))
            {
                _manager.Players[Context.ConnectionId] = name;
                return;
            }

            _manager.Players.Add(Context.ConnectionId, name);
        }

        public IDictionary<string, string> GetGames()
        {
            return _manager.Games.Where(x => x.Value.State.Status == GameState.GameStatus.Open).ToDictionary(x => x.Key, x => _manager.Players[x.Value.Player1]);
        }

        public async Task Join(string gameId, string playerName)
        {
            if (_manager.Games.Any(x => x.Value.Player1 == Context.ConnectionId || x.Value.Player2 == Context.ConnectionId))
            {
                return;
            }

            UpdateName(playerName);

            if (string.IsNullOrEmpty(gameId))
                gameId = RandomString(8);

            var game = _manager.Games.ContainsKey(gameId)
                ? _manager.Games[gameId]
                : _manager.CreateGame(gameId);

            var joined = game.Join(Context.ConnectionId);
            if (joined)
            {
                await Groups.AddToGroupAsync(Context.ConnectionId, gameId);
                await Clients.All.SendAsync("UpdateGames", GetGames());
                await Clients.Group(gameId).SendAsync("Update", game.State);
            }
        }

        public async Task ClaimField(int area, int field)
        {
            var game = _manager.Games.SingleOrDefault(x => x.Value.Player1 == Context.ConnectionId || x.Value.Player2 == Context.ConnectionId);

            game.Value.ClaimField(Context.ConnectionId, area, field);

            await Clients.Group(game.Key).SendAsync("Update", game.Value.State);
        }

        public string GetConnectionId()
        {
            return Context.ConnectionId;
        }

        public override Task OnDisconnectedAsync(Exception exception)
        { 
            return base.OnDisconnectedAsync(exception);
        }

        public static string RandomString(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            return new string(Enumerable.Repeat(chars, length)
                .Select(s => s[Random.Next(s.Length)]).ToArray());
        }
    }
}