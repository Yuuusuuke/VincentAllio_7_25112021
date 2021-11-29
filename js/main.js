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

    element.innerHTML = card.time

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

var card = {
    "id": 1,
    "name" : "Limonade de Coco",
    "servings" : 1,
    "ingredients": [
        {
            "ingredient" : "Lait de coco",
            "quantity" : 400,
            "unit" : "ml"
        },
        {
            "ingredient" : "Citron",
            "quantity" : 2
        },
        {
            "ingredient" : "Crème de coco",
            "quantity" : 2,
            "unit" : "cuillères à soupe"
        },
        {
            "ingredient" : "Sucre",
            "quantity" : 30,
            "unit" : "grammes"
        },
        {
            "ingredient": "Glaçons"
        }
    ],
    "time": 10,
    "description": "Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistence désirée",
    "appliance": "Blender",
    "ustensils": ["cuillère à Soupe", "verres", "presse citron" ]
};

console.log("Add a tag");
addTag("Coco", "ingredient");

console.log("Add cards");
addCard(card);
addCard(card);
addCard(card);
addCard(card);
