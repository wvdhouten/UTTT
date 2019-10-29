using System;
using UTTT.Games.Uttt.Models;

namespace UTTT.Games.Uttt
{
    public class GameEngine
    {
        public Game State { get; } = new Game();

        public void ClaimField(string playerId, int area, int field)
        {
            if (State.Player1 == null || State.Player2 == null)
                throw new Exception("Game has not started.");

            if (State.Winner != Game.Owner.None)
                throw new Exception("Game has ended.");

            if (State.ActivePlayer != playerId)
                throw new Exception("It's not your turn.");

            if (State.ActiveArea > -1 && State.ActiveArea != area)
                throw new Exception("Field is not in the active area.");

            var selectedArea = State.Board[area];
            if (selectedArea.Owner != Game.Owner.None)
                throw new Exception("Area is already won.");

            var selectedField = selectedArea.Fields[field];
            if (selectedField.Owner != Game.Owner.None)
                throw new Exception("Field has already been claimed.");

            selectedField.Owner = ResolveOwner(playerId);

            CalculateGameState(selectedArea);

            var nextArea = State.Board[field];
            State.ActiveArea = nextArea.Owner == Game.Owner.None ? field : -1;

            SetNextPlayer(playerId);
        }

        private void CalculateGameState(Area selectedArea)
        {
            if (selectedArea.Owner == Game.Owner.None)
                CheckAreaOwner(selectedArea);

            CheckGameWinner();
        }

        private static void CheckAreaOwner(Area selectedArea)
        {
            Game.Owner owner;

            if ((owner = CheckColumns(selectedArea)) != Game.Owner.None)
                selectedArea.Owner = owner;
            else if ((owner = CheckRows(selectedArea)) != Game.Owner.None)
                selectedArea.Owner = owner;
            else if ((owner = CheckDiagonals(selectedArea)) != Game.Owner.None)
                selectedArea.Owner = owner;
        }

        private static Game.Owner CheckColumns(Area selectedArea)
        {
            for (var i = 0; i < 3; i++)
            {
                if (selectedArea.Fields[i].Owner != selectedArea.Fields[i + 3].Owner ||
                    selectedArea.Fields[i].Owner != selectedArea.Fields[i + 6].Owner) continue;

                var owner = selectedArea.Fields[i].Owner;
                if (owner != Game.Owner.None)
                    return owner;
            }

            return Game.Owner.None;
        }

        private static Game.Owner CheckRows(Area selectedArea)
        {
            for (var i = 0; i < 9; i += 3)
            {
                if (selectedArea.Fields[i].Owner != selectedArea.Fields[i + 1].Owner ||
                    selectedArea.Fields[i].Owner != selectedArea.Fields[i + 2].Owner) continue;

                var owner = selectedArea.Fields[i].Owner;
                if (owner != Game.Owner.None)
                    return owner;
            }

            return Game.Owner.None;
        }

        private static Game.Owner CheckDiagonals(Area selectedArea)
        {
            if (selectedArea.Fields[0].Owner == selectedArea.Fields[4].Owner &&
                selectedArea.Fields[0].Owner == selectedArea.Fields[8].Owner)
            {
                var owner = selectedArea.Fields[0].Owner;
                if (owner != Game.Owner.None)
                    return owner;
            }

            if (selectedArea.Fields[2].Owner == selectedArea.Fields[4].Owner &&
                selectedArea.Fields[2].Owner == selectedArea.Fields[6].Owner)
            {
                var owner = selectedArea.Fields[2].Owner;
                if (owner != Game.Owner.None)
                    return owner;
            }

            return Game.Owner.None;
        }

        private void CheckGameWinner()
        {
            Game.Owner owner;

            if ((owner = CheckGameColumns()) != Game.Owner.None)
                State.Winner = owner;
            else if ((owner = CheckGameRows()) != Game.Owner.None)
                State.Winner = owner;
            else if ((owner = CheckGameDiagonals()) != Game.Owner.None)
                State.Winner = owner;
        }

        private Game.Owner CheckGameColumns()
        {
            for (var i = 0; i < 3; i++)
            {
                if (State.Board[i].Owner != State.Board[i + 3].Owner ||
                    State.Board[i].Owner != State.Board[i + 6].Owner) continue;

                var owner = State.Board[i].Owner;
                if (owner != Game.Owner.None)
                    return owner;
            }

            return Game.Owner.None;
        }

        private Game.Owner CheckGameRows()
        {
            for (var i = 0; i < 9; i += 3)
            {
                if (State.Board[i].Owner != State.Board[i + 1].Owner ||
                    State.Board[i].Owner != State.Board[i + 2].Owner) continue;

                return State.Board[i].Owner;
            }

            return Game.Owner.None;
        }

        private Game.Owner CheckGameDiagonals()
        {
            if (State.Board[0].Owner == State.Board[4].Owner &&
                State.Board[0].Owner == State.Board[8].Owner)
            {
                var owner = State.Board[0].Owner;
                if (owner != Game.Owner.None)
                    return owner;
            }

            if (State.Board[2].Owner == State.Board[4].Owner &&
                State.Board[2].Owner == State.Board[6].Owner)
            {
                var owner = State.Board[2].Owner;
                if (owner != Game.Owner.None)
                    return owner;
            }

            return Game.Owner.None;
        }

        private Game.Owner ResolveOwner(string playerId)
        {
            if (State.Player1.Id == playerId) return Game.Owner.One;

            if (State.Player2.Id == playerId) return Game.Owner.Two;

            throw new Exception("Cannot resolve player.");
        }

        private void SetNextPlayer(string playerId)
        {
            State.ActivePlayer = playerId == State.Player1.Id ? State.Player2.Id : State.Player1.Id;
        }
    }
}