//Obtener el contenedor desde el HTML
const detailContainer = document.getElementById('detailCard')

//Obtengo los elementos del data
let eventsDetails = data.events

//ID del location guardandola en una variable
//llego al numero de ID borrando los carácteres con el metodo de string "slice"
let idLocation = location.search.slice(4)

//Filtro el array (events) que me devuelva el ID obtenido con el location
let filteredEvent = eventsDetails.filter(event => idLocation == event._id)
filteredEvent = filteredEvent[0]

//Imprimo el evento
cardDetail(filteredEvent) 

//Crear funcion para obtener la información de la card
function cardDetail(event) { 
    detailContainer.innerHTML = `
    <section class="card_details">
        <div class="padding_detail">
            <img src="${event.image}" alt="image ${event.name}" class="card_img"/>
        </div>
        <h2 class="title_card">${event.name}</h2>
        <p class="subtitle_card">${event.description}</p>
        <h6 class="title_card">Date:</h6>
        <p class="subtitle_card">${event.date}</p>
        <h6 class="title_card">Capacity:</h6>
        <p class="subtitle_card">${event.capacity}</p>
        <h6 class="title_card">Assistance:</h6>
        <p class="subtitle_card">${event.assistance}</p>
        <div class="card_bottom">
            <h6 class="title_card">Price:</h6>
            <p class="price">$${event.price}</p>
        </div>
        </section>  
    `
}