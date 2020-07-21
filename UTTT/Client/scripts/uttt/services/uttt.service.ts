import * as signalR from "@microsoft/signalr";
import { LobbyInfo } from "../interfaces/uttt.interfaces";

export class UtttService {
  static readonly instance: UtttService = new UtttService();

  private _connection = new signalR.HubConnectionBuilder().withUrl('/utttHub').build();

  constructor() {
    this._registerHandlers();
  }

  private _registerHandlers() {
    this._connection.on('connected', connectionId => console.log('connected', connectionId));
  }

  async start(): Promise<void> {
    return await this._connection.start().then(_ => console.log('Connection started.'));
  }

  async getLobbyInfo(): Promise<LobbyInfo> {
    return await this._connection.invoke('getLobbyInfo');
  }
}