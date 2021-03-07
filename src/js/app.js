import wypisz from './wypisz.js'
import changecategory from './changecategory.js'

const main = document.querySelector("#main")
const summary = document.querySelector("#summary")
const btn = document.getElementById("lupa")
const input = document.querySelector("#query")
const category = document.querySelector("#cat")
const men = document.querySelector("#menu")
const menuitems = document.querySelectorAll(".menuitem")
console.log (menuitems)

menuitems.forEach((menuitem)=>{
    menuitem.addEventListener('click',changecategory)
})

// querySelector().onclick = function(){myScript};

btn.addEventListener('click',zapytaj)

function zapytaj(){

    const query = input.value;
    const cat = category.value;
    const men = menu.value;
    console.log (men)

    console.log('wypisanie')
    fetch(`https://swapi.dev/api/${cat}?search=${query}`)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            wypisz(response)
        })
}
