function removeTag(element){
    element.path[2].removeChild(element.path[1]);
    element.path[0].removeEventListener("click", removeTag);
}

function addTag(name, type){
    var area = document.getElementsByClassName("tags")[0];

    var render = document.createElement("div");
    render.classList.add("tags__tag");
    render.classList.add("tags__tag--"+ type);
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


console.log("Add a tag");
addTag("Coco", "ingredient");
