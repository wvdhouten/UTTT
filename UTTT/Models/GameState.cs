using System.Collections.Generic;

namespace UTTT.Models
{
    public class GameState
    {
        public enum GameStatus
        {
            Open = 0,
            Playing = 1,
            WonByOne = 2,
            WonByTwo = 3
        }

        public enum Player
        {
            None = 0,
            One = 1,
            Two = 2
        }

        public GameState()
        {
            for (var i = 0; i < 9; i++) Areas.Add(i, new Area());
        }

        public string ActivePlayer { get; set; }

        public int ActiveArea { get; set; } = -1;

        public GameStatus Status { get; set; }

        public IDictionary<int, Area> Areas { get; } = new Dictionary<int, Area>();
    }
}