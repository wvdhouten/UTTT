import { LitElement, html, css, property, customElement } from 'lit-element';
import { UtttService } from '../../services/uttt.service';

@customElement('uttt-lobby')
export class UtttLobby extends LitElement {
  private readonly utttService: UtttService = UtttService.instance;

  @property({ type: Array })
  games: Array<string> = [];

  @property({ type: Array })
  players: Array<string> = [];

  static get styles() {
    return css`:host { display: flex; }
#games { flex: 1; }
#players { width: 300px; }`;
  }

  constructor() {
    super();

    this.utttService.start().then(_ => this._getLobbyInfo());
  }

  private _getLobbyInfo() {
    this.utttService.getLobbyInfo().then(lobbyInfo => {
      this.games = lobbyInfo.games;
      this.players = lobbyInfo.players;
    });
  }

  render() {
    return [this._renderGames(), this._renderPlayers()];
  }

  private _renderGames() {
    return html`<div id="games">${this.games.map(g => html`${g}`)}</div>`;
  }

  private _renderPlayers() {
    return html`<div id="players">${this.players.map(g => html`<button @click="${_ => this._challenge(g)}" ?disabled=${g === this.utttService.self}>${g}</button>`)}</div>`;
  }

  _challenge(player: string) {
    this.utttService.challenge(player);
  }
}
