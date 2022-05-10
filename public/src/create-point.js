function populateUFS(){
const ufSelect = document.querySelector("select[name=uf]")
//coloca o link correto se nao dara erro 
fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
.then(res=> res.json() )
.then( states => {

    for(state of states ){  
   ufSelect.innerHTML  +=  `<option value="${state.name}">${state.nome}</option>`   
} 
  

     } )
  }


populateUFS()


function getCities(event){
    
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")
    
    const ufValue = event.target.value 
      
    const indexOfSelectedstate = event.target.selectIndex 
    stateInput.value = event.target.options [indexOfSelectedstate].text 
   
    const url = //aqui vc vai colocar o link 


    citySelect.innerHTML = ""
    citySelect.disabled = true 
     fetch(url)
    .then(res=> res.json() )
    .then( cities => {

    for( cities  of cities ){  
    citySelect.innerHTML  +=  `<option value="${city.name}">${city.nome}</option>`
        }

        citySelect.disabled = false
     })
}


document
.querySelector("select[name=uf]")
.addEventListener("change" , getCities)
      
 // itens de coleta
 //pegar todos os li 

const itemsToCollect = document.querySelectorAll(".itens-grid li")

for (const item of itemsToCollect){
    item.addEventListener("click" , handleSelecteditem)

    function handleSelecteditem(event){
        const itemLi = event.target 

         
        //adicionar ou remover uma classe no javaScript
          itemLi.classList.toggle("selected")
        
        const itemId = itemLi.dataset.id 
        

    }
}