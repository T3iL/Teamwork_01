export default function wypisz(json){
    console.log('----------',json)

    const count = json.results.length;


    json.results.forEach((result,index) => {
        const name = json.results[index].name;
        const height = json.results[index].height;            
        
        const card = document.createElement('div')
        card.classList.add('card');
        const item = document.createElement('div')
        item.classList.add('line1');
                   
        item.innerHTML = name + ' height:' + height;
        card.appendChild(item)
        main.appendChild(card)
    })

    summary.textContent = 'Znaleziono ' + count + ' ' + ' wyników'

}