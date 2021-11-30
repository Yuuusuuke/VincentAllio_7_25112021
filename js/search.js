/* Global variables */
var CURRENT_RECIPES = [];

/**
 * * Search in json elements corresponding with the data in parameters and returns an array of these elements
 * 
 * @param  {string} data
 * 
 * @returns {Array}
 */
function search(data){
    console.log(data);
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
    while(count < 50 && count != items.length){
        addTagDropdown(items[count], type);
        count++;
    }
}