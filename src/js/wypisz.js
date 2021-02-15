export default function wypisz(json){
    console.log(json)

    const count = json.results.length;


    json.results.forEach((result,index) => {
        const name = json.results[index].name;
        const height = json.results[index].height;            
        
        const item = document.createElement('div')
        item.classList.add('item');
                   
        item.innerHTML = name + ' height:' + height;

        main.appendChild(item)
    })

    summary.textContent = 'Znaleziono ' + count + ' ' + ' wyników'

}