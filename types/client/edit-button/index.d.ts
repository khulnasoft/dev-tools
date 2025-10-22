export declare class KhulnaSoftDevToolsEditButton extends HTMLElement {
    openInKhulnasoft: HTMLAnchorElement | null;
    block: HTMLElement | null;
    constructor();
    connectedCallback(): void;
    show(contentElm: HTMLElement, blockElm: HTMLElement): string | null;
    hide(): void;
}
