export default function wypisz(json){
    console.log('----------',json)

    const count = json.results.length;


    json.results.forEach((result,index) => {
        const name = json.results[index].name;
        const height = json.results[index].height;      
        const hair_color = json.results[index].hair_color;      
        const mass = json.results[index].mass;                    
        const gender = json.results[index].gender;  
        const birth_year = json.results[index].birth_year;  
        const eye_color = json.results[index].eye_color; 
 
        


        
        const card = document.createElement('div')
        card.classList.add('card');
        const item = document.createElement('div')
        item.classList.add('line1');
                   
        item.innerHTML = 'Name: ' + name + ', ' + 'Wzrost: ' + height + ' cm, ' + 'Waga: ' + mass + 'kg, ' + 'Kolor włosów: ' + hair_color + ', ' + 'Płeć: ' + gender + ', ' + 'Rok urodzenia: ' + birth_year + ', ' + 'Kolor oczu: ' + eye_color;
        card.appendChild(item)
        main.appendChild(card)
    })

    summary.textContent = 'Znaleziono ' + count + ' ' + ' wyników'

}