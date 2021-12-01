/* Global variables */
var CURRENT_RECIPES = [], CHANGED = false;

document.getElementsByClassName("searchBar__input")[0].addEventListener("keyup", function(){
    if(this.value.length >= 3){
        search(this.value);
        CHANGED = true;
    }
    else if(CHANGED){
        search("");
        CHANGED = false;
    }
})

/**
 * * Search in json elements corresponding with the data in parameters and tags selected and returns an array of these elements
 * 
 * @param  {string} data
 */
function search(data){
    var NEW_RECIPES = [];
    console.log(data);

    if(TAGS.length != 0 || data != ""){
        RECIPES.forEach(element => {
            var found = true, i=0;

            var ingredients = element.ingredients,
            appareils = element.appliance,
            ustensiles = element.ustensils;

            while(found && i < TAGS.length){
                var j=0, isHere = false;
                while(!isHere && j < ingredients.length){
                    if(ingredients[j].ingredient.toLowerCase().includes(TAGS[i].toLowerCase())){
                        isHere = true;
                    }
                    j++;
                }
                j=0;
               if(!isHere && appareils.toLowerCase().includes(TAGS[i].toLowerCase())){
                    isHere = true;
                }
                while(!isHere && j < ustensiles.length){
                    if(ustensiles[j].toLowerCase().includes(TAGS[i].toLowerCase())){
                        isHere = true;
                    }
                    j++;
                }
                i++;
                found = isHere;
            }
            if(found && !element.getDescription().toLowerCase().includes(data.toLowerCase()) && !element.getName().toLowerCase().includes(data.toLowerCase())){
                var j=0, isHere = false;
                while(!isHere && j < ingredients.length){
                    if(ingredients[j].ingredient.toLowerCase().includes(data.toLowerCase())){
                        isHere = true;
                    }
                    j++;
                }
                found = isHere;
            }

            if(found){
                NEW_RECIPES.push(element.id);
                document.getElementById(element.id).style.display = "flex";
            }
            else{
                document.getElementById(element.id).style.display = "none";
            }
        });
        CURRENT_RECIPES = NEW_RECIPES;
    }
    else{
        for(var i=1; i<=50; i++){
            document.getElementById(i).style.display = "flex";
            CURRENT_RECIPES = [];
            RECIPES.forEach(element => {
                CURRENT_RECIPES.push(element.getID());
            });
        }
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