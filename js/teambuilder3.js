// Mappa delle debolezze e resistenze dei Pokémon rispetto ai vari tipi
const typeChart = {
    "Scizor": { "superweak": ["fire"], "weaknesses": [], "resistances": ["normal", "grass", "ice", "bug", "steel", "psychic", "dragon"], "immunities": [] },
    "Garchomp": { "superweak": ["ice"], "weaknesses": ["dragon"], "resistances": ["fire", "poison", "rock"], "immunities": ["electric"] },
    "Gallade": { "superweak": [], "weaknesses": ["flying", "ghost"], "resistances": ["fighting", "rock"], "immunities": [] },
    "Zapdos": { "superweak": [], "weaknesses": ["rock", "ice"], "resistances": ["fighting", "flying", "bug", "steel", "grass"], "immunities": ["ground"] },
    "Serperior": { "superweak": [], "weaknesses": ["fire", "ice", "flying", "bug"], "resistances": ["water", "grass", "electric", "ground"], "immunities": [] },
    "Jellicent": { "superweak": [], "weaknesses": ["ghost", "dark", "grass", "electric"], "resistances": ["water", "ice", "fire", "poison", "steel", "bug"], "immunities": ["normal", "fighting"] },
    "Weezing": { "superweak": [], "weaknesses": ["psychic", "ground"], "resistances": ["fighting", "poison", "bug", "grass"], "immunities": [] },
    "Mamoswine": { "superweak": [], "weaknesses": ["fire", "fighting", "water", "grass", "steel"], "resistances": ["poison"], "immunities": ["electric"] },
    "Dragonite": { "superweak": ["ice"], "weaknesses": ["dragon", "rock"], "resistances": ["fire", "water", "grass", "fighting", "bug"], "immunities": ["ground"] },
    "Tyranitar": { "superweak": [], "weaknesses": ["fighting", "ground", "bug", "steel", "water", "grass"], "resistances": ["normal", "flying", "poison", "ghost", "fire", "dark"], "immunities": ["psychic"] },
    "Rotom-Wash": { "superweak": [], "weaknesses": ["grass"], "resistances": ["flying", "steel", "fire", "water", "ice"], "immunities": ["ground"] },
    "Gliscor": { "superweak": ["ice"], "weaknesses": ["water"], "resistances": ["fighting", "poison", "bug"], "immunities": ["electric", "ground"] },
    "Starmie": { "superweak": [], "weaknesses": ["electric", "grass", "bug", "ghost", "dark"], "resistances": ["fire", "water", "ice", "steel"], "immunities": [] },
    "Hydreigon": { "superweak": [], "weaknesses": ["bug", "fighting", "ice", "dragon"], "resistances": ["fire", "water", "grass", "electric", "psychic", "ghost", "dark"], "immunities": ["ground"] },
    "Excadrill": { "superweak": [], "weaknesses": ["fire", "water", "fighting", "ground"], "resistances": ["normal", "flying", "rock", "bug", "steel", "psychic", "poison"], "immunities": ["electric"] },
    "Chansey": { "superweak": [], "weaknesses": ["fighting"], "resistances": [], "immunities": ["ghost"] },
    "Volcarona": { "superweak": ["rock"], "weaknesses": ["water", "flying"], "resistances": ["fighting", "bug", "steel", "grass", "ice"], "immunities": [] },
    "Breloom": { "superweak": [], "weaknesses": ["fire", "ice", "flying", "psychic"], "resistances": ["water", "grass", "electric", "ground", "rock"], "immunities": [] },
    "Skarmory": { "super weak": [], "weaknesses": ["fire", "electric"], "resistances": ["normal", "flying", "bug", "steel", "grass", "psychic", "dragon", "rock"], "immunities": ["poison", "ground"] },
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
    "Chandelure": { "superweak": [], "weaknesses": ["water", "rock", "ghost", "dark"], "resistances": ["fire", "grass", "ice", "bug", "steel", "poison"], "immunities": ["fighting", "normal"] },
    "Magnezone": { "superweak": [], "weaknesses": ["fire", "fighting", "ground"], "resistances": ["normal", "flying", "rock", "bug", "steel", "psychic", "ice", "dragon", "grass", "electric"], "immunities": ["poison"] },
    "Bronzong": { "superweak": [], "weaknesses": ["fire", "ghost", "dark"], "resistances": ["normal", "flying", "rock", "bug", "steel", "psychic", "grass", "ice"], "immunities": ["poison"], "conditional_immunities": { "ground": "if Levitate" } },
    "Darmanitan": { "superweak": [], "weaknesses": ["water", "ground", "rock"], "resistances": ["bug", "steel", "fire", "grass", "ice"], "immunities": [] },
    "Empoleon": { "superweak": [], "weaknesses": ["electric", "ground", "fighting"], "resistances": ["normal", "flying", "poison", "bug", "steel", "ice", "dragon", "water"], "immunities": [] },
    "Tentacruel": { "superweak": [], "weaknesses": ["electric", "psychic", "ground"], "resistances": ["water", "ice", "fire", "fighting", "bug", "steel", "poison"], "immunities": [] },
    "Weavile": { "superweak": ["fighting"], "weaknesses": ["fire", "bug", "steel", " rock"], "resistances": ["ghost", "ice", "dark"], "immunities": ["psychic"] },
    "Ferrothorn": { "superweak": ["fire"], "weaknesses": ["fighting"], "resistances": ["normal", "water", "grass", "electric", "rock", "steel", "psychic", "dragon"], "immunities": ["poison"] },
    "Kingdra": { "superweak": [], "weaknesses": ["dragon"], "resistances": ["water", "fire", "steel"], "immunities": [] },
    "Porygon2": { "superweak": [], "weaknesses": ["fighting"], "resistances": [], "immunities": ["ghost"] },
    "Gyarados": { "superweak": ["electric"], "weaknesses": ["rock"], "resistances": ["bug", "fire", "water", "steel", "fighting"], "immunities": ["ground"] },
    "Gastrodon": { "superweak": ["grass"], "weaknesses": [], "resistances": ["water", "ice", "steel", "poison"], "immunities": ["electric"] },
    "Espeon": { "superweak": [], "weaknesses": ["bug", "dark"], "resistances": ["fighting", "psychic"], "immunities": [] },
    "Torkoal": { "superweak": [], "weaknesses": ["water", "rock"], "resistances": ["normal", "fire", "poison", "bug", "steel"], "immunities": [] },
    "Porygon-z": { "superweak": [], "weaknesses": ["fighting", "bug"], "resistances": ["normal", "grass", "ice", "electric", "psychic"], "immunities": ["ghost"] },
    "Lucario": { "superweak": [], "weaknesses": ["fighting", "flying"], "resistances": ["bug", "steel", "psychic"], "immunities": [] },
    "Sableye": { "superweak": [], "weaknesses": [], "resistances": ["normal", "fire", "water", "electric", "grass", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dark", "steel", "dragon"], "immunities": [] },
    "Kabutops": { "superweak": [], "weaknesses": ["electric", "rock"], "resistances": ["normal", "water", "ice", "poison", "bug"], "immunities": [] },
    "Cofagrigus": { "superweak": [], "weaknesses": ["ghost", "dark"], "resistances": ["normal", "grass", "poison", "bug"], "immunities": ["fighting", "ground"] },
    "Cloyster": { "superweak": [], "weaknesses": ["electric", "rock"], "resistances": ["normal", "water", "ice", "poison", "bug"], "immunities": [] },
    "Blissey": { "superweak": [], "weaknesses": ["fighting"], "resistances": ["normal", "grass", "ice"], "immunities": ["ghost"] },
    "Venusaur": { "superweak": [], "weaknesses": ["fire", "flying", "psychic", "ice"], "resistances": ["water", "electric", "grass", "ground"], "immunities": [] },
    "Ditto": { "superweak": [], "weaknesses": [], "resistances": [], "immunities": [] },
    "Raikou": { "superweak": [], "weaknesses": ["ground"], "resistances": ["normal", "flying", "bug", "steel", "electric"], "immunities": [] },
    "Entei": { "superweak": [], "weaknesses": ["water", "rock"], "resistances": ["normal", "fire", "poison", "bug", "steel"], "immunities": [] },
    "Staraptor": { "superweak": [], "weaknesses": ["electric", "rock"], "resistances": ["normal", "flying", "bug", "steel"], "immunities": [] },
    "Poliwrath": { "superweak": [], "weaknesses": ["electric", "flying"], "resistances": ["normal", "water", "ice", "poison", "bug"], "immunities": [] },
    "Feraligatr": { "superweak ": [], "weaknesses": ["electric"], "resistances": ["normal", "water", "ice", "poison", "bug"], "immunities": [] },
    "Togekiss": { "superweak": [], "weaknesses": ["electric", "poison"], "resistances": ["normal", "flying", "bug", "steel"], "immunities": [] },
    "Salamence": { "superweak": [], "weaknesses": ["ice", "rock"], "resistances": ["normal", "fire", "poison", "bug", "steel", "dragon"], "immunities": [] },
    "Mandibuzz": { "superweak": [], "weaknesses": ["electric", "rock"], "resistances": ["normal", "flying", "bug", "steel", "dark"], "immunities": [] },
    "Jolteon": { "superweak": [], "weaknesses": ["ground"], "resistances": ["normal", "flying", "bug", "steel", "electric"], "immunities": [] },
    "Milotic": { "superweak": [], "weaknesses": ["electric"], "resistances": ["normal", "water", "ice", "poison", "bug"], "immunities": [] }
};
const types = ["normal", "fire", "water", "electric", "grass", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dragon", "dark", "steel"];
const hazardRemovalMoves = ["defog", "rapid spin"];
const switchMoves = ["volt switch", "u-turn", "teleport", "baton pass"];

document.getElementById('calculate').addEventListener('click', function() {
    const team = [];
    
    for (let i = 1; i <= 6; i++) {
        let pokemon = document.getElementById(`pokemon-${i}`).value;
        let moves = [];
        
        for (let j = 1; j <= 4; j++) {
            let move = document.getElementById(`move-${i}-${j}`).value;
            if (move) {
                moves.push(move);
            }
        }
        
        // Se il nome del Pokémon non è vuoto, aggiungi al team
        if (pokemon) {
            team.push({ name: pokemon, moves: moves });
        }
    }

    // Identifica il tipo di team creato dall'utente
    let teamType = identifyTeamType(team);

    // Calcola i suggerimenti e le richieste specifiche per il team
    let result = calculateTeamResult(team, teamType);

    // Mostra il risultato nel div #result
    document.getElementById('result').innerText = result;
});

// Funzione per identificare il tipo di team in base ai Pokémon inseriti
function identifyTeamType(team) {
    let sweeperCount = 0;
    let wallbreakerCount = 0;
    let stallbreakerCount = 0;
    let wallCount = 0;
    let pivotCount = 0;
    let hazardRemovalCount = 0;
    let hazardSetupCount = 0;

    team.forEach(pokemon => {
        pokemon.moves.forEach(move => {
            // Conta le mosse chiave
            if (['Stealth Rock', 'Spikes', 'Toxic Spikes'].includes(move)) {
                hazardSetupCount++;
            }
            if (['Rapid Spin', 'Defog'].includes(move)) {
                hazardRemovalCount++;
            }
            if (['Trick', 'Taunt'].includes(move)) {
                stallbreakerCount++;
            }
        });

        // Aggiungi logica per classificare i ruoli dei Pokémon basata su un dataset (ipotizzato)
        if (isSweeper(pokemon.name)) sweeperCount++;
        if (isWallbreaker(pokemon.name)) wallbreakerCount++;
        if (isPivotOrWall(pokemon.name)) wallCount++;
    });

    // Logica per identificare il tipo di team
    if (sweeperCount >= 2 && wallbreakerCount >= 1) {
        if (team.some(p => isRockWeak(p.name))) {
            return 'Hyper Offense (Rock Weak)';
        }
        return 'Hyper Offense';
    } else if (wallCount >= 5) {
        return 'Stall';
    } else if (wallCount >= 4 && stallbreakerCount >= 1) {
        return 'Semi-Stall';
    } else if (sweeperCount <= 1 && wallbreakerCount >= 2) {
        return 'Bulky Offense';
    } else if (sweeperCount <= 1 && wallbreakerCount <= 2 && stallbreakerCount >= 1 && wallCount >= 2) {
        return 'Balanced';
    } else {
        return 'Unidentified';
    }
}

// Funzione che calcola suggerimenti o richieste basate sul tipo di team
function calculateTeamResult(team, teamType) {
    let result = `Team identified as: ${teamType}\n`;

    switch (teamType) {
        case 'Balanced':
            if (!team.some(pokemon => hasHazardSetup(pokemon))) {
                result += "Suggest: Add a Pokémon with Stealth Rock, Spikes, or Toxic Spikes.\n";
            }
            if (!team.some(pokemon => hasHazardRemoval(pokemon))) {
                result += "Suggest: Add a Pokémon with Hazard Removal moves (e.g., Rapid Spin, Defog).\n";
            }
            break;

        case 'Hyper Offense':
            if (!team.some(pokemon => hasTrickOrTaunt(pokemon))) {
                result += "Suggest: Add a Pokémon with Trick or Taunt.\n";
            }
            if (!team.some(pokemon => hasHazardSetup(pokemon))) {
                result += "Suggest: Add a Pokémon with Stealth Rock, Spikes, or Toxic Spikes.\n";
            }
            if (teamType === 'Hyper Offense (Rock Weak)' && !team.some(pokemon => hasHazardRemoval(pokemon))) {
                result += "Suggest: Add a Pokémon with Hazard Removal due to Rock Weakness.\n";
            }
            break;

        case 'Bulky Offense':
            if (!team.some(pokemon => hasHazardSetup(pokemon))) {
                result += "Suggest: Add a Pokémon with Stealth Rock, Spikes, or Toxic Spikes.\n";
            }
            if (team.filter(p => hasHazardRemoval(p)).length > 1) {
                result += "Note: Bulky Offense teams usually only need 0-1 Pokémon with Hazard Removal.\n";
            }
            break;

        case 'Stall':
            if (!team.some(pokemon => hasHazardSetup(pokemon))) {
                result += "Suggest: Add a Pokémon with Stealth Rock, Spikes, or Toxic Spikes.\n";
            }
            if (team.filter(p => hasHazardRemoval(p)).length < 1) {
                result += "Suggest: Add 1-2 Pokémon with Hazard Removal moves.\n";
            }
            break;

        case 'Semi-Stall':
            if (!team.some(pokemon => hasHazardSetup(pokemon))) {
                result += "Suggest: Add a Pokémon with Stealth Rock, Spikes, or Toxic Spikes.\n";
            }
            break;

        default:
            result += "Team type not identified. Please check your Pokémon selection.\n";
            break;
    }

    return result;
}

// Funzioni di supporto per identificare i ruoli dei Pokémon e le loro mosse

function isSweeper(pokemonName) {
    // Logica ipotetica per identificare un Sweeper
    return ['Garchomp', 'Lucario', 'Dragonite'].includes(pokemonName);
}

function isWallbreaker(pokemonName) {
    // Logica ipotetica per identificare un Wallbreaker
    return ['Conkeldurr', 'Machamp', 'Mamoswine'].includes(pokemonName);
}

function isPivotOrWall(pokemonName) {
    // Logica ipotetica per identificare un Pivot o Wall
    return ['Blissey', 'Skarmory', 'Rotom-Wash'].includes(pokemonName);
}

function isRockWeak(pokemonName) {
    // Logica ipotetica per identificare se un Pokémon è debole alle rocce
    return ['Charizard', 'Talonflame', 'Volcarona'].includes(pokemonName);
}

function hasHazardSetup(pokemon) {
    // Controlla se un Pokémon ha mosse per impostare le trappole
    return pokemon.moves.some(move => ['Stealth Rock', 'Spikes', 'Toxic Spikes'].includes(move));
}

function hasHazardRemoval(pokemon) {
    // Controlla se un Pokémon ha mosse per rimuovere le trappole
    return pokemon.moves.some(move => ['Rapid Spin', 'Defog'].includes(move));
}

function hasTrickOrTaunt(pokemon) {
    // Controlla se un Pokémon ha Trick o Taunt
    return pokemon.moves.some(move => ['Trick', 'Taunt'].includes(move));
}
