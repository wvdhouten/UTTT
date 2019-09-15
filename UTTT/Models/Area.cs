using System.Collections.Generic;

namespace UTTT.Models
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