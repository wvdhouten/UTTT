using Microsoft.AspNetCore.SignalR;

namespace UTTT.Abstractions
{
    public class DetailedHubException : HubException
    {
        public string Something { get; set; }
    }
}