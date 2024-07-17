export class Router {
    #routes;

    constructor() {
        this.#routes = routes;
        window.addEventListener('popstate', this.#handleHistoryChange.bind(this));
    }

    #handleHistoryChange() {

    }
}