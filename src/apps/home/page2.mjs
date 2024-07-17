export class HomeApplicationSecondPage extends HTMLElement {
    static tagName = 'portfolio-page-2';
    constructor() { super(); }
    connectedCallback() {
        const h1 = document.createElement('h1');
        h1.innerHTML = 'Test Page 2';
        this.append(h1);
    }
}

customElements.define(HomeApplicationSecondPage.tagName, HomeApplicationSecondPage);