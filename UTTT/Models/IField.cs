namespace UTTT.Models
{
    public interface IField
    {
        GameState.Player Owner { get; set; }
    }
}