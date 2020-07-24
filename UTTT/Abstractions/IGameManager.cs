using System.Collections.Generic;
using UTTT.Games.Uttt;

namespace UTTT.Abstractions
{
    public interface IGameManager
    {
        IList<GameEngine> Games { get; }

        GameEngine CreateGame(string contextConnectionId);

        GameEngine JoinGame(string gameId, string contextConnectionId);

        GameEngine GetGameById(string gameId);

        GameEngine GetGameForPlayer(string playerId);
    }
}