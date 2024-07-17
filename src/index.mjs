import { LinkComponent } from './components/link/link.mjs';
import { routes } from './apps/home/routes.mjs';

import './index.css';

export class AppComponent extends HTMLDivElement {
    #contentDiv;

    constructor() { 
        super();

        window.addEventListener('popstate', console.log);
    }

    connectedCallback() {
        this.innerHTML = `
            <section class="page">
                <nav>
                    <${LinkComponent.tagName} href="/home">Home</${LinkComponent.tagName}>
                    <${LinkComponent.tagName} href="/home/page1">Page 1</${LinkComponent.tagName}>
                    <${LinkComponent.tagName} href="/home/page2">Page 2</${LinkComponent.tagName}>
                </nav>
                <div class="content"></div>
            </section>
        `;

        this.#contentDiv = this.querySelector('div.content');
        this.addEventListener('click', this.#handleClick.bind(this));
    }

    disconnectedCallback() {
        this.removeEventListener('click', this.#handleClick.bind(this));
    }

    #handleClick(event) {
        const { target } = event;

        switch(target.tagName.toLowerCase()) {
            case LinkComponent.tagName.toLowerCase():
                this.#handleLinkClick(event);
                break;
        }
    }

    #handleLinkClick(event) {
        const { target } = event;
        const path = target.getAttribute('href');
        const content = document.createElement(routes[path].tagName);

        window.history.pushState({}, '', path);

        this.#contentDiv.innerHTML = '';
        this.#contentDiv.append(content);
    }
}

customElements.define('portfolio-app', AppComponent, { extends: 'div' });