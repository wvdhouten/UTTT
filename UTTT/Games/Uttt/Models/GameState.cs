using System.Collections.Generic;

namespace UTTT.Games.Uttt.Models
{
    public class GameState
    {
        public enum Owner
        {
            None = 0,
            One = 1,
            Two = 2
        }

        public GameState()
        {
            for (var i = 0; i < 9; i++) Areas.Add(i, new Area());
        }

        public string Id { get; set; }

        public IDictionary<int, Area> Areas { get; } = new Dictionary<int, Area>();

        public Player Player1 { get; set; }

        public Player Player2 { get; set; }

        public Owner Winner { get; set; }

        public string ActivePlayer { get; set; }

        public int ActiveArea { get; set; } = -1;
    }
}