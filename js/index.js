//en este archivo van las funciones y eventos que interactuan con el index html
import { fetchProducts } from './data.js';


const cardsContainer = document.querySelector("#card_container");

async function renderProducts() {
  const products = await fetchProducts();

  cardsContainer.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("card", "m-2");
    card.style.width = "18rem";

    card.innerHTML = `
      <img src="${product.image}" class="card-img-top" alt="${product.title}">
      <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">$${product.price}</p>
        <button class="btn btn-primary btn-view" data-id="${product.id}">Ver más</button>
      </div>
    `;

    cardsContainer.appendChild(card);
  });
}

renderProducts();