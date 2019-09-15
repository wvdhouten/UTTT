using System.Collections.Generic;
using UTTT.Models;

namespace UTTT.Abstractions
{
    public interface IGameManager
    {
        IDictionary<string, Game> Games { get; }

        Game CreateGame(string gameId);
    }
}