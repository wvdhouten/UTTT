﻿namespace UTTT.Games.Uttt.Models
{
    public class Player
    {
        public Player(string id, string name)
        {
            Id = id;
            Name = name;
        }

        public string Id { get; }

        public string Name { get; }
    }
}