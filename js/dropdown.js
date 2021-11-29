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
}

window.onclick = function(event){
    if(INGRETOOGLE){
        if(!event.target.matches(".ingredient")){
            closeDropdown(document.getElementsByClassName("filters__dropdown")[0]);
            INGRETOOGLE = false;
        }
    }

    if(APPATOOGLE){
        console.log(event.target.matches(".appareil"));
        if(!event.target.matches(".appareil")){
            closeDropdown(document.getElementsByClassName("filters__dropdown")[1]);
            APPATOOGLE = false;
        }
    }

    if(USTENTOOGLE){
        console.log(event.target.matches(".ustensile"));
        if(!event.target.matches(".ustensile")){
            closeDropdown(document.getElementsByClassName("filters__dropdown")[2]);
            USTENTOOGLE = false;
        }
    }
}