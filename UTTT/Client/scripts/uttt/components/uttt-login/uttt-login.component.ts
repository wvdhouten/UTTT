import { LitElement, html, css, property, customElement } from 'lit-element';

@customElement('uttt-login')
export class UtttLogin extends LitElement {

  constructor() {
    super();
  }

  static get styles() {
    return css`:host { display: flex; flex-wrap: wrap; width: 180px; }`;
  }

  render() {
    return html`<uttt-board></uttt-board>`
  }
}
