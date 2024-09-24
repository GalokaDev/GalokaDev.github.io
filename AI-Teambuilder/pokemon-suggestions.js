const pokemonList = ["Scizor", "Magnezone", "Zapdos", "Gyarados", "Suicune", "Garchomp", "Gengar", "Rotom-Wash", "Jolteon", "Dragonite"];

const pokemonDataList = document.createElement('datalist');
pokemonDataList.id = 'pokemon-suggestions';

pokemonList.forEach(pokemon => {
    const option = document.createElement('option');
    option.value = pokemon;
    pokemonDataList.appendChild(option);
});

document.body.appendChild(pokemonDataList);
