// Definizione dei tipi Pokémon
const pokemonTypes = {
    scizor: ['steel', 'bug'],
    garchomp: ['dragon', 'ground'],
    gallade: ['psychic', 'fighting'],
    zapdos: ['electric', 'flying'],
    serperior: ['grass'],
    jellicent: ['water', 'ghost'],
    weezing: ['poison'],
    mamoswine: ['ice', 'ground'],
    dragonite: ['dragon', 'flying'],
    tyranitar: ['rock', 'dark'],
    rotomWash: ['electric', 'water'],
    gliscor: ['ground', 'flying'],
    starmie: ['water', 'psychic'],
    hydreigon: ['dark', 'dragon'],
    excadrill: ['ground', 'steel'],
    chansey: ['normal'],
    volcarona: ['bug', 'fire'],
    breloom: ['grass', 'fighting'],
    skarmory: ['steel', 'flying'],
    reuniclus: ['psychic'],
    pelipper: ['water', 'flying'],
    conkeldurr: ['fighting'],
    crawdaunt: ['water', 'dark'],
    metagross: ['steel', 'psychic'],
    gengar: ['ghost', 'poison'],
    amoonguss: ['grass', 'poison'],
    mienshao: ['fighting'],
    infernape: ['fire', 'fighting'],
    suicune: ['water'],
    chandelure: ['ghost', 'fire'],
    magnezone: ['electric', 'steel'],
    bronzong: ['steel', 'psychic'],
    darmanitan: ['fire'],
    empoleon: ['water', 'steel'],
    tentacruel: ['water', 'poison'],
    weavile: ['dark', 'ice'],
    ferrothorn: ['grass', 'steel'],
    kingdra: ['water', 'dragon'],
    porygon2: ['normal'],
    gyarados: ['water', 'flying'],
    gastrodon: ['water', 'ground'],
    espeon: ['psychic'],
    torkoal: ['fire'],
    porygonZ: ['normal'],
    lucario: ['fighting', 'steel'],
    sableye: ['dark', 'ghost'],
    kabutops: ['rock', 'water'],
    cofagrigus: ['ghost'],
    cloyster: ['water', 'ice'],
    blissey: ['normal'],
    venusaur: ['grass', 'poison'],
    ditto: ['normal'],
    raikou: ['electric'],
    entei: ['fire'],
    staraptor: ['normal', 'flying'],
    poliwrath: ['water', 'fighting'],
    feraligatr: ['water'],
    togekiss: ['fairy', 'flying'],
    salamence: ['dragon', 'flying'],
    mandibuzz: ['dark', 'flying'],
    jolteon: ['electric'],
    milotic: ['water']
};

// Mappa delle debolezze e resistenze per ogni tipo
const typeChart = {
    normal: { weakTo: ['fighting'], resistantTo: [], immuneTo: ['ghost'] },
    fire: { weakTo: ['water', 'ground', 'rock'], resistantTo: ['fire', 'grass', 'ice', 'bug', 'steel'] },
    water: { weakTo: ['electric', 'grass'], resistantTo: ['fire', 'water', 'ice', 'steel'] },
    electric: { weakTo: ['ground'], resistantTo: ['electric', 'flying', 'steel'] },
    grass: { weakTo: ['fire', 'ice', 'poison', 'flying', 'bug'], resistantTo: ['water', 'electric', 'grass', 'ground'] },
    ice: { weakTo: ['fire', 'fighting', 'rock', 'steel'], resistantTo: ['ice'] },
    fighting: { weakTo: ['flying', 'psychic'], resistantTo: ['bug', 'rock', 'dark'] },
    poison: { weakTo: ['ground', 'psychic'], resistantTo: ['grass', 'fighting', 'poison', 'bug'] },
    ground: { weakTo: ['water', 'grass', 'ice'], resistantTo: ['poison', 'rock'], immuneTo: ['electric'] },
    flying: { weakTo: ['electric', 'ice', 'rock'], resistantTo: ['grass', 'fighting', 'bug'], immuneTo: ['ground'] },
    psychic: { weakTo: ['bug', 'ghost', 'dark'], resistantTo: ['fighting', 'psychic'] },
    bug: { weakTo: ['fire', 'flying', 'rock'], resistantTo: ['grass', 'fighting', 'ground'] },
    rock: { weakTo: ['water', 'grass', 'fighting', 'ground', 'steel'], resistantTo: ['normal', 'fire', 'poison', 'flying'] },
    ghost: { weakTo: ['ghost', 'dark'], resistantTo: ['poison', 'bug'], immuneTo: ['normal', 'fighting'] },
    dragon: { weakTo: ['ice', 'dragon'], resistantTo: ['fire', 'water', 'electric', 'grass'] },
    dark: { weakTo: ['fighting', 'bug'], resistantTo: ['ghost', 'dark'], immuneTo: ['psychic'] },
    steel: { weakTo: ['fire', 'fighting', 'ground'], resistantTo: ['normal', 'grass', 'ice', 'flying', 'psychic', 'bug', 'rock', 'dragon', 'steel', 'ghost', 'dark'] },
};

// Definizione dei ruoli Pokémon predefiniti
const pokemonRoles = {
    "Scizor": ["wallbreaker", "pivot"],
    "Garchomp": ["sweeper", "hazardSetter"],
    "Gallade": ["sweeper", "wallbreaker"],
    "Zapdos": ["wall", "hazardRemover", "pivot", "rockWeak"],
    "Serperior": ["sweeper"],
    "Jellicent": ["wall"],
    "Weezing": ["wall"],
    "Mamoswine": ["wallbreaker", "hazardSetter"],
    "Dragonite": ["sweeper", "rockWeak"],
    "Tyranitar": ["wallbreaker", "hazardSetter"],
    "Rotom-Wash": ["hazardRemover", "pivot", "wall"],
    "Gliscor": ["wall", "hazardSetter", "pivot"],
    "Starmie": ["hazardRemover", "sweeper", "pivot"],
    "Hydreigon": ["wallbreaker", "rockWeak", "hazardSetter"],
    "Excadrill": ["hazardSetter", "hazardRemover", "wallbreaker"],
    "Chansey": ["wall", "hazardSetter"],
    "Volcarona": ["sweeper", "rockWeak"],
    "Breloom": ["sweeper", "wallbreaker", "stallbreaker"],
    "Skarmory": ["wall", "hazardSetter", "hazardRemover", "rockWeak"],
    "Reuniclus": ["stallbreaker"],
    "Pelipper": ["hazardSetter", "pivot"],
    "Conkeldurr": ["wallbreaker", "stallbreaker"],
    "Crawdaunt": ["wallbreaker"],
    "Metagross": ["hazardSetter", "wall", "hazardRemover"],
    "Gengar": ["stallbreaker", "sweeper", "trickOrTaunt"],
    "Amoonguss": ["wall", "pivot"],
    "Mienshao": ["wallbreaker", "pivot"],
    "Infernape": ["sweeper", "wallbreaker"],
    "Suicune": ["wall", "hazardRemover", "sweeper"],
    "Chandelure": ["wallbreaker"],
    "Magnezone": ["wallbreaker", "pivot"],
    "Bronzong": ["hazardSetter", "wall"],
    "Darmanitan": ["wallbreaker"],
    "Empoleon": ["hazardRemover", "hazardSetter", "wall"],
    "Tentacruel": ["hazardRemover", "wall", "hazardSetter"],
    "Weavile": ["sweeper", "wallbreaker", "trickOrTaunt"],
    "Ferrothorn": ["wall", "hazardSetter", "pivot"],
    "Kingdra": ["sweeper", "pivot", "hazardRemover"],
    "Porygon2": ["wall"],
    "Gyarados": ["sweeper", "pivot", "rockWeak"],
    "Gastrodon": ["wall", "hazardSetter"],
    "Espeon": ["sweeper", "hazardRemover", "pivot"],
    "Torkoal": ["hazardSetter", "hazardRemover", "wall"],
    "Porygon-Z": ["sweeper"],
    "Lucario": ["sweeper", "wallbreaker"],
    "Sableye": ["stallbreaker"],
    "Kabutops": ["sweeper", "hazardRemover"],
    "Cofagrigus": ["hazardRemover", "wall"],
    "Cloyster": ["sweeper", "rockWeak"],
    "Blissey": ["wall"],
    "Venusaur": ["sweeper", "wall", "hazardRemover"],
    "Ditto": ["revengeKiller"],
    "Raikou": ["pivot", "hazardRemover"],
    "Entei": ["sweeper", "hazardRemover"],
    "Staraptor": ["wallbreaker", "pivot", "rockWeak"],
    "Poliwrath": ["wall", "hazardSetter", "sweeper"],
    "Feraligatr": ["sweeper", "wallbreaker"],
    "Togekiss": ["sweeper", "hazardRemover", "stallbreaker", "rockWeak"],
    "Salamence": ["sweeper", "rockWeak"],
    "Mandibuzz": ["wall", "hazardRemover", "pivot"],
    "Jolteon": ["pivot", "sweeper"],
    "Milotic": ["wall"]
};

// Funzione per assegnare i tag ai Pokémon
function assignTags(pokemon) {
    const hazardMoves = ['stealthrock', 'spikes', 'toxicspikes'];
    const hazardRemovalMoves = ['rapidspin', 'defog'];

    // Assegna i ruoli predefiniti al Pokémon basandosi sul nome
    const pokemonRole = pokemonRoles[pokemon.name.toLowerCase()];
    if (pokemonRole) {
        pokemon.tags.push(...pokemonRole);
    }

    // Aggiungere tag in base alle mosse
    if (pokemon.moves.some(move => hazardMoves.includes(move.toLowerCase()))) {
        pokemon.tags.push('HazardSetter');
    }
    if (pokemon.moves.some(move => hazardRemovalMoves.includes(move.toLowerCase()))) {
        pokemon.tags.push('HazardRemoval');
    }
}

// Funzione per calcolare debolezze e resistenze del team
function calculateWeaknessesResistances(team) {
    const weaknesses = {
        normal: 0, fire: 0, water: 0, electric: 0, grass: 0, ice: 0, fighting: 0, poison: 0,
        ground: 0, flying: 0, psychic: 0, bug: 0, rock: 0, ghost: 0, dragon: 0, dark: 0, steel: 0
    };

    team.forEach(pokemon => {
        const types = pokemonTypes[pokemon.name.toLowerCase()];
        if (types) {
            types.forEach(type => {
                // Aggiorna le debolezze per i tipi a cui questo Pokémon è debole
                typeChart[type].weakTo.forEach(weakType => weaknesses[weakType]++);
                // Aggiorna le resistenze per i tipi a cui questo Pokémon è resistente
                typeChart[type].resistantTo.forEach(resistType => weaknesses[resistType]--);
            });
        }
    });

    return weaknesses;
}

// Funzione per suggerire Pokémon che coprono le debolezze del team basata su resistenze
function suggestPokemonByResistances(weaknesses, requiredTags) {
    const pokemonSuggestions = [];
    
    // Scorri ogni Pokémon disponibile
    Object.keys(pokemonTypes).forEach(pokemonName => {
        const types = pokemonTypes[pokemonName.toLowerCase()];
        let resistances = [];

        // Ottieni le resistenze del Pokémon
        types.forEach(type => {
            resistances.push(...typeChart[type].resistantTo);
        });

        // Controlla se questo Pokémon ha una resistenza ai tipi in cui il team è debole
        const coversWeaknesses = Object.keys(weaknesses).some(weaknessType => {
            return weaknesses[weaknessType] > 0 && resistances.includes(weaknessType);
        });

        // Se copre le debolezze, controlla se ha anche i ruoli richiesti dal modello di team
        if (coversWeaknesses) {
            const pokemonTags = pokemonRoles[pokemonName.toLowerCase()];
            if (requiredTags.every(tag => pokemonTags.includes(tag))) {
                pokemonSuggestions.push(pokemonName);
            }
        }
    });

    return pokemonSuggestions;
}

// Funzione per valutare il modello del team in base ai tag assegnati
function evaluateTeamModel(team) {
    const counts = {
        sweeper: 0,
        wallbreaker: 0,
        stallbreaker: 0,
        pivot: 0,
        wall: 0,
        hazardSetter: 0,
        hazardRemoval: 0
    };

    // Contare i ruoli basati sui tag assegnati
    team.forEach(pokemon => {
        if (pokemon.tags.includes(' Sweeper')) counts.sweeper++;
        if (pokemon.tags.includes('WallBreaker')) counts.wallbreaker++;
        if (pokemon.tags.includes('StallBreaker')) counts.stallbreaker++;
        if (pokemon.tags.includes('Pivot')) counts.pivot++;
        if (pokemon.tags.includes('Wall')) counts.wall++;
        if (pokemon.tags.includes('HazardSetter')) counts.hazardSetter++;
        if (pokemon.tags.includes('HazardRemoval')) counts.hazardRemoval++;
    });

    // Controllare se il team corrisponde ai vari modelli
    const isBalanceTeam =
        (counts.sweeper <= 1) &&
        (counts.wallbreaker >= 1 && counts.wallbreaker <= 2) &&
        (counts.stallbreaker === 1) &&
        (counts.pivot >= 2 && counts.pivot <= 3) &&
        (counts.hazardSetter >= 1) &&
        (counts.hazardRemoval >= 1);

    const isHyperOffenseTeam =
        (counts.sweeper >= 2 && counts.sweeper <= 4) &&
        (counts.wallbreaker >= 1 && counts.wallbreaker <= 3) &&
        (counts.hazardSetter >= 1) &&
        (counts.hazardRemoval >= 1 && team.some(pokemon => pokemon.tags.includes('RockWeak')));

    const isBulkyOffenseTeam =
        (counts.sweeper === 1) &&
        (counts.wallbreaker >= 2 && counts.wallbreaker <= 3) &&
        (counts.stallbreaker === 1) &&
        (counts.hazardSetter >= 1) &&
        (counts.hazardRemoval <= 1);

    const isStallTeam =
        (counts.wall >= 5) &&
        (counts.stallbreaker === 1) &&
        (counts.hazardSetter >= 1) &&
        (counts.hazardRemoval >= 1 && counts.hazardRemoval <= 2);

    const isSemiStallTeam =
        (counts.wall >= 4 && counts.wall <= 5) &&
        (counts.stallbreaker === 1) &&
        (counts.sweeper <= 1) &&
        (counts.wallbreaker <= 1) &&
        (counts.hazardSetter >= 1);

    // Restituisci il modello e i tag richiesti per suggerimenti Pokémon
    if (isBalanceTeam) return { model: 'Balance Team', requiredTags: ['Pivot', 'HazardSetter', 'HazardRemoval'] };
    if (isHyperOffenseTeam) return { model: 'Hyper Offense Team', requiredTags: ['Sweeper', 'WallBreaker', 'HazardSetter'] };
    if (isBulkyOffenseTeam) return { model: 'Bulky Offense Team', requiredTags: ['WallBreaker', 'StallBreaker', 'HazardSetter'] };
    if (isStallTeam) return { model: 'Stall Team', requiredTags: ['Wall', 'HazardSetter', 'HazardRemoval'] };
    if (isSemiStallTeam) return { model: 'Semi-Stall Team', requiredTags: ['Wall', 'StallBreaker', 'HazardSetter'] };

    return null; // Nessun modello specifico rilevato
}

// Funzione per valutare l'intero team
function evaluateTeam(team) {
    team.forEach(pokemon => assignTags(pokemon)); // Assegna i tag ai Pokémon
    const weaknesses = calculateWeaknessesResistances(team); // Calcola le debolezze
    const { model, requiredTags } = evaluateTeamModel(team); // Valuta il modello del team

    // Suggerisci Pokémon che coprono le debolezze basate su resistenze e che soddisfano i tag del modello
    const suggestedPokemon = suggestPokemonByResistances(weaknesses, requiredTags);

    return { weaknesses, suggestedPokemon, model };
}

// Aggiungi evento di click al bottone "Calcola"
document.getElementById('calculate').addEventListener('click', () => {
    const team = [];
    const teamSize = 6;

    // Ottieni i Pokémon e le mosse inserite
    for (let i = 1; i <= teamSize; i++) {
        const pokemon = document.getElementById(`pokemon-${i}`)?.value || '';
        const moves = [
            document.getElementById(`move-${i}-1`)?.value || '',
            document.getElementById(`move-${i}-2`)?.value || '',
            document.getElementById(`move-${i}-3`)?.value || '',
            document.getElementById(`move-${i}-4`)?.value || ''
        ];

        if (pokemon) {
            team.push({ name: pokemon, moves, tags: [] });
        }
    }

    // Verifica se è stato inserito almeno un Pokémon
    if (team.length === 0) {
        document.getElementById('result').innerText = "Inserisci almeno un Pokémon.";
        return;
    }

    // Valuta il team
    const result = evaluateTeam(team);

    // Visualizza i risultati
    document.getElementById('result').innerHTML = `
        Debolezze del Team: ${JSON.stringify(result.weaknesses)}<br>
        Pokémon Suggeriti: ${result.suggestedPokemon.length > 0 ? result.suggestedPokemon.join(', ') : "Nessun Pokémon suggerito"}<br>
        Modello del Team: ${result.model ? result.model.model : "Nessun modello specifico rilevato"}
    `;
});