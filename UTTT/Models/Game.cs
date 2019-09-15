using System;

namespace UTTT.Models
{
    public class Game
    {
        public string Player1 { get; set; }

        public string Player2 { get; set; }

        public GameState State { get; } = new GameState();

        public bool Join(string playerId)
        {
            if (string.IsNullOrEmpty(Player1))
            {
                Player1 = playerId;
                State.ActivePlayer = playerId;
                return true;
            }

            if (Player1 != playerId && string.IsNullOrEmpty(Player2))
            {
                Player2 = playerId;
                State.Status = GameState.GameStatus.Playing;
                return true;
            }

            return false;
        }

        public bool ClaimField(string playerId, int area, int field)
        {
            if (State.Status != GameState.GameStatus.Playing) return false;

            if (State.ActivePlayer != playerId) return false;

            if (State.ActiveArea > -1 && State.ActiveArea != area) return false;

            var selectedArea = State.Areas[area];
            var selectedField = selectedArea.Fields[field];

            if (selectedField.Owner != GameState.Player.None) return false;

            var activePlayer = GetActivePlayer(playerId);
            selectedField.Owner = activePlayer;

            State.ActiveArea = field;
            SetNextPlayer(playerId);

            CalculateGameState(selectedArea);

            return true;
        }

        private void SetNextPlayer(string playerId)
        {
            State.ActivePlayer = playerId == Player1 ? Player2 : Player1;
        }

        private void CalculateGameState(Area selectedArea)
        {
            if (selectedArea.Owner == GameState.Player.None) CheckAreaOwner(selectedArea);

            CheckGameOwner();
        }

        private void CheckGameOwner()
        {
            GameState.Player owner;

            if ((owner = CheckGameColumns()) != GameState.Player.None)
                State.Status = owner == GameState.Player.One
                    ? GameState.GameStatus.WonByOne
                    : GameState.GameStatus.WonByTwo;
            else if ((owner = CheckGameRows()) != GameState.Player.None)
                State.Status = owner == GameState.Player.One
                    ? GameState.GameStatus.WonByOne
                    : GameState.GameStatus.WonByTwo;
            else if ((owner = CheckGameDiagonals()) != GameState.Player.None)
                State.Status = owner == GameState.Player.One
                    ? GameState.GameStatus.WonByOne
                    : GameState.GameStatus.WonByTwo;
        }

        private GameState.Player CheckGameColumns()
        {
            for (var i = 0; i < 3; i++)
            {
                if (State.Areas[i].Owner != State.Areas[i + 3].Owner ||
                    State.Areas[i].Owner != State.Areas[i + 6].Owner) continue;

                var owner = State.Areas[i].Owner;
                if (owner != GameState.Player.None)
                    return owner;
            }

            return GameState.Player.None;
        }

        private GameState.Player CheckGameRows()
        {
            for (var i = 0; i < 9; i += 3)
            {
                if (State.Areas[i].Owner != State.Areas[i + 1].Owner ||
                    State.Areas[i].Owner != State.Areas[i + 2].Owner) continue;

                return State.Areas[i].Owner;
            }

            return GameState.Player.None;
        }

        private GameState.Player CheckGameDiagonals()
        {
            if (State.Areas[0].Owner == State.Areas[4].Owner &&
                State.Areas[0].Owner == State.Areas[8].Owner)
            {
                var owner = State.Areas[0].Owner;
                if (owner != GameState.Player.None)
                    return owner;
            }

            if (State.Areas[2].Owner == State.Areas[4].Owner &&
                State.Areas[2].Owner == State.Areas[6].Owner)
            {
                var owner = State.Areas[2].Owner;
                if (owner != GameState.Player.None)
                    return owner;
            }

            return GameState.Player.None;
        }

        private static void CheckAreaOwner(Area selectedArea)
        {
            GameState.Player owner;

            if ((owner = CheckColumns(selectedArea)) != GameState.Player.None)
                selectedArea.Owner = owner;
            else if ((owner = CheckRows(selectedArea)) != GameState.Player.None)
                selectedArea.Owner = owner;
            else if ((owner = CheckDiagonals(selectedArea)) != GameState.Player.None) selectedArea.Owner = owner;
        }

        private static GameState.Player CheckColumns(Area selectedArea)
        {
            for (var i = 0; i < 3; i++)
            {
                if (selectedArea.Fields[i].Owner != selectedArea.Fields[i + 3].Owner ||
                    selectedArea.Fields[i].Owner != selectedArea.Fields[i + 6].Owner) continue;

                var owner = selectedArea.Fields[i].Owner;
                if (owner != GameState.Player.None)
                    return owner;
            }

            return GameState.Player.None;
        }

        private static GameState.Player CheckRows(Area selectedArea)
        {
            for (var i = 0; i < 9; i += 3)
            {
                if (selectedArea.Fields[i].Owner != selectedArea.Fields[i + 1].Owner ||
                    selectedArea.Fields[i].Owner != selectedArea.Fields[i + 2].Owner) continue;

                var owner = selectedArea.Fields[i].Owner;
                if (owner != GameState.Player.None)
                    return owner;
            }

            return GameState.Player.None;
        }

        private static GameState.Player CheckDiagonals(Area selectedArea)
        {
            if (selectedArea.Fields[0].Owner == selectedArea.Fields[4].Owner &&
                selectedArea.Fields[0].Owner == selectedArea.Fields[8].Owner)
            {
                var owner = selectedArea.Fields[0].Owner;
                if (owner != GameState.Player.None)
                    return owner;
            }

            if (selectedArea.Fields[2].Owner == selectedArea.Fields[4].Owner &&
                selectedArea.Fields[2].Owner == selectedArea.Fields[6].Owner)
            {
                var owner = selectedArea.Fields[2].Owner;
                if (owner != GameState.Player.None)
                    return owner;
            }

            return GameState.Player.None;
        }

        private GameState.Player GetActivePlayer(string playerId)
        {
            if (Player1 == playerId) return GameState.Player.One;

            if (Player2 == playerId) return GameState.Player.Two;

            throw new Exception("Invalid player.");
        }
    }
}