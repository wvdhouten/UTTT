using UTTT.Games.Uttt.Models;

namespace UTTT.Abstractions
{
    public interface IPlayerManager
    {
        string RegisterOrRename(string id, string name);

        string GetPlayerName(string id);
    }
}