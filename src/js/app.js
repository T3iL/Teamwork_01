import wypisz from './wypisz.js'

const main = document.querySelector("#main")
const summary = document.querySelector("#summary")
const btn = document.getElementById("lupa")
const input = document.querySelector("#query")
const category = document.querySelector("#cat")

// querySelector().onclick = function(){myScript};

btn.addEventListener('click',zapytaj)

function zapytaj(){

    const query = input.value;
    const cat = category.value;
    console.log (cat)

    console.log('wypisanie')
    fetch(`http://swapi.dev/api/${cat}?search=${query}`)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            wypisz(response)
        })
}