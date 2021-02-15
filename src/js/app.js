import wypisz from './wypisz.js'

const main = document.querySelector("#main")
const summary = document.querySelector("#summary")
const btn = document.getElementById("lupa")
const input = document.querySelector("#query")

<<<<<<< HEAD
let query = '';
=======
// querySelector().onclick = function(){myScript};
>>>>>>> 2404fba5114237548198c897ba02b9b2b9974fea

btn.addEventListener('click',zapytaj)

function zapytaj(){

    const query = input.value;

    console.log('wypisanie')
    fetch(`http://swapi.dev/api/people?search=${query}`)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            wypisz(response)
        })
}