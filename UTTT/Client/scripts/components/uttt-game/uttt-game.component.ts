import { LitElement, html, css, property, customElement } from 'lit-element';
import { SignalRService } from '../../services/signalr.service';

@customElement('uttt-game')
export class UtttGame extends LitElement {

  service: SignalRService;

  constructor() {
    super();

    this.service = new SignalRService();
  }

  static get styles() {
    return css``;
  }

  render() {
    return html`<button @click="${this._click}">Hi!</button>`;
  }

  _click() {
    this.service.start();
  }
}
