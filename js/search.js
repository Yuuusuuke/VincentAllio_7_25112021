/* Global variables */
var CURRENT_RECIPES = [];

document.getElementsByClassName("searchBar__input")[0].addEventListener("keyup", function(){
    if(this.value.length >= 3){
        search(this.value);
    }
    else{
        search("");
    }
})

/**
 * * Search in json elements corresponding with the data in parameters and tags selected and returns an array of these elements
 * 
 * @param  {string} data
 */
function search(data){
    CURRENT_RECIPES = [];

    if(TAGS.length != 0 || data != ""){
        RECIPES.forEach(element => {
            var found = true, i=0;

            while(found && i < TAGS.length){
                var isHere = false;
                if(element.ingredients.findIndex(e => e.ingredient.toLowerCase().includes(TAGS[i].toLowerCase())) != -1){
                    isHere = true;
                }
               if(!isHere && element.appliance.toLowerCase().includes(TAGS[i].toLowerCase())){
                    isHere = true;
                }
                if(!isHere && element.ustensils.findIndex(e => e.toLowerCase().includes(TAGS[i].toLowerCase())) != -1){
                    isHere  =true;
                }
                i++;
                found = isHere;
            }
            if(found && !element.getDescription().toLowerCase().includes(data.toLowerCase()) && !element.getName().toLowerCase().includes(data.toLowerCase())){
                var isHere = false;
                if(element.ingredients.findIndex(e => e.ingredient.toLowerCase().includes(data.toLowerCase())) != -1){
                    isHere = true;
                }
                found = isHere;
            }
            if(found){
                CURRENT_RECIPES.push(element.id);
                document.getElementById(element.id).style.display = "flex";
            }
            else{
                document.getElementById(element.id).style.display = "none";
            }
        });
        if(CURRENT_RECIPES.length == 0){
            displayError();
        }
        else{
            hideError();
        }
    }
    else{
        for(var i=1; i<=50; i++){
            document.getElementById(i).style.display = "flex";
        }
        CURRENT_RECIPES = RECIPES.map(element => element.getID());
        hideError();
    }
}

/**
 * * Search in json elements with a specific type corresponding with the data in parameters and returns an array of these elements
 * 
 * @param  {string} data
 * @param  {string} type
 */
function searchTag(data, type){
    var items = [];

    CURRENT_RECIPES.forEach(id => {
        switch (type){
            case "ingredient":
                RECIPES.find(element => element.getID() === id).ingredients.forEach(e => {
                    if(!items.includes(e.ingredient) && e.ingredient.toLowerCase().includes(data.toLowerCase())){
                        items.push(e.ingredient);
                    }
                });
                break;
            case "appareil":
                var element = RECIPES.find(element => element.getID() === id).appliance;
                if(!items.includes(element) && element.toLowerCase().includes(data.toLowerCase())){
                    items.push(element);
                }
                break;
            case "ustensile":
                RECIPES.find(element => element.getID() === id).ustensils.forEach(e => {
                    if(!items.includes(e) && e.toLowerCase().includes(data.toLowerCase())){
                        items.push(e);
                    }
                });
                break;
        }
    });

    eraseContent(document.getElementsByClassName("filters__dropdown--"+type)[0].children[2])

    var count = 0;
    while(count < 51 && count != items.length){
        addTagDropdown(items[count], type);
        count++;
    }
}