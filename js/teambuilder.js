// Mappa delle debolezze e resistenze dei Pokémon rispetto ai vari tipi
const typeChart = {
    "Scizor": { "weaknesses": ["fire"], "resistances": ["normal", "grass", "ice", "bug", "steel", "psychic", "dragon"], "immunities": [] },
    "Garchomp": { "weaknesses": ["ice", "dragon"], "resistances": ["fire", "poison", "rock"], "immunities": ["electric"] },
    "Gallade": { "weaknesses": ["flying", "ghost"], "resistances": ["fighting", "rock"], "immunities": [] },
    "Zapdos": { "weaknesses": ["rock", "ice"], "resistances": ["fighting", "flying", "bug", "steel", "grass"], "immunities": ["ground"] },
    "Serperior": { "weaknesses": ["fire", "ice", "flying", "bug"], "resistances": ["water", "grass", "electric", "ground"], "immunities": [] },
    "Jellicent": { "weaknesses": ["ghost", "dark", "grass", "electric"], "resistances": ["water", "ice", "fire", "poison", "steel", "bug"], "immunities": ["normal", "fighting"] },
    "Weezing": { "weaknesses": ["psychic", "ground"], "resistances": ["fighting", "poison", "bug", "grass"], "immunities": [] },
    "Mamoswine": { "weaknesses": ["fire", "fighting", "water", "grass", "steel"], "resistances": ["poison"], "immunities": ["electric"] },
    "Dragonite": { "weaknesses": ["ice", "dragon", "rock"], "resistances": ["fire", "water", "grass", "fighting", "bug"], "immunities": ["ground"] },
    "Tyranitar": { "weaknesses": ["fighting", "ground", "bug", "steel", "water", "grass"], "resistances": ["normal", "flying", "poison", "ghost", "fire", "dark"], "immunities": ["psychic"] },
    "Rotom-Wash": { "weaknesses": ["grass"], "resistances": ["flying", "steel", "fire", "water", "ice"], "immunities": ["ground"] },
    "Gliscor": { "weaknesses": ["water", "ice"], "resistances": ["fighting", "poison", "bug"], "immunities": ["electric", "ground"] },
    "Starmie": { "weaknesses": ["electric", "grass", "bug", "ghost", "dark"], "resistances": ["fire", "water", "ice", "steel"], "immunities": [] },
    "Hydreigon": { "weaknesses": ["bug", "fighting", "ice", "dragon"], "resistances": ["fire", "water", "grass", "electric", "psychic", "ghost", "dark"], "immunities": ["ground"] },
    "Excadrill": { "weaknesses": ["fire", "water", "fighting", "ground"], "resistances": ["normal", "flying", "rock", "bug", "steel", "psychic", "poison"], "immunities": ["electric"] },
    "Chansey": { "weaknesses": ["fighting"], "resistances": [], "immunities": ["ghost"] },
    "Volcarona": { "weaknesses": ["water", "rock", "flying"], "resistances": ["fighting", "bug", "steel", "grass", "ice"], "immunities": [] },
    "Breloom": { "weaknesses": ["fire", "ice", "flying", "psychic"], "resistances": ["water", "grass", "electric", "ground", "rock"], "immunities": [] },
    "Skarmory": { "weaknesses": ["fire", "electric"], "resistances": ["normal", "flying", "bug", "steel", "grass", "psychic", "dragon", "rock"], "immunities": ["poison", "ground"] },
    "Reuniclus": { "weaknesses": ["bug", "ghost", "dark"], "resistances": ["fighting", "psychic"], "immunities": [] },
    "Pelipper": { "weaknesses": ["electric", "rock"], "resistances": ["fighting", "bug", "steel", "fire", "water", "ice"], "immunities": ["ground"] },
    "Conkeldurr": { "weaknesses": ["flying", "psychic"], "resistances": ["bug", "rock", "dark"], "immunities": [] },
    "Crawdaunt": { "weaknesses": ["electric", "fighting", "grass", "bug"], "resistances": ["ghost", "steel", "water", "ice", "dark"], "immunities": ["psychic"] },
    "Metagross": { "weaknesses": ["fire", "ground", "ghost", "dark"], "resistances": ["normal", "flying", "rock", "steel", "psychic", "ice", "grass", "dragon"], "immunities": ["poison"] },
    "Gengar": { "weaknesses": ["ghost", "psychic", "dark"], "resistances": ["grass", "bug", "poison"], "immunities": ["normal", "fighting"] },
    "Amoonguss": { "weaknesses": ["fire", "ice", "flying", "bug", "psychic"], "resistances": ["water", "electric", "grass", "ground"], "immunities": [] },
    "Mienshao": { "weaknesses": ["flying", "psychic"], "resistances": ["rock", "dark", "bug"], "immunities": [] },
    "Infernape": { "weaknesses": ["water", "ground", "flying", "psychic"], "resistances": ["bug", "steel", "fire", "grass", "ice", "dark"], "immunities": [] },
    "Suicune": { "weaknesses": ["electric", "grass"], "resistances": ["fire", "water", "ice", "steel"], "immunities": [] },
    "Chandelure": { "weaknesses": ["water", "rock", "ghost", "dark"], "resistances": ["normal", "fire", "grass", "ice", "bug", "steel", "poison"], "immunities": ["fighting"] },
    "Magnezone": { "weaknesses": ["fire", "fighting", "ground"], "resistances": ["normal", "flying", "rock", "bug", "steel", "psychic", "ice", "dragon", "grass", "electric"], "immunities": ["poison"] },
    "Bronzong": { "weaknesses": ["fire", "ghost", "dark"], "resistances": ["normal", "flying", "rock", "bug", "steel", "psychic", "grass", "ice"], "immunities": ["poison"], "conditional_immunities": { "ground": "if Levitate" } },
    "Darmanitan": { "weaknesses": ["water", "ground", "rock"], "resistances": ["bug", "steel", "fire", "grass", "ice"], "immunities": [] },
    "Empoleon": { "weaknesses": ["electric", "ground", "fighting"], "resistances": ["normal", "flying", "poison", "bug", "steel", "ice", "dragon", "water"], "immunities": [] },
    "Tentacruel": { "weaknesses": ["electric", "psychic", "ground"], "resistances": ["water", "ice", "fire", "fighting", "bug", "steel", "poison"], "immunities": [] },
    "Weavile": { "weaknesses": ["fire", "fighting", "bug", "steel", "rock"], "resistances": ["ghost", "ice", "dark"], "immunities": ["psychic"] },
    "Ferrothorn": { "weaknesses": ["fire", "fighting"], "resistances": ["normal", "water", "grass", "electric", "rock", "steel", "psychic", "dragon"], "immunities": ["poison"] },
    "Kingdra": { "weaknesses": ["dragon"], "resistances": ["water", "fire", "steel"], "immunities": [] },
    "Porygon2": { "weaknesses": ["fighting"], "resistances": [], "immunities": ["ghost"] },
    "Gyarados": { "weaknesses": ["electric", "rock"], "resistances": ["bug", "fire", "water", "steel", "fighting"], "immunities": ["ground"] },
};
// Lista dei tipi di Pokémon
const types = ["normal", "fire", "water", "electric", "grass", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dragon", "dark", "steel"];

// Lista delle mosse per rimuovere hazard
const hazardRemovalMoves = ["defog", "rapid spin"];

// Lista delle mosse per cambiare Pokémon
const switchMoves = ["volt switch", "u-turn", "teleport", "baton pass"];

document.getElementById('calculate').addEventListener('click', function() {
    // Inizializzazione delle variabili per ogni tipo
    let typeScores = {};
    types.forEach(type => typeScores[type] = 0);

    // Variabili per contare le mosse speciali
    let hazardRemovalCount = 0;
    let switchMoveCount = 0;

    // Flag per verificare se è stato inserito almeno un Pokémon
    let pokemonInserted = false;

    // Funzione per aggiornare i punteggi dei tipi
    function updateTypeScores(pokemonName) {
        let pokemon = typeChart[pokemonName];
        if (pokemon) {
            pokemon.weaknesses.forEach(type => typeScores[type] += 1);
            pokemon.resistances.forEach(type => typeScores[type] -= 1);
        }
    }

    // Funzione per contare le mosse speciali (rimozione hazard e switch)
    function countSpecialMoves(move) {
        // Controlla se la mossa è per rimuovere le hazard
        if (hazardRemovalMoves.includes(move.toLowerCase())) {
            hazardRemovalCount++;
        }

        // Controlla se la mossa è per cambiare Pokémon
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
                let move = document.querySelector(`#pokemon-${i} ~ input:nth-of-type(${j + 1})`).value.trim();
                if (move) {
                    countSpecialMoves(move);
                }
            }
        }
    }

    // Se nessun Pokémon è stato inserito, mostra i messaggi di default e interrompe l'esecuzione
    if (!pokemonInserted) {
        document.getElementById('result').innerText = "Non hai inserito nessun Pokémon.\nNon hai abbastanza mosse per togliere hazard.\nNon hai abbastanza mosse per switchare.";
        return;
    }

    // Verifica dei tipi con punteggi superiori a 2
    let weaknesses = [];
    for (let type in typeScores) {
        if (typeScores[type] > 2) {
            weaknesses.push(type);
        }
    }

    // Mostra il risultato delle debolezze
    let result = weaknesses.length > 0 ? `Soffri troppo questi tipi: ${weaknesses.join(', ')}` : "La tua squadra è ben bilanciata!";

    // Aggiunta del controllo per le mosse di rimozione hazard e switch
    if (hazardRemovalCount === 0) {
        result += "\nNon hai abbastanza mosse per togliere hazard.";
    }
    if (switchMoveCount === 0) {
        result += "\nNon hai abbastanza mosse per switchare.";
    }

    document.getElementById('result').innerText = result;
});
