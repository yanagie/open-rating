import { LitElement, css, html, unsafeCSS } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import StarIcon from "./assets/star.svg";
import HeartIcon from "./assets/heart.svg";

/**
 * open rating element.
 *
 */
@customElement("open-rating")
export class OpenRatingElement extends LitElement {
  @property()
  color = "gold";

  @state()
  private __rating = 1;

  @query("input", true) private _input!: HTMLInputElement;

  render() {
    return html` <style>
        .rating {
          --value: ${this.__rating};
          --fill: ${unsafeCSS(this.color)};
        }
      </style>
      <label class="rating-label">
        <input
          class="rating"
          max="5"
          step="1"
          type="range"
          @change=${() => {
            this.__rating = Number(this._input.value);
          }}
        />
      </label>`;
  }

  static styles = css`
    :host {
      display: inline-block;
      text-align: center;
    }
    .rating {
      --dir: right;
      --fillbg: rgba(100, 100, 100, 0.15);
      --heart: url(${unsafeCSS(HeartIcon)});
      --star: url(${unsafeCSS(StarIcon)});
      --stars: 5;
      --starsize: 3rem;
      --symbol: var(--star);
      --w: calc(var(--stars) * var(--starsize));
      --x: calc(100% * (var(--value) / var(--stars)));
      block-size: var(--starsize);
      inline-size: var(--w);
      position: relative;
      touch-action: manipulation;
      -webkit-appearance: none;
    }
    [dir="rtl"] .rating {
      --dir: left;
    }
    .rating::-moz-range-track {
      background: linear-gradient(
        to var(--dir),
        var(--fill) 0 var(--x),
        var(--fillbg) 0 var(--x)
      );
      block-size: 100%;
      mask: repeat left center/var(--starsize) var(--symbol);
    }
    .rating::-webkit-slider-runnable-track {
      background: linear-gradient(
        to var(--dir),
        var(--fill) 0 var(--x),
        var(--fillbg) 0 var(--x)
      );
      block-size: 100%;
      mask: repeat left center/var(--starsize) var(--symbol);
      -webkit-mask: repeat left center/var(--starsize) var(--symbol);
    }
    .rating::-webkit-slider-runnable-track:hover {
      accent-color: red;
    }
    .rating::-moz-range-thumb {
      height: var(--starsize);
      opacity: 0;
      width: var(--starsize);
    }
    .rating::-webkit-slider-thumb {
      height: var(--starsize);
      opacity: 0;
      width: var(--starsize);
      -webkit-appearance: none;
    }

    /* NO JS */
    .rating--nojs::-moz-range-track {
      background: var(--fillbg);
    }
    .rating--nojs::-moz-range-progress {
      background: var(--fill);
      block-size: 100%;
      mask: repeat left center/var(--starsize) var(--star);
    }
    .rating--nojs::-webkit-slider-runnable-track {
      background: var(--fillbg);
    }
    .rating--nojs::-webkit-slider-thumb {
      background-color: var(--fill);
      box-shadow: calc(0rem - var(--w)) 0 0 var(--w) var(--fill);
      opacity: 1;
    }
    [dir="rtl"] .rating--nojs::-webkit-slider-thumb {
      box-shadow: var(--w) 0 0 var(--w) var(--fill);
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "open-rating": OpenRatingElement;
  }
}
