const container = document.getElementById("cards_main");

for (let event of data.events){
    getCard(event)
}

function getCard(event){
    container.innerHTML += `
        <article class="card">
        <img src="${event.image}" alt="image ${event.name}" class="card_img"/>
        <h3 class="title_card">${event.name}</h3>
        <p class="subtitle_card">${event.description}</p>
        <div class="card_bottom">
            <p class="price">$${event.price}</p>
            <input type="button" value="See more" class="btn"/>
        </div>
        </article>
    `;  
}