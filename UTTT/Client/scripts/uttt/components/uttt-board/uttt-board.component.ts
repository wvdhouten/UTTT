import { LitElement, html, css, property, customElement } from 'lit-element';

@customElement('uttt-board')
export class UtttBoard extends LitElement {

  constructor() {
    super();
  }

  static get styles() {
    return css`:host { display: flex; flex-wrap: wrap; width: 180px; }`;
  }

  render() {
    return Array.from({ length: 9 }, (_, i) => html`<uttt-area .area="${i+1}"></uttt-area>`)
  }
}
