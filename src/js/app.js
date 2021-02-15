import wypisz from './wypisz.js'

const main = document.querySelector("#main")
const summary = document.querySelector("#summary")

let query;

fetch(`http://swapi.dev/api/people?search=${query}`)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        wypisz(response)
    })
function src(x){
query = x
}