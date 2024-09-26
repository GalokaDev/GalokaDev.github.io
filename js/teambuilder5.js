// Lista di Pokémon con ruoli
const pokemonRoles = {
    volcarona: { roles: ['sweeper', 'rockweak'], types: ['bug', 'fire'] },
    ferrothorn: { roles: ['wall'], types: ['grass', 'steel'] },
    garchomp: { roles: ['sweeper'], types: ['dragon', 'ground'] },
    blissey: { roles: ['wall'], types: ['normal'] },
    chansey: { roles: ['wall'], types: ['normal'] },
    scizor: { roles: ['pivot', "sweeper"], types: ['bug', 'steel'] },
    skarmory: { roles: ['wall', 'hazardremoval'], types: ['steel', 'flying'] },
    // Aggiungi altri Pokémon qui
};

// Lista di mosse hazard e hazard removal
const hazardMoves = ['stealthrock', 'spikes', 'toxicspikes'];
const hazardRemovalMoves = ['defog', 'rapid spin'];
const utilityMoves = ['trick', 'taunt'];

// Modelli di team con i requisiti di ruolo
const teamModels = {
    balance: {
        roles: { sweeper: [0, 1], wallbreaker: [1, 2], stallbreaker: 1, pivot_or_wall: [2, 3] },
        hazardsRequired: true,
        hazardRemovalRequired: true
    },
    hyperOffense: {
        roles: { sweeper: [2, 4], wallbreaker: [1, 3] },
        hazardsRequired: true,
        trickOrTauntRequired: true,
        hazardRemovalRequiredIfRockWeak: true
    },
    bulkyOffense: {
        roles: { sweeper: 1, wallbreaker: [2, 3], stallbreaker: 1 },
        hazardsRequired: true,
        hazardRemovalOptional: true
    },
    stall: {
        roles: { wall: [5, 6], stallbreaker: 1 },
        hazardsRequired: true,
        hazardRemovalRequired: true
    },
    semiStall: {
        roles: { wall: [4, 5], stallbreaker: 1, sweeper: [0, 1], wallbreaker: [0, 1] },
        hazardsRequired: true,
        hazardRemovalOptional: true
    }
};

// Funzione per raccogliere i Pokémon e le mosse inserite dall'utente
function getTeamData() {
    let team = [];
    for (let i = 1; i <= 6; i++) {
        const pokemon = document.getElementById(`pokemon-${i}`).value.toLowerCase();
        const moves = [
            document.getElementById(`move-${i}-1`).value.toLowerCase(),
            document.getElementById(`move-${i}-2`).value.toLowerCase(),
            document.getElementById(`move-${i}-3`).value.toLowerCase(),
            document.getElementById(`move-${i}-4`).value.toLowerCase()
        ];
        if (pokemon) {
            team.push({ name: pokemon, moves });
        }
    }
    return team;
}

function calculateWeaknesses(team) {
    const typeEffectiveness = {
        normal: { weakTo: ['fighting'], resists: [], immuneTo: ['ghost'] },
        fire: { weakTo: ['water', 'rock', 'ground'], resists: ['fire', 'grass', 'ice', 'bug', 'steel'], immuneTo: [] },
        water: { weakTo: ['electric', 'grass'], resists: ['fire', 'water', 'ice', 'steel'], immuneTo: [] },
        grass: { weakTo: ['fire', 'ice', 'poison', 'flying', 'bug'], resists: ['water', 'grass', 'electric', 'ground'], immuneTo: [] },
        electric: { weakTo: ['ground'], resists: ['electric', 'flying', 'steel'], immuneTo: [] },
        ice: { weakTo: ['fire', 'fighting', 'rock', 'steel'], resists: ['ice'], immuneTo: [] },
        fighting: { weakTo: ['flying', 'psychic'], resists: ['bug', 'rock', 'dark'], immuneTo: [] },
        poison: { weakTo: ['ground', 'psychic'], resists: ['grass', 'fighting', 'poison', 'bug'], immuneTo: [] },
        ground: { weakTo: ['water', 'ice', 'grass'], resists: ['poison', 'rock'], immuneTo: ['electric'] },
        flying: { weakTo: ['electric', 'ice', 'rock'], resists: ['grass', 'fighting', 'bug'], immuneTo: [] },
        psychic: { weakTo: ['bug', 'ghost', 'dark'], resists: ['fighting', 'psychic'], immuneTo: [] },
        bug: { weakTo: ['fire', 'flying', 'rock', 'ghost', 'poison'], resists: ['grass', 'fighting', 'ground'], immuneTo: [] },
        rock: { weakTo: ['water', 'grass', 'fighting', 'ground', 'steel'], resists: ['normal', 'flying', 'poison', 'fire'], immuneTo: [] },
        ghost: { weakTo: ['ghost', 'dark'], resists: ['poison', 'bug'], immuneTo: ['normal', 'fighting'] },
        dragon: { weakTo: ['ice', 'dragon'], resists: ['fire', 'water', 'electric', 'grass'], immuneTo: [] },
        dark: { weakTo: ['fighting', 'bug'], resists: ['ghost', 'dark'], immuneTo: ['psychic'] },
        steel: { weakTo: ['fire', 'fighting', 'ground'], resists: ['normal', 'flying', 'rock', 'bug', 'steel', 'grass', 'ice', 'psychic', 'dragon','ghost','dark'], immuneTo: ['poison'] },
    };

    const typeWeaknessChart = {
        normal: 0,
        fighting: 0,
        flying: 0,
        poison: 0,
        ground: 0,
        rock: 0,
        bug: 0,
        ghost: 0,
        steel: 0,
        fire: 0,
        water: 0,
        grass: 0,
        electric: 0,
        ice: 0,
        dragon: 0,
        dark: 0,
    };
    

    team.forEach(pokemon => {
        if (pokemonRoles[pokemon.name]) {
            const types = pokemonRoles[pokemon.name].types;
            const [type1, type2] = types;

            // Gestione del primo tipo
            if (typeEffectiveness[type1]) {
                typeEffectiveness[type1].weakTo.forEach(t => typeWeaknessChart[t]++);
                typeEffectiveness[type1].resists.forEach(t => typeWeaknessChart[t]--);
                typeEffectiveness[type1].immuneTo.forEach(t => typeWeaknessChart[t] -= 2);
            }

            // Gestione del secondo tipo
            if (type2 && typeEffectiveness[type2]) {
                typeEffectiveness[type2].weakTo.forEach(t => {
                    if (!typeEffectiveness[type1].immuneTo.includes(t)) {
                        typeWeaknessChart[t]++;
                    }
                });
                typeEffectiveness[type2].resists.forEach(t => {
                    if (!typeEffectiveness[type1].immuneTo.includes(t)) {
                        typeWeaknessChart[t]--;
                    }
                });
                typeEffectiveness[type2].immuneTo.forEach(t => {
                    typeWeaknessChart[t] -= 2;
                });
            }
        }
    });

    // Ritorna solo le debolezze con valore maggiore di 2
    return Object.entries(typeWeaknessChart).filter(([type, count]) => count > 2);
}

// Funzione per suggerire i migliori Pokémon da aggiungere con integrazione debolezze
function suggestBestPokemon(team, model) {
    let suggestions = [];
    let teamWeaknesses = calculateWeaknesses(team);

    // Analizza ciascun Pokémon della lista dei ruoli e calcola il suo punteggio
    for (let pokemon in pokemonRoles) {
        if (!team.some(p => p.name === pokemon)) {
            let testTeam = [...team, { name: pokemon, moves: [] }];
            let score = evaluateTeamAgainstModel(testTeam, model);

            // Aumenta il punteggio se il Pokémon copre le debolezze del team
            teamWeaknesses.forEach(([type]) => {
                if (pokemonRoles[pokemon].types.includes(type)) {
                    score += 10; // Migliora score se copre debolezza
                }
            });

            suggestions.push({ name: pokemon, score });
        }
    }

    // Ordina le migliori tre soluzioni
    return suggestions.sort((a, b) => b.score - a.score).slice(0, 3);
}

// Funzione aggiornata per valutare il team rispetto a un modello, considerando debolezze
function evaluateTeamAgainstModel(team, model) {
    let roles = { sweeper: 0, wallbreaker: 0, stallbreaker: 0, pivot: 0, wall: 0, rockweak: 0 };
    let hasHazards = false;
    let hasHazardRemoval = false;
    let hasTrickOrTaunt = false;

    team.forEach(pokemon => {
        if (pokemonRoles[pokemon.name]) {
            pokemonRoles[pokemon.name].roles.forEach(role => {
                roles[role]++;
            });
        }
        pokemon.moves.forEach(move => {
            if (hazardMoves.includes(move)) hasHazards = true;
            if (hazardRemovalMoves.includes(move)) hasHazardRemoval = true;
            if (utilityMoves.includes(move)) hasTrickOrTaunt = true;
        });
    });

    // Controlla se il team soddisfa i requisiti del modello
    let score = 100;
    for (let role in model.roles) {
        let required = model.roles[role];
        if (Array.isArray(required)) {
            if (roles[role] < required[0] || roles[role] > required[1]) {
                score -= 20;
            }
        } else {
            if (roles[role] !== required) {
                score -= 20;
            }
        }
    }

    // Controlla se il team ha gli hazard e hazard removal richiesti
    if (model.hazardsRequired && !hasHazards) score -= 20;
    if (model.hazardRemovalRequired && !hasHazardRemoval) score -= 20;
    if (model.trickOrTauntRequired && !hasTrickOrTaunt) score -= 20;

    // Aumenta il punteggio se ci sono coperture di debolezze
    let teamWeaknesses = calculateWeaknesses(team);
    teamWeaknesses.forEach(([type]) => {
        if (team.some(pokemon => pokemonRoles[pokemon.name].types.includes(type))) {
            score += 5; // Migliora se almeno un Pokémon copre le debolezze
        }
    });

    return score;
}

// Funzione principale da eseguire al click del bottone
document.getElementById('calculate').addEventListener('click', function() {
    let team = getTeamData();

    // Identifica il modello di team più vicino
    let bestModel = null;
    let bestScore = -Infinity;
    for (let modelName in teamModels) {
        let score = evaluateTeamAgainstModel(team, teamModels[modelName]);
        if (score > bestScore) {
            bestScore = score;
            bestModel = modelName;
        }
    }

    // Calcola la debolezza più frequente
    let weaknesses = calculateWeaknesses(team);
    let mainWeakness = weaknesses.length > 0 ? weaknesses[0][0] : "None";

    // Stampa il modello più vicino e suggerimenti di Pokémon
    if (bestModel) {
        let suggestions = suggestBestPokemon(team, teamModels[bestModel]);
        let worstPokemon = team.reduce((worst, pokemon, index) => {
            let score = evaluateTeamAgainstModel(team.filter((_, i) => i !== index), teamModels[bestModel]);
            return score < worst.score ? { name: pokemon.name, score } : worst;
        }, { score: Infinity });

        let resultText = `Team Model: ${bestModel}\n`;
        resultText += `Main Weakness: ${mainWeakness}\n`;
        weaknesses.forEach(([type]) => {
            resultText += `Weakness: ${type}\n`;
        });
        resultText += `Worst Pokémon: ${worstPokemon.name}\n`;
        suggestions.forEach(suggestion => {
            resultText += `Suggested Pokémon: ${suggestion.name} (Score: ${suggestion.score})\n`;
        });

        document.getElementById('result').innerText = resultText;
    }
});
