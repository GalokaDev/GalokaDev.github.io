// Tabella delle debolezze e resistenze per i tipi
const typeChart = {
    normal: { weakTo: ['fighting'], resists: [], immuneTo: ['ghost'] },
    fire: { weakTo: ['water', 'rock', 'ground'], resists: ['fire', 'grass', 'ice', 'bug', 'steel', 'fairy'], immuneTo: [] },
    water: { weakTo: ['electric', 'grass'], resists: ['fire', 'water', 'ice', 'steel'], immuneTo: [] },
    grass: { weakTo: ['fire', 'ice', 'poison', 'flying', 'bug'], resists: ['water', 'electric', 'grass', 'ground'], immuneTo: [] },
    electric: { weakTo: ['ground'], resists: ['electric', 'flying', 'steel'], immuneTo: [] },
    ice: { weakTo: ['fire', 'fighting', 'rock', 'steel'], resists: ['ice'], immuneTo: [] },
    fighting: { weakTo: ['flying', 'psychic', 'fairy'], resists: ['bug', 'rock', 'dark'], immuneTo: [] },
    poison: { weakTo: ['ground', 'psychic'], resists: ['grass', 'fighting', 'poison', 'bug', 'fairy'], immuneTo: [] },
    ground: { weakTo: ['water', 'ice', 'grass'], resists: ['poison', 'rock'], immuneTo: ['electric'] },
    flying: { weakTo: ['electric', 'ice', 'rock'], resists: ['grass', 'fighting', 'bug'], immuneTo: ['ground'] },
    psychic: { weakTo: ['bug', 'ghost', 'dark'], resists: ['fighting', 'psychic'], immuneTo: [] },
    bug: { weakTo: ['fire', 'flying', 'rock'], resists: ['grass', 'fighting', 'ground'], immuneTo: [] },
    rock: { weakTo: ['water', 'grass', 'fighting', 'ground', 'steel'], resists: ['normal', 'fire', 'poison', 'flying'], immuneTo: [] },
    ghost: { weakTo: ['ghost', 'dark'], resists: ['poison', 'bug'], immuneTo: ['normal', 'fighting'] },
    dragon: { weakTo: ['ice', 'dragon', 'fairy'], resists: ['fire', 'water', 'electric', 'grass'], immuneTo: [] },
    dark: { weakTo: ['fighting', 'bug', 'fairy'], resists: ['ghost', 'dark'], immuneTo: ['psychic'] },
    steel: { weakTo: ['fire', 'fighting', 'ground'], resists: ['normal', 'grass', 'ice', 'flying', 'psychic', 'bug', 'rock', 'dragon', 'steel', 'fairy'], immuneTo: ['poison'] },
    fairy: { weakTo: ['poison', 'steel'], resists: ['fighting', 'bug', 'dark'], immuneTo: ['dragon'] }
};

// Tabella dei ruoli per i Pokémon
const pokemonRoles = {
    volcarona: { types: ['bug', 'fire'], roles: ['sweeper', 'rockweak'] },
    ferrothorn: { types: ['grass', 'steel'], roles: ['wall', 'stealthrock'] },
    landorus: { types: ['ground', 'flying'], roles: ['pivot', 'stealthrock'] },
    excadrill: { types: ['ground', 'steel'], roles: ['sweeper', 'hazardremoval'] },
    blissey: { types: ['normal'], roles: ['wall'] },
    toxapex: { types: ['water', 'poison'], roles: ['wall', 'toxicspikes'] },
    // Aggiungi altri Pokémon e i loro ruoli
};

// Modelli di team
const teamModels = {
    balance: { sweepers: [0, 1], wallbreakers: [1, 2], stallbreakers: 1, pivotsOrWalls: [2, 3], hazardControl: true },
    hyperOffense: { sweepers: [2, 4], wallbreakers: [1, 3], hazardControl: 'rockWeakOnly', trickOrTaunt: true },
    bulkyOffense: { sweepers: 1, wallbreakers: [2, 3], stallbreakers: 1, hazardControl: [0, 1] },
    stall: { walls: [5, 6], stallbreakers: 1, hazardControl: [1, 2] },
    semiStall: { walls: [4, 5], stallbreakers: 1, sweepers: [0, 1], wallbreakers: [0, 1], hazardControl: true }
};

// Funzione per ottenere i dati del team
function getTeamData() {
    const team = [];
    for (let i = 1; i <= 6; i++) {
        const name = document.getElementById(`pokemon-${i}`).value.toLowerCase();
        if (name) {
            const moves = [];
            for (let j = 1; j <= 4; j++) {
                const move = document.getElementById(`move-${i}-${j}`).value;
                if (move) moves.push(move);
            }
            team.push({ name, moves });
        }
    }
    return team;
}

// Funzione per calcolare debolezze, resistenze e immunità del team
function calculateWeaknessesAndResistances(team) {
    const typeCounters = {
        normal: 0, fire: 0, water: 0, grass: 0, electric: 0, ice: 0, fighting: 0, poison: 0,
        ground: 0, flying: 0, psychic: 0, bug: 0, rock: 0, ghost: 0, dragon: 0, dark: 0, steel: 0, fairy: 0
    };

    team.forEach(pokemon => {
        if (pokemonRoles[pokemon.name]) {
            const types = pokemonRoles[pokemon.name].types;

            types.forEach(type => {
                const typeData = typeChart[type];
                if (typeData) {
                    // Incrementa le debolezze
                    typeData.weakTo.forEach(weakType => typeCounters[weakType]++);
                    // Decrementa le resistenze
                    typeData.resists.forEach(resistType => typeCounters[resistType]--);
                    // Decrementa ulteriormente per le immunità
                    typeData.immuneTo.forEach(immuneType => typeCounters[immuneType] -= 2);
                }
            });
        }
    });

    // Trova le debolezze principali, quelle con valori maggiori di 2
    const majorWeaknesses = Object.entries(typeCounters).filter(([type, count]) => count > 2);
    
    return { typeCounters, majorWeaknesses };
}

// Funzione per valutare il team rispetto a un modello
function evaluateTeamAgainstModel(team, model) {
    let score = 0;

    // Conta i ruoli nel team
    const roleCount = {
        sweepers: 0,
        wallbreakers: 0,
        stallbreakers: 0,
        walls: 0,
        pivotsOrWalls: 0
    };

    team.forEach(pokemon => {
        if (pokemonRoles[pokemon.name]) {
            const roles = pokemonRoles[pokemon.name].roles;
            if (roles.includes('sweeper')) roleCount.sweepers++;
            if (roles.includes('wallbreaker')) roleCount.wallbreakers++;
            if (roles.includes('stallbreaker')) roleCount.stallbreakers++;
            if (roles.includes('wall')) roleCount.walls++;
            if (roles.includes('pivot') || roles.includes('wall')) roleCount.pivotsOrWalls++;
        }
    });

    // Assegna punteggi in base al modello e alla quantità di ruoli
    if (roleCount.sweepers >= model.sweepers[0] && roleCount.sweepers <= model.sweepers[1]) score += 20;
    if (roleCount.wallbreakers >= model.wallbreakers[0] && roleCount.wallbreakers <= model.wallbreakers[1]) score += 20;
    if (roleCount.stallbreakers >= model.stallbreakers) score += 20;
    if (roleCount.pivotsOrWalls >= model.pivotsOrWalls[0] && roleCount.pivotsOrWalls <= model.pivotsOrWalls[1]) score += 20;

    // Verifica se ci sono mosse per il controllo degli hazards
    const hazardControl = team.some(pokemon => pokemon.moves.includes('stealthrock') || pokemon.moves.includes('spikes') || pokemon.moves.includes('toxicspikes'));
    const hazardRemoval = team.some(pokemon => pokemon.moves.includes('defog') || pokemon.moves.includes('rapidspin'));

    if (model.hazardControl === 'rockWeakOnly' && team.some(pokemon => pokemonRoles[pokemon.name].roles.includes('rockweak')) && hazardRemoval) score += 20;
    else if (model.hazardControl && hazardControl) score += 20;

    return score;
}

// Funzione per suggerire i migliori Pokémon da aggiungere
function suggestPokemon(team, weaknesses) {
    const suggestions = [];
    for (const [pokemonName, data] of Object.entries(pokemonRoles)) {
        let score = 0;

        // Aumenta il punteggio se il Pokémon resiste a debolezze del team
        data.types.forEach(type => {
            if (typeChart[type]) {
                typeChart[type].resists.forEach(resistType => {
                    if (weaknesses.typeCounters[resistType] > 2) score += 10; // Incremento per copertura
                });
            }
        });

        suggestions.push({ name: pokemonName, score });
    }

    // Ordina i Pokémon suggeriti in base al punteggio
    return suggestions.sort((a, b) => b.score - a.score).slice(0, 3);
}

// Gestisci il click sul bottone
document.getElementById('calculate').addEventListener('click', function() {
    const team = getTeamData();
    if (team.length === 0) {
        document.getElementById('result').innerHTML = 'Inserisci almeno un Pokémon.';
        return;
    }

    const { typeCounters, majorWeaknesses } = calculateWeaknessesAndResistances(team);

    // Calcola il miglior modello di team
    let bestModel = null;
    let bestScore = -Infinity;
    for (const [modelName, modelData] of Object.entries(teamModels)) {
        const score = evaluateTeamAgainstModel(team, modelData);
        if (score > bestScore) {
            bestScore = score;
            bestModel = modelName;
        }
    }

    // Suggerisci i migliori Pokémon
    const suggestions = suggestPokemon(team, { typeCounters });

    // Trova il peggior Pokémon del team
    const worstPokemon = team.reduce((worst, pokemon) => {
        const score = evaluateTeamAgainstModel(team.filter(p => p !== pokemon), teamModels[bestModel]);
        return (score > worst.score) ? { pokemon, score } : worst;
    }, { pokemon: null, score: -Infinity });

    // Mostra il risultato
    let resultText = `Best team model: ${bestModel} <br>`;
    resultText += `Main weakness: ${majorWeaknesses.map(w => w[0]).join(', ')} <br>`;
    resultText += `Suggested Pokémon to add:<br>`;
    suggestions.forEach(s => resultText += `${s.name} (${s.score})<br>`);
    resultText += `Worst Pokémon to replace: ${worstPokemon.pokemon.name}`;
    
    document.getElementById('result').innerHTML = resultText;
});
