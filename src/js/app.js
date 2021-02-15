import wypisz from './wypisz.js'

const main = document.querySelector("#main")
const summary = document.querySelector("#summary")

function src(x){
    let query = x
    }

fetch(`http://swapi.dev/api/people?search=${query}`)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        wypisz(response)
    })
