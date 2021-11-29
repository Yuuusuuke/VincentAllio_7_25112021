/* Event listeners which handle getting the value of main searchbar */
document.getElementsByClassName("searchBar__input")[0].addEventListener("search", (event) => {search(event.path[0].value)})
document.getElementsByClassName("searchBar__valid")[0].addEventListener("click", (event) => {search(event.path[2].children[0].value)})

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