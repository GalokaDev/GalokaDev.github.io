const pokemonRoles = {
    pelipper: { roles: ['rainSetter', 'wall'], types: ['water', 'flying'] },
    conkeldurr: { roles: ['sweeper', 'wallbreaker'], types: ['fighting'] },
    crawdaunt: { roles: ['rainAbuser', 'wallbreaker'], types: ['water', 'dark'] },
    metagross: { roles: ['sweeper', 'wall'], types: ['steel', 'psychic'] },
    gengar: { roles: ['sweeper', 'wallbreaker'], types: ['ghost', 'poison'] },
    amoonguss: { roles: ['wall'], types: ['grass', 'poison'] },
    mienshao: { roles: ['sweeper', 'wallbreaker'], types: ['fighting'] },
    infernape: { roles: ['sweeper', 'wallbreaker'], types: ['fire', 'fighting'] },
    suicune: { roles: ['wallbreaker','wall'], types: ['water'] },
    chandelure: { roles: ['wallbreaker'], types: ['ghost', 'fire'] },
    magnezone: { roles: ['sweeper'], types: ['electric', 'steel'] },
    bronzong: { roles: ['wall'], types: ['steel', 'psychic'] },
    darmanitan: { roles: ['sweeper', 'wallbreaker'], types: ['fire'] },
    empoleon: { roles: ['wall'], types: ['water', 'steel'] },
    tentacruel: { roles: ['wall'], types: ['water', 'poison'] },
    weavile: { roles: ['sweeper', 'rockweak'], types: ['dark', 'ice'] },
    kingdra: { roles: ['rainAbuser'], types: ['water', 'dragon'] },
    // Aggiungi altri Pokémon qui se necessario
};

// Aggiungi pesi ai ruoli per ogni modello di team
const roleWeights = {
    balance: {
        sweeper: 2,
        wallbreaker: 2,
        wall: 2,
    },
    hyperOffense: {
        sweeper: 3, // Gli sweeper sono molto importanti
        wallbreaker: 2,
    },
    bulkyOffense: {
        sweeper: 2,
        wallbreaker: 3, // Wallbreaker sono fondamentali
        wall: 1,
    },
    stall: {
        wall: 4, // Le difese sono le più importanti
        wallbreaker: 2,
    },
    semiStall: {
        wall: 3,
        sweeper: 2,
        wallbreaker: 2,
    },
    rain: {
        rainSetter: 7, // Il rain setter è cruciale
        rainAbuser: 3,
        rainUseful: 2
    }
};

// Lista di mosse hazard e hazard removal
const hazardMoves = ['stealthrock', 'spikes', 'toxicspikes'];
const hazardRemovalMoves = ['defog', 'rapid spin'];
const utilityMoves = ['trick', 'taunt'];
const pivotmoves = ['u-turn', 'volt switch', 'teleport','baton pass'];

// Modelli di team con i requisiti di ruolo
const teamModels = {
    balance: {
        roles: { sweeper: [1, 4], wallbreaker: [1, 2], wall: [2, 3] },
        hazardsRequired: false,
        hazardRemovalRequired: false
    },
    hyperOffense: {
        roles: { sweeper: [4, 6], wallbreaker: [1, 3] },
        hazardsRequired: false,
        trickOrTauntRequired: false,
        hazardRemovalRequiredIfRockWeak: false
    },
    bulkyOffense: {
        roles: { wallbreaker: [2, 4] },
        hazardsRequired: false,
        hazardRemovalOptional: false
    },
    stall: {
        roles: { wall: [5, 6], wallbreaker: [0, 1] },
        hazardsRequired: false,
        hazardRemovalRequired: false
    },
    semiStall: {
        roles: { wall: [4, 5], sweeper: [0, 1], wallbreaker: [0, 2] },
        hazardsRequired: false,
        hazardRemovalOptional: false
    },
    rain: {
        roles: { rainSetter: [0, 1], rainAbuser: [1, 2], rainUseful: [0, 4]},
        hazardsRequired: false,
        hazardRemovalRequired: false
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


const typeEffectiveness = {
    normal: { weakTo: ['fighting'], resists: [], immuneTo: ['ghost'] },
    //e altri tipi da aggiungere
};
function calculateWeaknesses(team) {
    const typeWeaknessChart = {
        normal: 0,
        //e altri tipi da aggiungere
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
            } else{
                console.log(`Pokémon: ${pokemon.name}, Tipo 1: ${type1}, Tipo 2: ${type2}`);
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
        } else {
            console.warn(`Pokémon "${pokemon.name}" non trovato in pokemonRoles.`);
        }
    });

    // Ritorna solo le debolezze con valore maggiore di 2
    return Object.entries(typeWeaknessChart).filter(([type, count]) => count > 1);
}


function suggestBestPokemon(team, modelName) {
    console.log("Team:", team);
    console.log("Model:", modelName);

    let suggestions = [];
    let teamWeaknesses = calculateWeaknesses(team); // Calcola le debolezze attuali del team
    console.log("Team Weaknesses", teamWeaknesses);

    // Inizializza un oggetto roles per contare quanti Pokémon nel team hanno ciascun ruolo
    let roles = { rainSetter: 0, rainAbuser: 0, rainUseful: 0, sweeper: 0, wallbreaker: 0, wall: 0, rockweak: 0 };

    // Conta i ruoli nel team
    team.forEach(pokemon => {
        if (pokemonRoles[pokemon.name]) {
            pokemonRoles[pokemon.name].roles.forEach(role => {
                roles[role]++; // Incrementa il ruolo corrispondente
            });
        }
    });

    const model = teamModels[modelName]; // Ottieni l'oggetto del modello dal nome
    if (!model) {
        console.error(`Model "${modelName}" not found in teamModels`);
        return [];
    }

    const weight = roleWeights[modelName] || {}; // Ottieni i pesi per il modello
    console.log("Model:", model);
    console.log("Weight:", weight);

    // Analizza ciascun Pokémon della lista dei ruoli e calcola il suo punteggio
    for (let pokemon in pokemonRoles) {
        if (!team.some(p => p.name === pokemon)) {
            let score = 0; // Il punteggio parte da 0
            console.log("Evaluating pokemon:", pokemon);

            let skip = false; // Variabile per determinare se saltare questo Pokémon

            // Verifica i ruoli che sono stati dichiarati nel modello
            for (let role in model.roles) {
                const roleReq = model.roles[role];
                // Se il ruolo è già oltre il limite, salta questo Pokémon
                if (Array.isArray(roleReq)) {
                    if (pokemonRoles[pokemon].roles.includes(role) && roles[role] >= roleReq[1]) {
                        skip = true;
                        break; // Interrompi il ciclo se uno dei ruoli è già pieno
                    }
                }
            }

            if (skip) continue; // Se il Pokémon non è valido, passa al successivo

            // Aumenta il punteggio se il Pokémon copre le debolezze del team
            teamWeaknesses.forEach(([weakType]) => {
                pokemonRoles[pokemon].types.forEach(type => {
                    // Se il Pokémon ha una resistenza a una debolezza del team, guadagna punti
                    const resists = typeEffectiveness[type].resists || [];
                    if (resists.includes(weakType)) {
                        score += 9;
                    }
                });
            });

            // Aumenta il punteggio solo per i ruoli dichiarati nel modello
            for (let role in model.roles) {
                const roleReq = model.roles[role];
                const roleWeight = weight[role] || 1; // Ottieni il peso del ruolo o predefinito a 1

                if (Array.isArray(roleReq)) {
                    if (pokemonRoles[pokemon].roles.includes(role) && roles[role] < roleReq[1]) {
                        score += 10 * roleWeight; // Aumenta il punteggio in base al peso
                    }
                } else {
                    if (pokemonRoles [pokemon].roles.includes(role)) {
                        score += 10 * roleWeight; // Aumenta il punteggio in base al peso
                    }
                }
            }

            // Aggiungi il Pokémon alla lista delle suggerimenti se il punteggio è sufficiente
            if (score > 0) {
                suggestions.push({ name: pokemon, score });
            }
        }
    }

    // Ordina le suggerimenti in base al punteggio
    suggestions.sort((a, b) => b.score - a.score);

    return suggestions;
}





// Funzione aggiornata per valutare il team rispetto a un modello, considerando debolezze
function evaluateTeamAgainstModel(team, bestModel) {
    let roles = { rainSetter: 0, rainAbuser: 0, rainUseful: 0, sweeper: 0, wallbreaker: 0, wall: 0, rockweak: 0 };
    let score = 0; // Il punteggio parte da 0
    let hasHazards = false;
    let hasHazardRemoval = false;
    let hasTrickOrTaunt = false;
    let hasPelipper = team.some(pokemon => pokemon.name === 'pelipper'); // Controlla se Pelipper è nel team

    // Conta i ruoli nel team e identifica hazard, hazard removal, trick o taunt
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

    console.log('Ruoli conteggiati:', roles);

    // Aumenta il punteggio se i ruoli corrispondono ai requisiti del modello
    for (let role in bestModel.roles) {
        const required = bestModel.roles[role];
        
        if (Array.isArray(required) && typeof roles[role] === 'number') {
            if (roles[role] >= required[0] && roles[role] <= required[1]) {
                console.log('Ruolo valido:', role, 'Conteggio:', roles[role], 'Requisiti:', required);
                score += 10; // Assegna 10 punti per gli altri ruoli
            }
        }
    }

    console.log('Punteggio dopo i ruoli:', score);

    // Penalizza il punteggio se mancano hazard, hazard removal, trick o taunt se richiesti
    if (bestModel.hazardsRequired && !hasHazards) score -= 20;
    if (bestModel.hazardRemovalRequired && !hasHazardRemoval) score -= 20;
    if (bestModel.trickOrTauntRequired && !hasTrickOrTaunt) score -= 20;

    // Se Pelipper è presente nel team, aumenta il punteggio per il modello "rain"
    if (hasPelipper && bestModel === teamModels['rain']) {
        console.log("Pelipper è nel team, aumento del punteggio per il modello rain.");
        score += 30; // Aggiungi un bonus significativo per il modello "rain" se Pelipper è presente
    }

    return score;
}




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

    // Stampa il modello più vicino e suggerimenti di Pokémon
    if (bestModel) {
        let suggestions = suggestBestPokemon(team, bestModel);
        let worstPokemon = team.reduce((worst, pokemon, index) => {
            let score = evaluateTeamAgainstModel(team.filter((_, i) => i !== index), teamModels[bestModel]);
            return score < worst.score ? { name: pokemon.name, score } : worst;
        }, { score: Infinity });

        let resultText = `Team Model: ${bestModel}\n`;
        
        // Stampa le debolezze con il numero accanto tra parentesi
        if (weaknesses.length > 0) {
            const weaknessTypes = weaknesses.map(([type, count]) => `${type}(${count})`).join(', ');
            resultText += `Weaknesses: ${weaknessTypes}\n`;
        } else {
            resultText += `Weaknesses: None\n`;
        }

        resultText += `Worst Pokémon: ${worstPokemon.name}\n`;
        suggestions.forEach(suggestion => {
            resultText += `Suggested Pokémon: ${suggestion.name} (Score: ${suggestion.score})\n`;
        });

        document.getElementById('result').innerText = resultText;
    }

});



