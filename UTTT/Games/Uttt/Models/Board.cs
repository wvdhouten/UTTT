using System.Collections.Generic;

namespace UTTT.Games.Uttt.Models
{
    public class Board : Dictionary<int, Area>
    {
        public Board()
        {
            for (var i = 0; i < 9; i++) Add(i, new Area());
        }
    }
}