import * as signalR from "@microsoft/signalr";
import { LobbyInfo } from "../interfaces/uttt.interfaces";

export class UtttService {
  static readonly instance: UtttService = new UtttService();

  private _connection = new signalR.HubConnectionBuilder().withUrl('/utttHub').build();

  get self(): string {
    return this._connection.connectionId;
  }

  constructor() {
    this._registerHandlers();
  }

  private _registerHandlers() {
    this._connection.on('connected', connectionId => console.log('connected', connectionId));
    this._connection.on('challenged', connectionId => console.log('challenged', connectionId));
    this._connection.on('accepted', connectionId => console.log('accepted', connectionId));
  }

  async start(): Promise<void> {
    // Could this be done in advance?
    return await this._connection.start().then(_ => console.log('Connection started.'));
  }

  async getLobbyInfo(): Promise<LobbyInfo> {
    return await this._connection.invoke('getLobbyInfo');
  }

  async challenge(player: string): Promise<string> {
    return await this._connection.invoke('challenge', player).catch((e: Error) => { console.error(e.message); });
  }
}