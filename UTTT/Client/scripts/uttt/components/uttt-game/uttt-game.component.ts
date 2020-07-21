import { LitElement, html, css, property, customElement } from 'lit-element';

@customElement('uttt-game')
export class UtttGame extends LitElement {

  static get styles() {
    return css`:host { display: block; text-align: center; }`;
  }

  render() {
    return html`<header><h1>Ultimate Tic Tac Toe</h1></header>
<uttt-lobby></uttt-lobby>`;
  }
}
