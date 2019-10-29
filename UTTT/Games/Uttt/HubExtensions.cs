using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace UTTT.Games.Uttt
{
    public static class HubExtensions
    {
        public static string GetPlayerId(this HubCallerContext context)
        {
            return (string) context.Items["PlayerId"];
        }
    }
}
