/* Global variables */
var RECIPES = [];

/**
 * * Remove a specific tag in the tag area
 * 
 * ! The element in parameters is the cross icon on a tag
 * 
 * @param  {node} element
 */
function removeTag(element){
    element.path[2].removeChild(element.path[1]);
    element.path[0].removeEventListener("click", removeTag);
}

/**
 * * Create a tag in the tag area
 * 
 * ! Type must be in lower-case and in single
 * 
 * @param  {string} name
 * @param  {string} type
 */
function addTag(name, type){
    var area = document.getElementsByClassName("tags")[0];

    var render = document.createElement("div");
    render.classList.add("tags__tag");
    render.classList.add(type);
    var subrender = document.createElement("p");
    subrender.classList.add("tags__tag__text");
    subrender.innerHTML = name;

    render.appendChild(subrender);

    subrender = document.createElement("i");
    subrender.classList.add("far");
    subrender.classList.add("fa-times-circle");
    subrender.classList.add("tags__tag__icon");

    subrender.addEventListener("click", removeTag);

    render.appendChild(subrender);

    area.appendChild(render);
}

/**
 * * Display a card with all the information from the object in parameter
 * 
 * @param  {Object} card
 */
function addCard(card){
    var area = document.getElementsByClassName("cardsTable")[0];

    var render = document.createElement("a");
    render.classList.add("cardsTable__card");
    render.classList.add("card");
    render.classList.add("col");

    var subrender = document.createElement("img");
    subrender.classList.add("card__image");
    subrender.src = "#";
    subrender.alt = card.name + " image";
    render.appendChild(subrender);

    subrender = document.createElement("div");
    subrender.classList.add("card__description");

    var header = document.createElement("div");
    header.classList.add("card__description__header");
    var element = document.createElement("h1");
    element.classList.add("card__description__header__title");

    element.innerHTML = card.name;

    header.appendChild(element);

    element = document.createElement("i");
    element.classList.add("far");
    element.classList.add("fa-clock");
    element.classList.add("card__description__header__icon");
    header.appendChild(element);

    element = document.createElement("p");
    element.classList.add("card__description__header__time");

    element.innerHTML = card.time + " min";

    header.appendChild(element);
    subrender.appendChild(header);

    header = document.createElement("div");
    header.classList.add("card__description__content");
    header.classList.add("row-cols-2");

    element = document.createElement("p");
    element.classList.add("card__description__content__ingredients");
    card.ingredients.forEach(e => {
        element.innerHTML += "<span class='card__description__content__ingredients--bold'>" + e.ingredient;
        if(e.quantity != undefined){
            element.innerHTML += " : </span>" + e.quantity;
            if(e.unit != undefined){
                element.innerHTML += " " + e.unit;
            }
        }
        element.innerHTML += "<br />";
    });
    header.appendChild(element);

    element = document.createElement("p");
    element.classList.add("card__description__content__explaination");

    element.innerHTML = card.description;

    header.appendChild(element);
    subrender.appendChild(header);
    render.appendChild(subrender);

    area.appendChild(render);
}

/**
 * * Erase every child from a parent node
 * 
 * @param  {node} parent
 */
function eraseContent(parent){
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

function buildRecipes(data){
    data.forEach(element => {
        RECIPES.push(CardFactory.createCard(element.id, element.name, element.servings, element.ingredients, element.time, element.description, element.appliance, element.ustensils));
      });
}

window.addEventListener("load", () => {
    fetch("./ressources/recipe.json")
    .then((response) => {
        if(response.ok){
            return response.json();
        }
        else{
            console.log(`Une erreur de type ${response.status}  est survenu ! `);
        }
    })
    .then((data) => {
        buildRecipes(data);
        main();
    })
})


function main(){
    console.log("Add a tag");
    addTag("Coco", "ingredient");

    console.log("Add cards");
    addCard(RECIPES[0]);
    addCard(RECIPES[1]);
    addCard(RECIPES[2]);
    addCard(RECIPES[3]);
}



