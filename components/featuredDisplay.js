class FeaturedDisplay extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.style = `
            display: flex;
            flex-wrap: nowrap;
            overflow-x: auto;
            height: 350px;
            gap: 1rem;
            padding-left: 20px;
        `
    };
}
customElements.define("featured-display", FeaturedDisplay);