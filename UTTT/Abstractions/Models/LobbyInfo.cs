using System.Collections;
using System.Collections.Generic;

namespace UTTT.Abstractions.Models
{
    public class LobbyInfo
    {
        public IList<string> Games { get; set; } = new List<string>();

        public IList<string> Players { get; set; } = new List<string>();
    }
}
