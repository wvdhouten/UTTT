using System.Collections.Generic;
using UTTT.Games.Uttt;

namespace UTTT.Abstractions
{
    public interface IGameManager
    {
        IList<GameEngine> Games { get; }

        GameEngine CreateGame(string contextConnectionId, string playerName);

        GameEngine JoinGame(string gameId, string contextConnectionId, string playerName);

        GameEngine GetGameById(string gameId);

        GameEngine GetGameForPlayer(string playerId);
    }
}