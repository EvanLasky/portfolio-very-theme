import { LitElement, html, css } from "lit";

export class ScreenTemplate extends LitElement {
  static get tag() {
    return "screen-template";
  }

  static get properties() {
    return {
      title: { type: String },
      color: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        padding: 0;
        margin: 0;
        height: 100vh;
        background-color: var(--screen-template-color, #f9f9f9);
        box-sizing: border-box;
        margin-top: 50px; /* Add top margin to account for the nav bar height */
      }
      h2 {
        font-family: var(--ddd-font-navigation);
        color: var(--ddd-theme-primary);
      }
      img {
        max-width: 100%;
        height: auto;
        display: block;
        margin-bottom: 1rem;
      }
    `;
  }

  render() {
    return html`
      <section
        id="${this.id}"
        style="--screen-template-color: var(${this.color}); height: 100vh;"
      >
        <h2>${this.title}</h2>
        <slot name="image"></slot>
        <slot></slot>
      </section>
    `;
  }
}

customElements.define(ScreenTemplate.tag, ScreenTemplate);
