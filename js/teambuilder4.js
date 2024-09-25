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
    rotomwash: ['electric', 'water'],
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
    porygonz: ['normal'], 
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
    togekiss: ['flying'],
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
    "scizor": ["wallbreaker", "pivot"],
    "garchomp": ["sweeper", "hazardSetter"],
    "gallade": ["sweeper", "wallbreaker"],
    "zapdos": ["wall", "hazardRemover", "pivot", "rockWeak"],
    "serperior": ["sweeper"],
    "jellicent": ["wall"],
    "weezing": ["wall"],
    "mamoswine": ["wallbreaker", "hazardSetter", "rockWeak"],
    "dragonite": ["sweeper", "rockWeak"],
    "tyranitar": ["wallbreaker", "hazardSetter"],
    "rotomwash": ["hazardRemover", "pivot", "wall"],
    "gliscor": ["wall", "hazardSetter", "pivot"],
    "starmie": ["hazardRemover", "sweeper", "pivot"],
    "hydreigon": ["wallbreaker", "hazardSetter"],
    "excadrill": ["hazardSetter", "hazardRemover", "wallbreaker"],
    "chansey": ["wall", "hazardSetter"],
    "volcarona": ["sweeper", "rockWeak"],
    "breloom": ["sweeper", "wallbreaker", "stallbreaker"],
    "skarmory": ["wall", "hazardSetter", "hazardRemover"],
    "reuniclus": ["stallbreaker"],
    "pelipper": ["hazardRemover", "pivot"],
    "conkeldurr": ["wallbreaker", "stallbreaker"],
    "crawdaunt": ["wallbreaker"],
    "metagross": ["hazardSetter", "wall"],
    "gengar": ["stallbreaker", "sweeper", "trickOrTaunt"],
    "amoonguss": ["wall", "pivot"],
    "mienshao": ["wallbreaker", "pivot"],
    "infernape": ["sweeper", "wallbreaker"],
    "suicune": ["wall", "sweeper"],
    "chandelure": ["wallbreaker"],
    "magnezone": ["wallbreaker", "pivot"],
    "bronzong": ["hazardSetter", "wall"],
    "darmanitan": ["wallbreaker"],
    "empoleon": ["hazardRemover", "hazardSetter", "wall"],
    "tentacruel": ["hazardRemover", "wall", "hazardSetter"],
    "weavile": ["sweeper", "wallbreaker", "trickOrTaunt", "rockWeak"],
    "ferrothorn": ["wall", "hazardSetter", "pivot"],
    "kingdra": ["sweeper"],
    "porygon2": ["wall"],
    "gyarados": ["sweeper", "pivot", "rockWeak"],
    "gastrodon": ["wall", "pivot"],
    "espeon": ["sweeper"],
    "torkoal": ["hazardSetter", "hazardRemover", "wall"],
    "porygonz": ["sweeper", "wallbreaker"],
    "lucario": ["sweeper", "wallbreaker"],
    "sableye": ["hazardSetter", "wall", "stallbreaker"],
    "kabutops": ["sweeper", "hazardRem over"],
    "cofagrigus": ["wall", "hazardSetter"],
    "cloyster": ["sweeper", "hazardSetter"],
    "blissey": ["wall"],
    "venusaur": ["sweeper"],
    "ditto": ["antiSweeper"],
    "raikou": ["wallbreaker", "pivot"],
    "entei": ["wallbreaker", "pivot"],
    "staraptor": ["sweeper", "wallbreaker", "pivot", "rockWeak"],
    "poliwrath": ["wall"],
    "feraligatr": ["sweeper", "wallbreaker"],
    "togekiss": ["sweeper", "pivot", "rockWeak"],
    "salamence": ["sweeper", "rockWeak"],
    "mandibuzz": ["wall", "pivot", "hazardRemover"],
    "jolteon": ["sweeper", "pivot"],
    "milotic": ["wall"]
};
// Funzione per assegnare i tag ai Pokémon
function assignTags(pokemon) {
    pokemon.tags = []; // Inizializza l'array tags per ogni Pokémon
    const hazardMoves = ['stealth rock', 'spikes', 'toxic spikes'];
    const hazardRemovalMoves = ['rapid spin', 'defog'];

    // Converti il nome del Pokémon in minuscolo per la ricerca
    const pokemonNameLower = pokemon.name.toLowerCase();

    // Assegna i ruoli predefiniti al Pokémon basandosi sul nome (in minuscolo)
    const pokemonRole = pokemonRoles[pokemonNameLower];
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

// Funzione per calcolare debolezze e resistenze del team, gestendo correttamente le immunità
function calculateWeaknessesResistances(team) {
    // Inizializza un oggetto per tenere traccia delle debolezze totali
    const weaknesses = {
        normal: 0, fire: 0, water: 0, electric: 0, grass: 0, ice: 0, fighting: 0, poison: 0,
        ground: 0, flying: 0, psychic: 0, bug: 0, rock: 0, ghost: 0, dragon: 0, dark: 0, steel: 0
    };

    team.forEach(pokemon => {
        const types = pokemonTypes[pokemon.name.toLowerCase()];

        if (types) {
            let immuneTypeFound = null;

            // Controlla se c'è un tipo immune e segna i debolezze/resistenze relative
            types.forEach(type => {
                if (typeChart[type].immuneTo) {
                    typeChart[type].immuneTo.forEach(immuneType => {
                        // Se troviamo un tipo immune, segnalo e lo impostiamo a -2
                        immuneTypeFound = immuneType;
                        console.log(`${pokemon.name} è immune a ${immuneType}`);
                    });
                }
            });

            // Calcola debolezze e resistenze
            types.forEach(type => {
                // Aggiungi debolezze
                typeChart[type].weakTo.forEach(weakType => {
                    weaknesses[weakType]++;
                    console.log(`${pokemon.name} è debole a ${weakType}, debolezza corrente: ${weaknesses[weakType]}`);
                });

                // Sottrai resistenze
                typeChart[type].resistantTo.forEach(resistType => {
                    weaknesses[resistType]--;
                    console.log(`${pokemon.name} è resistente a ${resistType}, resistenza corrente: ${weaknesses[resistType]}`);
                });
            });

            // Se è stato trovato un tipo immune, imposta solo quel tipo a -2
            if (immuneTypeFound) {
                weaknesses[immuneTypeFound] = -2;
            }
        }
    });

    console.log(`Debolezze finali del team: ${JSON.stringify(weaknesses)}`);
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

    console.log('Final Counts', counts);


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
        (counts.sweeper === 0) &&
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




// Funzione per valutare l'intero team e suggerire miglioramenti
function evaluateTeam(team) {
    console.log("Team:", team);
    team.forEach(pokemon => assignTags(pokemon)); // Assegna i tag ai Pokémon
    const { weaknesses, worstWeaknesses } = calculateWeaknessesResistances(team); // Calcola le debolezze
    const teamModel = evaluateTeamModel(team); // Valuta il modello del team

    if (teamModel) {
        // Suggerisci Pokémon che coprono le debolezze basate su resistenze e che soddisfano i tag del modello
        const suggestedPokemon = suggestPokemonByResistances(weaknesses, teamModel.requiredTags);

        return { weaknesses, worstWeaknesses, suggestedPokemon, model: teamModel.model };
    } else {
        // Se il team non rientra in nessun modello, suggerisci come migliorarlo
        const improvementSuggestions = suggestImprovements(team, weaknesses);

        return { weaknesses, worstWeaknesses, improvementSuggestions, model: "Nessun modello specifico rilevato" };
    }
}



// Funzione per suggerire miglioramenti al team
function suggestImprovements(team, weaknesses) {
    const improvementSuggestions = [];
    const teamSize = 6;

    // Prova a rimuovere ogni Pokémon uno alla volta
    for (let i = 0; i < teamSize; i++) {
        const currentTeam = [...team];
        currentTeam.splice(i, 1); // Rimuovi un Pokémon dal team

        // Valuta il team senza il Pokémon rimosso
        const { weaknesses: newWeaknesses } = calculateWeaknessesResistances(currentTeam);
        const teamModel = evaluateTeamModel(currentTeam);

        if (teamModel) {
            // Suggerisci Pokémon che coprono le debolezze basate su resistenze e che soddisfano i tag del modello
            const suggestedPokemon = suggestPokemonByResistances(newWeaknesses, teamModel.requiredTags);

            improvementSuggestions.push({
                remove: team[i].name,
                add: suggestedPokemon
            });
        }
    }

    // Se nessun miglioramento è stato trovato, suggerisci Pokémon per coprire le debolezze
    if (improvementSuggestions.length === 0) {
        const suggestedPokemon = suggestPokemonByResistances(weaknesses, []);
        improvementSuggestions.push({
            remove: null,
            add: suggestedPokemon
        });
    }

    return improvementSuggestions;
}

// Funzione per valutare l'importanza di un Pokémon nel team
function evaluatePokemonImportance(pokemon, team) {
    const importance = 0;

    // Valuta l'importanza del Pokémon in base ai suoi ruoli nel team
    if (pokemon.tags.includes('sweeper')) importance += 2;
    if (pokemon.tags.includes('wallbreaker')) importance += 2;
    if (pokemon.tags.includes('stallbreaker')) importance += 1;
    if (pokemon.tags.includes('pivot')) importance += 1;
    if (pokemon.tags.includes('wall')) importance += 1;
    if (pokemon.tags.includes('HazardSetter')) importance += 1;
    if (pokemon.tags.includes('HazardRemoval')) importance += 1;

    return importance;
}

document.addEventListener('DOMContentLoaded', () => {
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
                team.push({ name: pokemon, moves });
            }
        }

        // Valuta l'intero team e suggerisci miglioramenti
        const result = evaluateTeam(team);

        // Mostra i risultati
        const output = document.getElementById('result');
        if (output) {
            output.innerHTML = `Debolezze: ${Object.keys(result.weaknesses).join(', ')}<br>`;
            output.innerHTML += `Peggior debolezza: ${result.worstWeaknesses.join(', ')}<br>`;
            if (result.model) {
                output.innerHTML += `Modello di team: ${result.model}<br>`;
            }
            if (result.suggestedPokemon) {
                output.innerHTML += `Suggerimento: Aggiungi ${result.suggestedPokemon.join(', ')} per coprire le debolezze<br>`;
            }
            if (result.improvementSuggestions) {
                output.innerHTML += `Suggerimenti di miglioramento:<br>`;
                result.improvementSuggestions.forEach(suggestion => {
                    output.innerHTML += `Rimuovi ${suggestion.remove} e aggiungi ${suggestion.add.join(', ')}<br>`;
                });
            }
        }
    });
});