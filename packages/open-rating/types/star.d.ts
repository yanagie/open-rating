import { LitElement } from "lit";
/**
 * open rating star element.
 *
 */
export declare class ORStar extends LitElement {
    active_color: string;
    inactive_color: string;
    num: number;
    render(): import("lit").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "or-star": ORStar;
    }
}
//# sourceMappingURL=star.d.ts.map