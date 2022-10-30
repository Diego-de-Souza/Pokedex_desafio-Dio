const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');

const maxRecord = 151;
const limit = 10;
let offset = 0;
/*
function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}
*/


function loadPokemonItens(offset,limit) {
    
    pokeApi.getPokemons(offset,limit).then((pokemons = []) => {
        const newHTML = pokemons.map((pokemon) => `
        <a href="assets/pages/especificacoes.html"> 
        <li class="pokemon ${pokemon.type}"}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">    
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="${type} type">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>
            </a>
            `
        ).join('');
        pokemonList.innerHTML+= newHTML;
       
        /* o código a cima é o mesmo que o abaixo de forma resumida
        const newList = pokemons.map((pokemons) => ConvertPokemonToLi(pokemons))
        
        const newHTML = newList.join('');
    
        pokemonList.innerHTML += newHTML; 
       
        */
        //podemos também utilizar essa forma
        //const listItems = [];
    
        //  for (let i = 0; i < pokemons.length; i++) {
        //    const pokemon = pokemons[i];
        //  listItems.push(ConvertPokemonToLi(pokemon));
        //    }
    
            
    })
}


loadPokemonItens(offset,limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtdRecord = offset+limit;

    if(qtdRecord >= maxRecord){
        const newLimit = maxRecord - qtdRecord;
        loadPokemonItens(offset,limit);

        loadMoreButton.parentElement.removeChild(loadMoreButton);
    }else{
        loadPokemonItens(offset, limit);
    }
})

