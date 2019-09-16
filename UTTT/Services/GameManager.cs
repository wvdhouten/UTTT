﻿using System.Collections.Generic;
using UTTT.Abstractions;
using UTTT.Business;

namespace UTTT.Services
{
    public class GameManager : IGameManager
    {
        public IDictionary<string, Game> Games { get; } = new Dictionary<string, Game>();
        public IDictionary<string, string> Players { get; } = new Dictionary<string, string>();

        public Game CreateGame(string gameId)
        {
            var game = new Game();
            Games.Add(gameId, game);
            return game;
        }
    }
}