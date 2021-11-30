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
    console.log("%c- - - - - - - - - - - - - -", "color: white;");
    console.log("%cData : %c" + data, "color: red; font-weight: bold;", "color: white; font-weight: 400;");
    console.log("%cType : %c" + type, "color: red; font-weight: bold;", "color: white; font-weight: 400;");
}