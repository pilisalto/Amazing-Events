//Obtengo el ID de los elementos del HTML mediante DOM
const title = document.getElementById("title");
const search = document.getElementById("search");
const containerCheckbox = document.getElementById("containerCheckbox");
const container = document.getElementById("cards_main");

// Obtiene la data del currentDate
const date = data.currentDate;
const card = data.events.map((event) => event);
const homeCards = card.filter(() => title.text.includes("Home"));
const upcomingCards = card.filter(() => title.text.includes("Upcoming"))
.filter((card) => card.date > date);
const pastCards = card.filter(() => title.text.includes("Past"))
.filter((card) => card.date < date);

let cardsfuncion = [...homeCards, ...upcomingCards, ...pastCards];
cardsfuncion.forEach(getCard);

// Filtro y mapeo de checkbox categorias
const categorys = card.reduce((allCategory, event) => Array.from(new Set([...allCategory, event.category])), []);

categorys.forEach(createCheckbox)

function createCheckbox(category) {
    containerCheckbox.innerHTML += `
    <div>
        <label><input type="checkbox" value="${category}" class="idCheck" id="${category}">${category}</label>
    </div>
    `;  
}

//Obtengo checkbox data, search data y filtro

let checkIdBox = document.querySelectorAll(".idCheck")
checkIdBox = Array.from(checkIdBox)
checkIdBox.forEach(checkbox => checkbox.addEventListener("click", checks))

search.addEventListener("input", checks)

function checks() {
    let filterChecks = checkEvents(cardsfuncion)
    let filterSearch = filterCardsBySearch(filterChecks, search.value)
    if (filterSearch.lenght !== 0) {
        container.innerHTML = ``
    }
    filterSearch.forEach(getCard)
}

function checkEvents(events) {
    let checkboxChecked = checkIdBox.filter(check => check.checked).map(checkCategory => checkCategory.value)
    if (checkboxChecked.length > 0) {
        let filterCheckBox = events.filter(event => checkboxChecked.includes(event.category))
        return filterCheckBox
    }
    return events
}

function filterCardsBySearch(events, texto) {
    let filtrosearch = events.filter(event => event.name.toLowerCase().includes(texto.toLowerCase()));
    if (filtrosearch.length === 0) {
        searchEmpty()
        return []
    }
    return filtrosearch
}

function searchEmpty() {
}

//Card 
function getCard(event){
    container.innerHTML += `
        <article class="card">
        <img src="${event.image}" alt="image ${event.name}" class="card_img"/>
        <h3 class="title_card">${event.name}</h3>
        <p class="subtitle_card">${event.description}</p>
        <div class="card_bottom">
            <p class="price">$${event.price}</p>
            <a class="btn" href="../details.html?id=${event._id}">View more</a>
        </div>
        </article>
    `;  
}