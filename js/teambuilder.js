// Mappa delle debolezze e resistenze dei Pokémon rispetto ai vari tipi
const typeChart = {
    "Scizor": { "superweak": ["fire"], "weaknesses": [],"resistances": ["normal", "grass", "ice", "bug", "steel", "psychic", "dragon"], "immunities": [] },
    "Garchomp": { "superweak": ["ice"],"weaknesses": ["dragon"], "resistances": ["fire", "poison", "rock"], "immunities": ["electric"] },
    "Gallade": { "superweak": [], "weaknesses": ["flying", "ghost"], "resistances": ["fighting", "rock"], "immunities": [] },
    "Zapdos": { "superweak": [], "weaknesses": ["rock", "ice"], "resistances": ["fighting", "flying", "bug", "steel", "grass"], "immunities": ["ground"] },
    "Serperior": { "superweak": [], "weaknesses": ["fire", "ice", "flying", "bug"], "resistances": ["water", "grass", "electric", "ground"], "immunities": [] },
    "Jellicent": { "superweak": [], "weaknesses": ["ghost", "dark", "grass", "electric"], "resistances": ["water", "ice", "fire", "poison", "steel", "bug"], "immunities": ["normal", "fighting"] },
    "Weezing": { "superweak": [], "weaknesses": ["psychic", "ground"], "resistances": ["fighting", "poison", "bug", "grass"], "immunities": [] },
    "Mamoswine": { "superweak": [], "weaknesses": ["fire", "fighting", "water", "grass", "steel"], "resistances": ["poison"], "immunities": ["electric"] },
    "Dragonite": { "superweak": [], "weaknesses": ["ice", "dragon", "rock"], "resistances": ["fire", "water", "grass", "fighting", "bug"], "immunities": ["ground"] },
    "Tyranitar": { "superweak": [], "weaknesses": ["fighting", "ground", "bug", "steel", "water", "grass"], "resistances": ["normal", "flying", "poison", "ghost", "fire", "dark"], "immunities": ["psychic"] },
    "Rotom-Wash": { "superweak": [], "weaknesses": ["grass"], "resistances": ["flying", "steel", "fire", "water", "ice"], "immunities": ["ground"] },
    "Gliscor": { "superweak": [], "weaknesses": ["water", "ice"], "resistances": ["fighting", "poison", "bug"], "immunities": ["electric", "ground"] },
    "Starmie": { "superweak": [], "weaknesses": ["electric", "grass", "bug", "ghost", "dark"], "resistances": ["fire", "water", "ice", "steel"], "immunities": [] },
    "Hydreigon": { "superweak": [], "weaknesses": ["bug", "fighting", "ice", "dragon"], "resistances": ["fire", "water", "grass", "electric", "psychic", "ghost", "dark"], "immunities": ["ground"] },
    "Excadrill": { "superweak": [], "weaknesses": ["fire", "water", "fighting", "ground"], "resistances": ["normal", "flying", "rock", "bug", "steel", "psychic", "poison"], "immunities": ["electric"] },
    "Chansey": { "superweak": [], "weaknesses": ["fighting"], "resistances": [], "immunities": ["ghost"] },
    "Volcarona": { "superweak": ["rock"], "weaknesses": ["water", "flying"], "resistances": ["fighting", "bug", "steel", "grass", "ice"], "immunities": [] },
    "Breloom": { "superweak": [], "weaknesses": ["fire", "ice", "flying", "psychic"], "resistances": ["water", "grass", "electric", "ground", "rock"], "immunities": [] },
    "Skarmory": { "superweak": [], "weaknesses": ["fire", "electric"], "resistances": ["normal", "flying", "bug", "steel", "grass", "psychic", "dragon", "rock"], "immunities": ["poison", "ground"] },
    "Reuniclus": { "superweak": [], "weaknesses": ["bug", "ghost", "dark"], "resistances": ["fighting", "psychic"], "immunities": [] },
    "Pelipper": { "superweak": [], "weaknesses": ["electric", "rock"], "resistances": ["fighting", "bug", "steel", "fire", "water", "ice"], "immunities": ["ground"] },
    "Conkeldurr": { "superweak": [], "weaknesses": ["flying", "psychic"], "resistances": ["bug", "rock", "dark"], "immunities": [] },
    "Crawdaunt": { "superweak": [], "weaknesses": ["electric", "fighting", "grass", "bug"], "resistances": ["ghost", "steel", "water", "ice", "dark"], "immunities": ["psychic"] },
    "Metagross": { "superweak": [], "weaknesses": ["fire", "ground", "ghost", "dark"], "resistances": ["normal", "flying", "rock", "steel", "psychic", "ice", "grass", "dragon"], "immunities": ["poison"] },
    "Gengar": { "superweak": [], "weaknesses": ["ghost", "psychic", "dark"], "resistances": ["grass", "bug", "poison"], "immunities": ["normal", "fighting"] },
    "Amoonguss": { "superweak": [], "weaknesses": ["fire", "ice", "flying", "bug", "psychic"], "resistances": ["water", "electric", "grass", "ground"], "immunities": [] },
    "Mienshao": { "superweak": [], "weaknesses": ["flying", "psychic"], "resistances": ["rock", "dark", "bug"], "immunities": [] },
    "Infernape": { "superweak": [], "weaknesses": ["water", "ground", "flying", "psychic"], "resistances": ["bug", "steel", "fire", "grass", "ice", "dark"], "immunities": [] },
    "Suicune": { "superweak": [], "weaknesses": ["electric", "grass"], "resistances": ["fire", "water", "ice", "steel"], "immunities": [] },
    "Chandelure": { "superweak": [], "weaknesses": ["water", "rock", "ghost", "dark"], "resistances": ["normal", "fire", "grass", "ice", "bug", "steel", "poison"], "immunities": ["fighting"] },
    "Magnezone": { "superweak": [], "weaknesses": ["fire", "fighting", "ground"], "resistances": ["normal", "flying", "rock", "bug", "steel", "psychic", "ice", "dragon", "grass", "electric"], "immunities": ["poison"] },
    "Bronzong": { "superweak": [], "weaknesses": ["fire", "ghost", "dark"], "resistances": ["normal", "flying", "rock", "bug", "steel", "psychic", "grass", "ice"], "immunities": ["poison"], "conditional_immunities": { "ground": "if Levitate" } },
    "Darmanitan": { "superweak": [], "weaknesses": ["water", "ground", "rock"], "resistances": ["bug", "steel", "fire", "grass", "ice"], "immunities": [] },
    "Empoleon": { "superweak": [], "weaknesses": ["electric", "ground", "fighting"], "resistances": ["normal", "flying", "poison", "bug", "steel", "ice", "dragon", "water"], "immunities": [] },
    "Tentacruel": { "superweak": [], "weaknesses": ["electric", "psychic", "ground"], "resistances": ["water", "ice", "fire", "fighting", "bug", "steel", "poison"], "immunities": [] },
    "Weavile": { "superweak": [], "weaknesses": ["fire", "fighting", "bug", "steel", "rock"], "resistances": ["ghost", "ice", "dark"], "immunities": ["psychic"] },
    "Ferrothorn": { "superweak": [], "weaknesses": ["fire", "fighting"], "resistances": ["normal", "water", "grass", "electric", "rock", "steel", "psychic", "dragon"], "immunities": ["poison"] },
    "Kingdra": { "superweak": [], "weaknesses": ["dragon"], "resistances": ["water", "fire", "steel"], "immunities": [] },
    "Porygon2": { "superweak": [], "weaknesses": ["fighting"], "resistances": [], "immunities": ["ghost"] },
    "Gyarados": { "superweak": ["electric"], "weaknesses": ["rock"], "resistances": ["bug", "fire", "water", "steel", "fighting"], "immunities": ["ground"] },
};
const types = ["normal", "fire", "water", "electric", "grass", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dragon", "dark", "steel"];
const hazardRemovalMoves = ["defog", "rapid spin"];
const switchMoves = ["volt switch", "u-turn", "teleport", "baton pass"];

document.getElementById('calculate').addEventListener('click', function() {
    let typeScores = {};
    types.forEach(type => typeScores[type] = 0);

    let hazardRemovalCount = 0;
    let switchMoveCount = 0;
    let pokemonInserted = false;

    // Funzione per aggiornare i punteggi dei tipi
    function updateTypeScores(pokemonName) {
        let pokemon = typeChart[pokemonName];
        if (pokemon) {
            pokemon.superweak.forEach(type => typeScores[type] += 2);
            pokemon.weaknesses.forEach(type => typeScores[type] += 1);
            
            pokemon.resistances.forEach(type => typeScores[type] -= 1);
            pokemon.immunities.forEach(type => typeScores[type] -= 2);
        }
    }

    // Funzione per contare le mosse speciali (rimozione hazard e switch)
    function countSpecialMoves(move) {
        if (hazardRemovalMoves.includes(move.toLowerCase())) {
            hazardRemovalCount++;
        }
        if (switchMoves.includes(move.toLowerCase())) {
            switchMoveCount++;
        }
    }

    // Raccolta dei nomi dei Pokémon inseriti e delle loro mosse
    for (let i = 1; i <= 6; i++) {
        let pokemonName = document.getElementById(`pokemon-${i}`).value.trim();
        if (pokemonName) {
            pokemonInserted = true; // Almeno un Pokémon è stato inserito
            updateTypeScores(pokemonName);

            // Verifica le mosse per il Pokémon corrente
            for (let j = 1; j <= 4; j++) {
                let move = document.getElementById(`move-${i}-${j}`).value.trim(); // Corretto ID
                if (move) {
                    countSpecialMoves(move);
                }
            }
        }
    }

    // Se nessun Pokémon è stato inserito
    if (!pokemonInserted) {
        document.getElementById('result').innerText = "Non hai inserito nessun Pokémon.\nNon hai abbastanza mosse per togliere hazard.\nNon hai abbastanza mosse per switchare.";
        return;
    }

    // Verifica dei tipi con punteggi superiori a 2
    let weaknesses = [];
    for (let type in typeScores) {
        if (typeScores[type] > 1) {
            weaknesses.push(type);
        }
    }

    // Mostra il risultato delle debolezze
    let result = weaknesses.length > 0 ? `Soffri troppo questi tipi: ${weaknesses.join(', ')}` : "La tua squadra è ben bilanciata!";

    // Controllo per le mosse di rimozione hazard e switch
    if (hazardRemovalCount === 0) {
        result += "\nNon hai abbastanza mosse per togliere hazard.";
    }
    if (switchMoveCount === 0) {
        result += "\nNon hai abbastanza mosse per switchare.";
    }

    document.getElementById('result').innerText = result;
});
