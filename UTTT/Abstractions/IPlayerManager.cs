using UTTT.Games.Uttt.Models;

namespace UTTT.Abstractions
{
    public interface IPlayerManager
    {
        string Register(string name);

        void Rename(string id, string name);

        Player GetById(string id);
    }
}