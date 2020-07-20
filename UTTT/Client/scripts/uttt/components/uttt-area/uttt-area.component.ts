import { LitElement, html, css, property, customElement } from 'lit-element';

@customElement('uttt-area')
export class UtttArea extends LitElement {
  @property({ type: Number })
  area: number = undefined;

  constructor() {
    super();
  }

  static get styles() {
    return css`:host { display: flex; flex-wrap: wrap; width: 60px; }
div { width: 20px; height:20px; background:green; }`;
  }

  render() {
    return Array.from({ length: 9 }, (_, i) => html`<div @click="${_ => this._claimField(i+1)}"></div>`)
  }

  _claimField(field: number) {
    console.log(this.area, field);
  }
}
