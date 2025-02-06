const limitPokemon = 900;

async function fetchPokemons() {
    for (let i = 1; i < limitPokemon + 1; i++){
        await getPokemons(i);
    }
}

async function getPokemons(id) {
    try{
        const pokeArray = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokeData = await pokeArray.json();
        const img = await pokeData.sprites.front_default;
        const name = await (pokeData.species.name).toUpperCase();
        const typeOne = await (pokeData.types[0].type.name).toUpperCase();
         if (pokeData.types[1] != undefined) {
             const typeTwo = await (pokeData.types[1].type.name).toUpperCase()
        }

        constructPokemons(id, img, name, typeOne)
        

    } catch (erro) {
        console.error("Deu erro no " + erro)
    }
}

function constructPokemons(id, imagem, nome, typeOne, typeTwo){
    color = typeOne.toLowerCase();
    listPokemon = document.querySelector(".pokemon__container__list");
    listPokemon.innerHTML += `
     <li class="pokemon-li">
                    <div class="pokemon-li-container" style="background-color: var(--color-${color}-type)">
                        <h2 class="pokemon-number">#${id}</h2>
                        <img src="${imagem}" alt="" class="pokemon-image">
                        <h2 class="pokemon-name">${nome}</h2>
                        <div class="pokemon-types">
                            <p class="pokemon-types-type">${typeOne}</p>
                        </div>
                    </div>
                </li>
    `;

}

searchBar = document.querySelector('.search__bar');

searchBar.addEventListener("input", () => {
    const pokemons = document.querySelectorAll(".pokemon-li");
    if (searchBar != ""){
        pokemons.forEach((pokemon) => {
            let title = pokemon.querySelector(".pokemon-name").textContent;
            let filterValue = searchBar.value.toUpperCase();
            (!title.includes(filterValue)) ? pokemon.style.display = "none" : pokemon.style.display = "block";
        })
    } else {
        pokemon.style.display = "block";
    }
})

fetchPokemons();