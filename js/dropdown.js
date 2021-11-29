
/* Event listeners which handle opening or closing a dropdown */
var INGToogle = false, APPToogle = false, USTToogle = false;

document.getElementsByClassName("filters__dropdown")[0].addEventListener("click", function flip(){
    !INGToogle ? openDropdown(this) : closeDropdown(this);
    INGToogle = !INGToogle;
});
document.getElementsByClassName("filters__dropdown")[1].addEventListener("click", function flip(){
    !APPToogle ? openDropdown(this) : closeDropdown(this);
    APPToogle = !APPToogle;
});
document.getElementsByClassName("filters__dropdown")[2].addEventListener("click", function flip(){
    !USTToogle ? openDropdown(this) : closeDropdown(this);
    USTToogle = !USTToogle;
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
    element.children[2].classList.remove("show");
}