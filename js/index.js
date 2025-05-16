//en este archivo van las funciones y eventos que interactuan con el index html


const dummyItem = {
"id": 0,
"title": "string",
"price": 0.1,
"description": "string",
"category": "string",
"image": "http://example.com"
}


const cardsContainer = document.querySelector("#card_container")


cardsContainer.innerHTML = 
`
<div class="card" id=${dummyItem.id} style="width: 18rem;">
  <img src=${dummyItem.image} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${dummyItem.title}</h5>
    <p class="card-text">${dummyItem.description}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>


`