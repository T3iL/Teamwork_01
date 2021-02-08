export default function wypisz(json){
        console.log(json)

        const object = document.createElement('pre')

        object.classList.add('gender');
        object.innerHTML = JSON.stringify(json,null,2);

        main.appendChild(object)
    }