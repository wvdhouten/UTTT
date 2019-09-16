using System.Collections.Generic;
using UTTT.Business;
using UTTT.Models;

namespace UTTT.Abstractions
{
    public interface IGameManager
    {
        IDictionary<string, Game> Games { get; }

        IDictionary<string, string> Players { get; }

        Game CreateGame(string gameId);
    }
}