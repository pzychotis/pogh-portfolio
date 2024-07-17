export class HomeApplicationIndexPage extends HTMLElement {
    static tagName = 'portfolio-home';
    constructor() { super(); }
    connectedCallback() {
        const h1 = document.createElement('h1');
        h1.innerHTML = 'Test Home Page';
        this.append(h1);
    }
}

customElements.define(HomeApplicationIndexPage.tagName, HomeApplicationIndexPage);