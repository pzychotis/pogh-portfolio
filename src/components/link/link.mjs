export class LinkComponent extends HTMLElement {
    static observedAttributes = ['href'];
    static tagName = 'portfolio-link';

    constructor() { super(); }
}

customElements.define(LinkComponent.tagName, LinkComponent);