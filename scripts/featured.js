async function loadFeatured() {
    const res = await fetch("./data/games.json");
    const json = await res.json();

    const featuredContainers = [...document.getElementsByTagName("featured-display")]

    featuredContainers.forEach(container => {
        shuffle(json);
        data = json.slice(0, 11);
        data.forEach(game => {
            const card = document.createElement("featured-card");
            card.data = game;

            card.addEventListener("click", display)

            container.appendChild(card);
        })
    })
}

function open(element) {
    if (element.style.right === "0px") { return }
    element.animate(
        [
            { right: "-450px" },
            { right: "0px" }
        ],
        {
            duration: 200,
            easing: "ease-in"
        }
    );
    element.style.right = "0px"
}

function close(element) {
    if (element.style.right === "-450px") { return }
    element.animate(
        [
            { right: "0px" },
            { right: "-450px" }
        ],
        {
            duration: 200,
            easing: "ease-in"
        }
    );
    element.style.right = "-450px"
}

function display(element) {
    const card = element.target.closest("featured-card");
    const data = card.data

    const featuredInfo = document.getElementById("productInfo");

    featuredInfo.innerHTML = `
        <img class="thumbnail" src="./assets/games/${data.titleImage}"></img>
        <h2 class="title">${data.title}</h2>
        <p class="genres">${data.genres}</p>
        <p class="price">$${data.price}</p>
        <button class="cart">Add to Cart</button>
        <button class="star">Star</button>
        <h2 class="about">About this product</h3>
        <div class="display">
            <p>"${data.description}"</p>
        </div>
    `

    const closeButton = featuredInfo.getElementsByClassName("cart");
    closeButton[0].addEventListener("click", function () {
        close(featuredInfo);
    })
    open(featuredInfo);
}

function shuffle(arr) {
    let currentIndex = arr.length;

    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [arr[currentIndex], arr[randomIndex]] = [
            arr[randomIndex], arr[currentIndex]
        ];
    }
};

window.onload = function () {
    loadFeatured();
}