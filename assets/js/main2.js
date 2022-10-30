const tableInformationBaseStates = document.getElementById('tableinformationBS');
const firstInformation = document.getElementById('first-information');

function firstInfoPokemon(pokeDetail){
    const newFirstHtml= pokemons((pokemon)=> {
        `<span class="name">${pokemon.name}</span>
            <div class="detail">    
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="${type} type">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>`
    })  
    return firstInformation.innerHTML = newFirstHtml;  
}


function tableDados() {
    

    pokeApi.getPokemons().then((pokemons = []) => {
        const newHTML = pokemons.map((pokemon) => `
            <section class="informationPokemon">
            <div class="especificationItem">${pokemon.stat}</div>
                
                
                <div>${pokemon.baseStat}</div>      
            </section>
        `
        
        ).join('');
           
        tableInformationBaseStates.innerHTML+= newHTML;    
        
    })
    
}

tableDados()
