import { LitElement, html, css, property, customElement } from 'lit-element';
import { UtttService } from '../../services/uttt.service';
import { LobbyInfo } from '../../interfaces/uttt.interfaces';

@customElement('uttt-lobby')
export class UtttLobby extends LitElement {
  private readonly utttService: UtttService = UtttService.instance;

  @property({ type: Object })
  lobbyInfo: LobbyInfo = undefined;

  static get styles() {
    return css`:host { display: block; text-align: center; }`;
  }

  constructor() {
    super();

    this.utttService.start().then(_ => this._getLobbyInfo());
  }

  render() {
    if (this.lobbyInfo) {
      return this.lobbyInfo.games.map(g => html`${g}`);
    }
  }

  private _getLobbyInfo() {
    this.utttService.getLobbyInfo().then(lobbyInfo => this.lobbyInfo = lobbyInfo);
  }
}
