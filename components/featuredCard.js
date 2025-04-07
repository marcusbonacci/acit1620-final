class FeaturedCard extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        const data = this.data
        const shadow = this.attachShadow({mode: "open"});

        const div = document.createElement("div");
        const image = document.createElement("img");
        const info = document.createElement("div");
        const display = document.createElement("div");
        const title = document.createElement("p");
        const genres = document.createElement("ul");
        const price = document.createElement("p");

        div.className = "card";
        title.className = "title";
        display.className = "display";
        info.className = "info";
        genres.className = "genres";
        price.className = "price";

        image.src = `./assets/games/${data.titleImage}`;
        title.textContent = data.title;
        price.textContent = `$${data.price}`;

        data.genres.forEach(genreTag => {
            const genre = document.createElement("li");

            genre.className = "subtitle"

            genre.textContent = genreTag;
            genres.appendChild(genre);
        })

        const compStyle = document.createElement("link");
        compStyle.setAttribute("rel", "stylesheet");
        compStyle.setAttribute("href", "./styles/featuredCard.css")

        shadow.appendChild(compStyle);
        shadow.appendChild(div);
        div.appendChild(image);

        div.appendChild(info);
        display.appendChild(title);
        display.appendChild(genres);
        info.appendChild(display);
        info.appendChild(price);
    }
}
customElements.define("featured-card", FeaturedCard)