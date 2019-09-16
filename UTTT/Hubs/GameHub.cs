﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using UTTT.Abstractions;
using UTTT.Games.Uttt.Models;

namespace UTTT.Hubs
{
    public class GameHub : Hub
    {
        private readonly IGameManager _manager;

        public GameHub(IGameManager manager)
        {
            _manager = manager;
        }

        public IDictionary<string, string> GetGames()
        {
            return _manager.Games.Where(x => x.State.Winner != GameState.Owner.None)
                .ToDictionary(x => x.State.Id, x => x.State.Player1.Name);
        }

        public async Task Create(string playerName)
        {
            var game = _manager.CreateGame(Context.ConnectionId, playerName);

            await Groups.AddToGroupAsync(Context.ConnectionId, game.State.Id);
            await Clients.All.SendAsync("UpdateGames", GetGames());
        }

        public async Task Join(string gameId, string playerName)
        {
            var game = _manager.JoinGame(gameId, Context.ConnectionId, playerName);

            await Groups.AddToGroupAsync(Context.ConnectionId, gameId);
            await Clients.All.SendAsync("UpdateGames", GetGames());

            await Clients.Group(gameId).SendAsync("Update", game.State);
        }

        public async Task ClaimField(int area, int field)
        {
            var game = _manager.GetGameForPlayer(Context.ConnectionId);
            if (game == null)
                return;

            game.ClaimField(Context.ConnectionId, area, field);

            await Clients.Group(game.State.Id).SendAsync("Update", game.State);
        }

        public string GetConnectionId()
        {
            return Context.ConnectionId;
        }

        public override Task OnDisconnectedAsync(Exception exception)
        {
            // TODO: Close games and what not.

            return base.OnDisconnectedAsync(exception);
        }
    }
}