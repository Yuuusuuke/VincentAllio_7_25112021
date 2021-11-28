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

function openDropdown(element){
    element.children[1].classList.add("flip");
}

function closeDropdown(element){
    element.children[1].classList.remove("flip");
}