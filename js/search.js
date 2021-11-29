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