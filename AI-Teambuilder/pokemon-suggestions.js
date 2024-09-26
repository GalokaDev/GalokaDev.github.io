const pokemonList = [
    "Scizor", "Garchomp", "Gallade", "Zapdos", "Serperior", "Jellicent", "Weezing", 
    "Mamoswine", "Dragonite", "Tyranitar", "RotomWash", "Gliscor", "Starmie", 
    "Hydreigon", "Excadrill", "Chansey", "Volcarona", "Breloom", "Skarmory", 
    "Reuniclus", "Pelipper", "Conkeldurr", "Crawdaunt", "Metagross", "Gengar", 
    "Amoonguss", "Mienshao", "Infernape", "Suicune", "Chandelure", "Magnezone", 
    "Bronzong", "Darmanitan", "Empoleon", "Tentacruel", "Weavile", "Ferrothorn", 
    "Kingdra", "Porygon2", "Gyarados", "Gastrodon", "Espeon", "Torkoal", "Porygonz", 
    "Lucario", "Sableye", "Kabutops", "Cofagrigus", "Cloyster", "Blissey", "Venusaur", 
    "Ditto", "Raikou", "Entei", "Staraptor", "Poliwrath", "Feraligatr", "Togekiss", 
    "Salamance", "Mandibuzz", "Jolteon", "Milotic"
];

const pokemonDataList = document.createElement('datalist');
pokemonDataList.id = 'pokemon-suggestions';

pokemonList.forEach(pokemon => {
    const option = document.createElement('option');
    option.value = pokemon;
    pokemonDataList.appendChild(option);
});

document.body.appendChild(pokemonDataList);
