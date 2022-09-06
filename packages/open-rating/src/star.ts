import { LitElement, css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import { range } from "lit/directives/range.js";
import { when } from "lit/directives/when.js";

import StarIcon from "./assets/star.svg";

/**
 * open rating star element.
 *
 */
@customElement("or-star")
export class ORStar extends LitElement {
  @property()
  active_color = "gold";
  @property()
  inactive_color = "#8a8a8a";
  @property()
  num = 5;

  render() {
    return html`<style>
        input {
          background-color: ${unsafeCSS(this.inactive_color)};
          -webkit-mask-image: url(${unsafeCSS(StarIcon)});
          mask-image: url(${unsafeCSS(StarIcon)});
        }
        input:hover,
        input:checked,
        input:hover ~ input,
        input:checked ~ input {
          background-color: ${unsafeCSS(this.active_color)};
        }
      </style>
      <div class="rating">
        ${map(
          range(this.num),
          (i) =>
            html`${when(
              i === Math.floor(this.num / 2),
              () => html`<input type="radio" name="star" checked />`,
              () => html`<input type="radio" name="star" />`
            )}`
        )}
      </div>`;
  }

  static styles = css`
    :host {
      display: inline-block;
    }
    .rating {
      direction: rtl;
    }
    input {
      width: 40px;
      height: 40px;
      cursor: pointer;
      -webkit-appearance: none;
      appearance: none;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "or-star": ORStar;
  }
}
