using System;
using System.Collections.Generic;
using UTTT.Abstractions;
using UTTT.Utils;

namespace UTTT.Services
{
    public class PlayerManager : IPlayerManager
    {
        private IDictionary<string, string> Players { get; } = new Dictionary<string, string>();

        public string Register(string name)
        {
            if (string.IsNullOrEmpty(name)) throw new ArgumentException("Name cannot be empty.", nameof(name));

            var id = StringUtil.RandomString(8);
            Players.Add(id, name);
            return id;
        }

        public void Rename(string id, string name)
        {
            if (string.IsNullOrEmpty(name)) throw new ArgumentException("Name cannot be empty.", nameof(name));

            if (!Players.ContainsKey(id)) throw new ArgumentException("Player id unknown.", nameof(id));
        }
    }
}