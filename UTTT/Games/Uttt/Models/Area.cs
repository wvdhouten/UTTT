using System.Collections.Generic;

namespace UTTT.Games.Uttt.Models
{
    public class Area : Field
    {
        public Area()
        {
            for (var i = 0; i < 9; i++) Fields.Add(i, new Field());
        }

        public IDictionary<int, Field> Fields { get; } = new Dictionary<int, Field>();
    }
}