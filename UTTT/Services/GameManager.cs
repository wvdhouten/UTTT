using System;
using System.Collections.Generic;
using System.Linq;
using UTTT.Abstractions;
using UTTT.Games.Uttt;
using UTTT.Games.Uttt.Models;
using UTTT.Utils;

namespace UTTT.Services
{
    public class GameManager : IGameManager
    {
        public IList<GameEngine> Games { get; } = new List<GameEngine>();

        public GameEngine CreateGame(string playerId, string playerName)
        {
            var game = GetGameForPlayer(playerId);
            if (game != null)
                throw new Exception("Player is already in a game.");

            game = new GameEngine();
            game.State.Player1 = new Player(playerId, playerName);
            game.State.ActivePlayer = playerId;
            game.State.Id = StringUtil.RandomString(8);
            Games.Add(game);
            return game;
        }

        public GameEngine JoinGame(string gameId, string playerId, string playerName)
        {
            var game = GetGameForPlayer(playerId);
            if (game != null)
                throw new Exception("Player is already in a game.");

            game = GetGameById(gameId);
            if (game == null)
                throw new Exception("Game not found.");

            if (game.State.Player2 != null)
                throw  new Exception("Game is full.");

            game.State.Player2 = new Player(playerId, playerName);
            return game;
        }

        public GameEngine GetGameById(string gameId)
        {
            return Games.FirstOrDefault(value => value.State.Id == gameId);
        }

        public GameEngine GetGameForPlayer(string playerId)
        {
            return Games.FirstOrDefault(value => value.State.Player1.Id == playerId || value.State.Player2.Id == playerId);
        }
    }
}