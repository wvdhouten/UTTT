import * as signalR from "@microsoft/signalr";

export class SignalRService {
  private static connection = new signalR.HubConnectionBuilder().withUrl('/utttHub').build();

  public start() {
    SignalRService.connection.start().then(_ => SignalRService.connection.invoke('Identify', 'Walter', 'aaa'));
  }
}