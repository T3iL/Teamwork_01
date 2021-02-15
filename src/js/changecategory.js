export default function changecategory(event){
    const category = document.querySelector("#cat")
    console.log (category.children)



    category.childNodes.forEach((element)=>{
       console.log (element.value,event.target.id)
       if (element.value === event.target.id){
           console.log ("ok")
           element.selected = 'selected'
       } else{
           console.log ("No ok")
       }
    })
    
}