// Definizione dei tipi Pokémon
const pokemonTypes = {
    scizor: ['steel', 'bug'],
    garchomp: ['dragon', 'ground'],
    gallade: ['psychic', 'fighting'],
    zapdos: ['electric', 'flying'],
    serperior: ['grass'],
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
// Funzione per calcolare debolezze e resistenze del team, gestendo correttamente le immunità
function calculateWeaknessesResistances(team) {
    const weaknesses = {
        normal: 0, fire: 0, water: 0, electric: 0, grass: 0, ice: 0, fighting: 0, poison: 0,
        ground: 0, flying: 0, psychic: 0, bug: 0, rock: 0, ghost: 0, dragon: 0, dark: 0, steel: 0
    };

    team.forEach(pokemon => {
        const types = pokemonTypes[pokemon.name.toLowerCase()];
        if (types) {
            const tempWeaknesses = { ...weaknesses };

            types.forEach(type => {
                // Controllo immunità prima
                typeChart[type].immuneTo.forEach(immuneType => {
                    // Se c'è un'immunità, impostiamo direttamente a -2 per quell'elemento
                    tempWeaknesses[immuneType] = -2;
                });

                // Aggiungi alle debolezze se non è immune
                typeChart[type].weakTo.forEach(weakType => {
                    if (tempWeaknesses[weakType] !== -2) {
                        tempWeaknesses[weakType]++;
                    }
                });

                // Sottrai dalle resistenze se non è immune
                typeChart[type].resistantTo.forEach(resistType => {
                    if (tempWeaknesses[resistType] !== -2) {
                        tempWeaknesses[resistType]--;
                    }
                });
            });

            // Aggiorna il conteggio delle debolezze/resistenze globali
            Object.keys(weaknesses).forEach(type => {
                weaknesses[type] += tempWeaknesses[type];
            });
        }
    });

    // Trova le peggiori debolezze, cioè quelle che hanno un valore pari o superiore a 2
    const worstWeaknesses = Object.keys(weaknesses).filter(type => weaknesses[type] >= 2);

    return { weaknesses, worstWeaknesses };
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
        if (pokemon.tags.includes('sweeper')) counts.sweeper++;
        if (pokemon.tags.includes('wallbreaker')) counts.wallbreaker++;
        if (pokemon.tags.includes('stallbreaker')) counts.stallbreaker++;
        if (pokemon.tags.includes('pivot')) counts.pivot++;
        if (pokemon.tags.includes('wall')) counts.wall++;
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
        (counts.hazardRemoval >= 1 && team.some(pokemon => pokemon.tags.includes('rockWeak')));

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
    if (isBalanceTeam) return { model: 'Balance Team', requiredTags: ['pivot', 'HazardSetter', 'HazardRemoval'] };
    if (isHyperOffenseTeam) return { model: 'Hyper Offense Team', requiredTags: ['sweeper', 'wallbreaker', 'HazardSetter'] };
    if (isBulkyOffenseTeam) return { model: 'Bulky Offense Team', requiredTags: ['wallbreaker', 'stallbreaker', 'HazardSetter'] };
    if (isStallTeam) return { model: 'Stall Team', requiredTags: ['wall', 'HazardSetter', 'HazardRemoval'] };
    if (isSemiStallTeam) return { model: 'Semi-Stall Team', requiredTags: ['wall', 'stallbreaker', 'HazardSetter'] };

    return null; // Nessun modello specifico rilevato
}
// Funzione per valutare l'intero team
function evaluateTeam(team) {
    team.forEach(pokemon => assignTags(pokemon)); // Assegna i tag ai Pokémon
    const { weaknesses, worstWeaknesses } = calculateWeaknessesResistances(team); // Calcola le debolezze
    const teamModel = evaluateTeamModel(team); // Valuta il modello del team

    if (teamModel) {
        // Suggerisci Pokémon che coprono le debolezze basate su resistenze e che soddisfano i tag del modello
        const suggestedPokemon = suggestPokemonByResistances(weaknesses, teamModel.requiredTags);

        return { weaknesses, worstWeaknesses, suggestedPokemon, model: teamModel.model };
    } else {
        return { weaknesses, worstWeaknesses, suggestedPokemon: [], model: "Nessun modello specifico rilevato" };
    }
}

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
        Debolezze da coprire: ${result.worstWeaknesses.length > 0 ? result.worstWeaknesses.join(', ') : "Nessuna debolezza critica"}<br>
        Pokémon Suggeriti: ${result.suggestedPokemon.length > 0 ? result.suggestedPokemon.join(', ') : "Nessun Pokémon suggerito"}<br>
        Modello del Team: ${result.model}
    `;
});