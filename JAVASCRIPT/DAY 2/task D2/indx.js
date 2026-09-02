let btn = document.createElement("button");
btn.innerText = "GET DATA";
document.body.appendChild(btn);

let container = document.createElement("div");
container.className = "products-container";
document.body.appendChild(container);

btn.onclick = function () {

    fetch("https://dummyjson.com/products", { method: "GET" })

        .then((res) => {
            return res.json();
        })

        .then((data) => {

            container.innerHTML = "";

            data.products.forEach((product) => {

                let card = document.createElement("div");
                card.className = "card";

                let img = document.createElement("img");
                img.src = product.thumbnail;

                let title = document.createElement("h3");
                title.innerText = product.title;

                let price = document.createElement("p");
                price.innerText = `Price: $${product.price}`;

                card.appendChild(img);
                card.appendChild(title);
                card.appendChild(price);

                container.appendChild(card);
            });
        })

        .catch((err) => {
            console.log(err);
        });
};