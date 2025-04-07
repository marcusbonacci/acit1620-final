const stats = document.querySelectorAll("#stats .container");

function increment(element) {
    setInterval(() => {
        let num = element.children[0].children[1];
        num.textContent = Number(num.textContent) + Math.floor(Math.random() * num.getAttribute("growth-rate"));
    }, 50);
}

stats.forEach(element => {
    increment(element);
})