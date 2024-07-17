export class HomeApplicationFirstPage extends HTMLElement {
    static tagName = 'portfolio-page-1';
    constructor() { super(); }
    connectedCallback() {
        const h1 = document.createElement('h1');
        h1.innerHTML = 'Test Page 1';
        this.append(h1);
    }
}

customElements.define(HomeApplicationFirstPage.tagName, HomeApplicationFirstPage);