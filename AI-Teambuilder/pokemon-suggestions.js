const pokemonList = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle", "Jigglypuff", "Meowth", "Gengar", "Eevee", "Snorlax", "Dragonite"];

const pokemonDataList = document.createElement('datalist');
pokemonDataList.id = 'pokemon-suggestions';

pokemonList.forEach(pokemon => {
    const option = document.createElement('option');
    option.value = pokemon;
    pokemonDataList.appendChild(option);
});

document.body.appendChild(pokemonDataList);
