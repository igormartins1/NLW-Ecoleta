
function populateUFs(){
    
    const ufSelect=document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")

    .then(res=> res.json())
    .then(states =>{

        for( const state of state){
            ufSelect.innerHTML +=`<option value="${state.id}">${state.nome}</option`

        }

        

    
    
    
    })

}

populateUFs()


function getCities(event){

    const citySelect=document.querySelector("[name=city]")
    const stateInput=document.querySelector("[name=state]")

    const ufValue = event.target.value
    
    const indexOfSelectedState= event. target.selectedIndex
    stateImput.value = event.target.options[indexOfSelectedState].text


    const url=`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML="<option value> Selecione a Cidade</option>"
    citySelect.disabled=true


    fetch(url)
    .then(res=> res.json())
    .then( cities =>{
        

        for( const city of cities){
            citySelect.innerHTML +=`<option value="${city.nome}">${city.nome}</option`

        }
        
        citySelect.disabled=false
    })


}





document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)

//itens de Coleta
// Pegar todos os Li

const itemsToCollect=document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect){
    item.addEventListener("click",handleSelectedItem)
}


const collectedItems=document.querySelector("input[name=items]")

let selectedItems=[ ]


function handleSelectedItem(event){

    const itemli=event.target

    //Adicionar ou Remover uma classe com JS
    itemli.classlist.toggle("selected")
    
    const itemID= itemli.dataset.id
    
    

    // verificar se existem items selecionados, se sim 
    //pegar os items selecionados 

    const alredySelected=selectedItems.findIndex(item =>{
        const itemFound=item==itemID   //isso  será True ou False
        return itemFound

    })

    Console.log(alredySelected >=0)
    


    //se já estiver selecionado tirar da 
    

    if(alredySelected >=0) {
        //tirar da seleçao
        const filteredItems=selectedItems.filter( item=>{
            const itemIsDifferent= item != itemID  //false
            return itemIsDifferent
        })

        selectedItems=filteredItems
    } else{
        // se não tiver selecionado , adicionar a seleção 
        //adicionar a seleção

        selectedItems.push(itemID)

    }

    console.log(selectedItems)
    


    //atualizar o campos  escondido com os itens selecionados


    collectedItems.value=selectedItems

    




}





    