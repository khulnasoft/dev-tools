export declare class KhulnasoftDevToolsEditButton extends HTMLElement {
  openInKhulnasoft: HTMLAnchorElement | null;
  block: HTMLElement | null;
  constructor();
  connectedCallback(): void;
  show(contentElm: HTMLElement, blockElm: HTMLElement): string | null;
  hide(): void;
}
