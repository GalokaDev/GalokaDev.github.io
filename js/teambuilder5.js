// Lista di Pokémon con ruoli
const pokemonRoles = {
    volcarona: { roles: ['sweeper', 'rockweak'], types: ['bug', 'fire'] },
    ferrothorn: { roles: ['wall'], types: ['grass', 'steel'] },
    garchomp: { roles: ['sweeper'], types: ['dragon', 'ground'] },
    blissey: { roles: ['wall'], types: ['normal'] },
    chansey: { roles: ['wall'], types: ['normal'] },
    scizor: { roles: ['pivot'], types: ['bug', 'steel'] },
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

// Funzione per calcolare le debolezze e resistenze di un team
function calculateWeaknesses(team) {
    const typeWeaknessChart = {
        grass: 0, water: 0, fire: 0, ground: 0, rock: 0, steel: 0, ice: 0, flying: 0, bug: 0, // etc.
    };

    team.forEach(pokemon => {
        if (pokemonRoles[pokemon.name]) {
            const types = pokemonRoles[pokemon.name].types;
            // Calcola debolezze e resistenze per ogni tipo
            types.forEach(type => {
                // Esempio di gestione delle debolezze (in realtà è più complessa)
                if (type === 'fire') typeWeaknessChart.water++;
                if (type === 'water') typeWeaknessChart.electric++;
                // Continua per altri tipi
            });
        }
    });

    // Ritorna solo le debolezze con valore maggiore di 2
    return Object.entries(typeWeaknessChart).filter(([type, count]) => count > 2);
}

// Funzione per valutare il team rispetto a un modello
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

    return score;
}

// Funzione per suggerire i migliori Pokémon da aggiungere
function suggestBestPokemon(team, model) {
    let suggestions = [];

    // Analizza ciascun Pokémon della lista dei ruoli e calcola il suo punteggio
    for (let pokemon in pokemonRoles) {
        if (!team.some(p => p.name === pokemon)) {
            let testTeam = [...team, { name: pokemon, moves: [] }];
            let score = evaluateTeamAgainstModel(testTeam, model);
            let weaknesses = calculateWeaknesses(testTeam);
            weaknesses.forEach(([type]) => {
                if (pokemonRoles[pokemon].types.includes(type)) score += 10; // Migliora score se copre debolezza
            });
            suggestions.push({ name: pokemon, score });
        }
    }

    // Ordina le migliori tre soluzioni
    return suggestions.sort((a, b) => b.score - a.score).slice(0, 3);
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
        resultText += `Worst Pokémon: ${worstPokemon.name}\n`;
        suggestions.forEach(suggestion => {
            resultText += `Suggested Pokémon: ${suggestion.name} (Score: ${suggestion.score})\n`;
        });

        document.getElementById('result').innerText = resultText;
    }
});
