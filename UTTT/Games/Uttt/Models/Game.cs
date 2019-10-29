namespace UTTT.Games.Uttt.Models
{
    public class Game
    {
        public enum Owner
        {
            None = 0,
            One = 1,
            Two = 2
        }

        public string Id { get; set; }

        public Board Board { get; set; } = new Board();

        public Player Player1 { get; set; }

        public Player Player2 { get; set; }

        public Owner Winner { get; set; }

        public string ActivePlayer { get; set; }

        public int ActiveArea { get; set; } = -1;
    }
}