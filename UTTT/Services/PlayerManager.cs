using System;
using System.Collections.Generic;
using UTTT.Abstractions;
using UTTT.Utils;

namespace UTTT.Services
{
    public class PlayerManager : IPlayerManager
    {
        private IDictionary<string, string> Players { get; } = new Dictionary<string, string>();

        public string GetPlayerName(string id)
        {
            if (!Players.ContainsKey(id))
                throw new Exception("Player does not exist.");

            return Players[id];
        }

        public string RegisterOrRename(string id, string name)
        {
            if (string.IsNullOrEmpty(name))
                throw new Exception("Name cannot be empty.");

            if (Players.ContainsKey(id))
            {
                Players[id] = name;
                return id;
            }

            StringUtil.RandomString(8);
            Players.Add(id, name);
            return id;
        }
    }
}