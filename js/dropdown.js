/* Global variable */
var INGRETOOGLE = false, APPATOOGLE = false, USTENTOOGLE = false;

/**
* * Event listeners which handle opening or closing a dropdown
*
* ! Keyup events
*/
document.getElementsByClassName("filters__dropdown")[0].addEventListener("keyup", function (){
    if(this.children[0].value.length === 0){
        closeDropdown(this);
        INGRETOOGLE = false;
    }
    else{
        openDropdown(this);
        searchTag(this.children[0].value, "ingredient");
        INGRETOOGLE = true;
    }
});
document.getElementsByClassName("filters__dropdown")[1].addEventListener("keyup", function (){
    if(this.children[0].value.length === 0){
        closeDropdown(this);
        APPATOOGLE = false;
    }
    else{
        openDropdown(this);
        searchTag(this.children[0].value, "appareil");
        APPATOOGLE = true;
    }
});
document.getElementsByClassName("filters__dropdown")[2].addEventListener("keyup", function (){
    if(this.children[0].value.length === 0){
        closeDropdown(this);
        USTENTOOGLE = false;
    }
    else{
        openDropdown(this);
        searchTag(this.children[0].value, "ustensile");
        USTENTOOGLE = true;
    }
});

/**
 * ! When clicking on the chevron
 */
document.getElementsByClassName("filters__dropdown")[0].children[1].addEventListener("click", function (){
    if(this.parentNode.children[0].value.length === 0){
        closeDropdown(this.parentNode);
        INGRETOOGLE = false;
    }
    else{
        if(INGRETOOGLE){
            closeDropdown(this.parentNode);
            INGRETOOGLE = false;
        }
        else{
            openDropdown(this.parentNode);
            INGRETOOGLE = true;
        }
    }
});
document.getElementsByClassName("filters__dropdown")[1].children[1].addEventListener("click", function (){
    if(this.parentNode.children[0].value.length === 0){
        closeDropdown(this.parentNode);
        APPATOOGLE = false;
    }
    else{
        if(APPATOOGLE){
            closeDropdown(this.parentNode);
            APPATOOGLE = false;
        }
        else{
            openDropdown(this.parentNode);
            APPATOOGLE = true;
        }
    }
});
document.getElementsByClassName("filters__dropdown")[2].children[1].addEventListener("click", function (){
    if(this.parentNode.children[0].value.length === 0){
        closeDropdown(this.parentNode);
        USTENTOOGLE = false;
    }
    else{
        if(USTENTOOGLE){
            closeDropdown(this.parentNode);
            USTENTOOGLE = false;
        }
        else{
            openDropdown(this.parentNode);
            USTENTOOGLE = true;
        }
    }
});

/**
 * ! When clicking on the input
 */
 document.getElementsByClassName("filters__dropdown")[0].children[0].addEventListener("click", function (){
    openDropdown(this.parentNode);
    searchTag(this.value, "ingredient");
    this.placeholder = "Recherche un ingredient";
    INGRETOOGLE = true;
});
document.getElementsByClassName("filters__dropdown")[1].children[0].addEventListener("click", function (){
    openDropdown(this.parentNode);
    searchTag(this.value, "appareil");
    this.placeholder = "Recherche un appareil";
    APPATOOGLE = true;
});
document.getElementsByClassName("filters__dropdown")[2].children[0].addEventListener("click", function (){
    openDropdown(this.parentNode);
    searchTag(this.value, "ustensile");
    this.placeholder = "Recherche un ustensile";
    USTENTOOGLE = true;
});

/**
 * * Open the specific dropdown
 * 
 * @param  {node} element
 */
function openDropdown(element){
    element.children[1].classList.add("flip");
    element.classList.add("expend");
    element.children[2].classList.add("show");
}

/**
 * * Close the specific dropdown
 * 
 * @param  {node} element
 */
function closeDropdown(element){
    element.children[1].classList.remove("flip");
    element.classList.remove("expend");
    element.classList.remove("expend--2");
    element.children[2].classList.remove("show");

    if(element.children[0].value === ""){
        element.children[0].placeholder = element.children[0].getAttribute("default");
    }
}

window.onclick = function(event){
    if(INGRETOOGLE){
        if(!event.target.matches(".ingredient")){
            closeDropdown(document.getElementsByClassName("filters__dropdown")[0]);
            INGRETOOGLE = false;
        }
    }

    if(APPATOOGLE){
        if(!event.target.matches(".appareil")){
            closeDropdown(document.getElementsByClassName("filters__dropdown")[1]);
            APPATOOGLE = false;
        }
    }

    if(USTENTOOGLE){
        if(!event.target.matches(".ustensile")){
            closeDropdown(document.getElementsByClassName("filters__dropdown")[2]);
            USTENTOOGLE = false;
        }
    }
}

/**
 * * Display a tag in a dropdown
 * 
 * @param  {string} tag
 * @param  {string} dropdown
 */
function addTagDropdown(tag, dropdown){
    var area = document.getElementsByClassName("filters__dropdown--"+dropdown)[0];

    var render = document.createElement("p")
    render.classList.add(dropdown);
    render.innerHTML = tag;
    render.addEventListener("click", () => {
        if(!TAGS.includes(tag)){
            addTag(tag, dropdown);
            if(document.getElementsByClassName("searchBar__input")[0].value.length >= 3){
                search(document.getElementsByClassName("searchBar__input")[0].value);
            }
            else{
                search("");
            }
        }
    })

    area.children[2].appendChild(render);
}