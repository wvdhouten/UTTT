using System;
using UTTT.Games.Uttt.Models;

namespace UTTT.Games.Uttt
{
    public class GameEngine
    {
        public GameState State { get; } = new GameState();

        public void ClaimField(string playerId, int area, int field)
        {
            if (State.Player1 == null || State.Player2 == null)
                throw new Exception("Game has not started.");

            if (State.Winner != GameState.Owner.None)
                throw new Exception("Game has ended.");

            if (State.ActivePlayer != playerId)
                throw new Exception("It's not your turn.");

            if (State.ActiveArea > -1 && State.ActiveArea != area)
                throw new Exception("Field is not in the active area.");

            var selectedArea = State.Areas[area];
            if (selectedArea.Owner != GameState.Owner.None)
                throw new Exception("Area is already won.");

            var selectedField = selectedArea.Fields[field];
            if (selectedField.Owner != GameState.Owner.None)
                throw new Exception("Field has already been claimed.");

            selectedField.Owner = ResolveOwner(playerId);

            CalculateGameState(selectedArea);

            var nextArea = State.Areas[field];
            State.ActiveArea = nextArea.Owner == GameState.Owner.None ? field : -1;

            SetNextPlayer(playerId);
        }

        private void CalculateGameState(Area selectedArea)
        {
            if (selectedArea.Owner == GameState.Owner.None)
                CheckAreaOwner(selectedArea);

            CheckGameWinner();
        }

        private static void CheckAreaOwner(Area selectedArea)
        {
            GameState.Owner owner;

            if ((owner = CheckColumns(selectedArea)) != GameState.Owner.None)
                selectedArea.Owner = owner;
            else if ((owner = CheckRows(selectedArea)) != GameState.Owner.None)
                selectedArea.Owner = owner;
            else if ((owner = CheckDiagonals(selectedArea)) != GameState.Owner.None)
                selectedArea.Owner = owner;
        }

        private static GameState.Owner CheckColumns(Area selectedArea)
        {
            for (var i = 0; i < 3; i++)
            {
                if (selectedArea.Fields[i].Owner != selectedArea.Fields[i + 3].Owner ||
                    selectedArea.Fields[i].Owner != selectedArea.Fields[i + 6].Owner) continue;

                var owner = selectedArea.Fields[i].Owner;
                if (owner != GameState.Owner.None)
                    return owner;
            }

            return GameState.Owner.None;
        }

        private static GameState.Owner CheckRows(Area selectedArea)
        {
            for (var i = 0; i < 9; i += 3)
            {
                if (selectedArea.Fields[i].Owner != selectedArea.Fields[i + 1].Owner ||
                    selectedArea.Fields[i].Owner != selectedArea.Fields[i + 2].Owner) continue;

                var owner = selectedArea.Fields[i].Owner;
                if (owner != GameState.Owner.None)
                    return owner;
            }

            return GameState.Owner.None;
        }

        private static GameState.Owner CheckDiagonals(Area selectedArea)
        {
            if (selectedArea.Fields[0].Owner == selectedArea.Fields[4].Owner &&
                selectedArea.Fields[0].Owner == selectedArea.Fields[8].Owner)
            {
                var owner = selectedArea.Fields[0].Owner;
                if (owner != GameState.Owner.None)
                    return owner;
            }

            if (selectedArea.Fields[2].Owner == selectedArea.Fields[4].Owner &&
                selectedArea.Fields[2].Owner == selectedArea.Fields[6].Owner)
            {
                var owner = selectedArea.Fields[2].Owner;
                if (owner != GameState.Owner.None)
                    return owner;
            }

            return GameState.Owner.None;
        }

        private void CheckGameWinner()
        {
            GameState.Owner owner;

            if ((owner = CheckGameColumns()) != GameState.Owner.None)
                State.Winner = owner;
            else if ((owner = CheckGameRows()) != GameState.Owner.None)
                State.Winner = owner;
            else if ((owner = CheckGameDiagonals()) != GameState.Owner.None)
                State.Winner = owner;
        }

        private GameState.Owner CheckGameColumns()
        {
            for (var i = 0; i < 3; i++)
            {
                if (State.Areas[i].Owner != State.Areas[i + 3].Owner ||
                    State.Areas[i].Owner != State.Areas[i + 6].Owner) continue;

                var owner = State.Areas[i].Owner;
                if (owner != GameState.Owner.None)
                    return owner;
            }

            return GameState.Owner.None;
        }

        private GameState.Owner CheckGameRows()
        {
            for (var i = 0; i < 9; i += 3)
            {
                if (State.Areas[i].Owner != State.Areas[i + 1].Owner ||
                    State.Areas[i].Owner != State.Areas[i + 2].Owner) continue;

                return State.Areas[i].Owner;
            }

            return GameState.Owner.None;
        }

        private GameState.Owner CheckGameDiagonals()
        {
            if (State.Areas[0].Owner == State.Areas[4].Owner &&
                State.Areas[0].Owner == State.Areas[8].Owner)
            {
                var owner = State.Areas[0].Owner;
                if (owner != GameState.Owner.None)
                    return owner;
            }

            if (State.Areas[2].Owner == State.Areas[4].Owner &&
                State.Areas[2].Owner == State.Areas[6].Owner)
            {
                var owner = State.Areas[2].Owner;
                if (owner != GameState.Owner.None)
                    return owner;
            }

            return GameState.Owner.None;
        }

        private GameState.Owner ResolveOwner(string playerId)
        {
            if (State.Player1.Id == playerId) return GameState.Owner.One;

            if (State.Player2.Id == playerId) return GameState.Owner.Two;

            throw new Exception("Cannot resolve player.");
        }

        private void SetNextPlayer(string playerId)
        {
            State.ActivePlayer = playerId == State.Player1.Id ? State.Player2.Id : State.Player1.Id;
        }
    }
}