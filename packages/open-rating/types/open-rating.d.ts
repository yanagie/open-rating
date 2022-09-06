import { LitElement } from "lit";
/**
 * open rating element.
 *
 */
export declare class OpenRatingElement extends LitElement {
    color: string;
    private __rating;
    private _input;
    render(): import("lit").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "open-rating": OpenRatingElement;
    }
}
//# sourceMappingURL=open-rating.d.ts.map