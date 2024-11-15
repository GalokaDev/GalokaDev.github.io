const pokemonRoles = {
    volcarona: { roles: ['sweeper', 'sunUseful'], types: ['bug', 'fire'], tier: 'S' },
    ferrothorn: { roles: ['rainUseful', 'wall'], types: ['grass', 'steel'], tier: 'A' },
    garchomp: { roles: ['sweeper'], types: ['dragon', 'ground'], tier: 'S+' },
    blissey: { roles: ['wall'], types: ['normal'], tier: 'B' },
    chansey: { roles: ['wall'], types: ['normal'], tier: 'S' },
    scizor: { roles: ['rainUseful', 'sweeper'], types: ['bug', 'steel'], tier: 'S+' },
    skarmory: { roles: ['wall'], types: ['steel', 'flying'], tier: 'S' },
    zapdos: { roles: ['rainUseful', 'wall'], types: ['electric', 'flying'], tier: 'S+' },
    serperior: { roles: ['rainUseful', 'sweeper'], types: ['grass'], tier: 'S+' },
    jellicent: { roles: ['wall'], types: ['water', 'ghost'], tier: 'S+' },
    weezing: { roles: ['wall'], types: ['poison'], tier: 'S+' },
    mamoswine: { roles: ['sweeper', 'wallbreaker'], types: ['ice', 'ground'], tier: 'S' },
    dragonite: { roles: ['sweeper', 'sunUseful'], types: ['dragon', 'flying'], tier: 'S' },
    tyranitar: { roles: ['wall','sweeper'], types: ['rock', 'dark'], tier: 'S'},
    rotomwash: { roles: ['wall'], types: ['electric', 'water'], tier: 'S' },
    gliscor: { roles: ['wall'], types: ['ground', 'flying'], tier: 'S' },
    starmie: { roles: ['sweeper'], types: ['water', 'psychic'], tier: 'S' },
    hydreigon: { roles: ['sweeper', 'wallbreaker'], types: ['dark', 'dragon'], tier: 'S' },
    excadrill: { roles: ['sweeper','rainUseful'], types: ['ground', 'steel'], tier: 'S' },
    breloom: { roles: ['sweeper', 'wallbreaker'], types: ['grass', 'fighting'], tier: 'S' },
    reuniclus: { roles: ['wallbreaker', 'wall'], types: ['psychic'], tier: 'S' },
    pelipper: { roles: ['rainSetter', 'wall'], types: ['water', 'flying'], tier: 'A' },
    conkeldurr: { roles: ['sweeper', 'wallbreaker'], types: ['fighting'], tier: 'A' },
    crawdaunt: { roles: ['rainAbuser', 'wallbreaker'], types: ['water', 'dark'], tier: 'A' },
    metagross: { roles: ['sweeper', 'wall'], types: ['steel', 'psychic'], tier: 'A' },
    gengar: { roles: ['sweeper', 'wallbreaker'], types: ['ghost', 'poison'], tier: 'A' },
    amoonguss: { roles: ['wall'], types: ['grass', 'poison'], tier: 'A' },
    mienshao: { roles: ['sweeper', 'wallbreaker'], types: ['fighting'], tier: 'A'},
    infernape: { roles: ['sweeper', 'wallbreaker', 'sunUseful'], types: ['fire', 'fighting'], tier: 'A' },
    suicune: { roles: ['wallbreaker','wall'], types: ['water'], tier: 'A' },
    chandelure: { roles: ['wallbreaker', 'sunUseful'], types: ['ghost', 'fire'], tier: 'A' },
    magnezone: { roles: ['sweeper'], types: ['electric', 'steel'], tier: 'A' },
    bronzong: { roles: ['wall'], types: ['steel', 'psychic'], tier: 'A' },
    darmanitan: { roles: ['sweeper', 'wallbreaker', 'sunAbuser'], types: ['fire'], tier: 'A' },
    empoleon: { roles: ['wall'], types: ['water', 'steel'], tier: 'A' },
    tentacruel: { roles: ['wall'], types: ['water', 'poison'], tier: 'A' },
    weavile: { roles: ['sweeper'], types: ['dark', 'ice'], tier: 'A' },
    kingdra: { roles: ['rainAbuser'], types: ['water', 'dragon'], tier: 'A' },
    porygon2: { roles: ['wall'], types: ['normal'], tier: 'A' },
    gyarados: { roles: ['sweeper'], types: ['water', 'flying'], tier: 'B' },
    gastrodon: { roles: ['wall'], types: ['water', 'ground'], tier: 'B' },
    espeon: { roles: ['sweeper', 'sunUseful'], types: ['psychic'], tier: 'B'},
    torkoal: { roles: ['sunSetter'], types: ['fire'], tier: 'B' },
    porygon_z: { roles: ['sweeper'], types: ['normal'], tier: 'B' },
    lucario: { roles: ['sweeper', 'wallbreaker'], types: ['fighting', 'steel'], tier: 'B' },
    sableye: { roles: ['wall', 'utility'], types: ['dark', 'ghost'], tier: 'B' },
    kabutops: { roles: ['rainAbuser'], types: ['rock', 'water'], tier: 'B' },
    cofagrigus: { roles: ['wall'], types: ['ghost'], tier: 'B' },
    cloyster: { roles: ['sweeper'], types: ['water', 'ice'], tier: 'B' },
    venusaur: { roles: ['sunAbuser'], types: ['grass', 'poison'], tier: 'B'},
    ditto: { roles: ['utility'], types: ['normal'], tier: 'B' },
    raikou: { roles: ['sweeper'], types: ['electric'], tier: 'B' },
    entei: { roles: ['sweeper', 'sunUseful'], types: ['fire'], tier: 'B' },
    staraptor: { roles: ['sweeper'], types: ['normal', 'flying'], tier: 'B' },
    poliwrath: { roles: ['rainAbuser'], types: ['water', 'fighting'], tier: 'B'},
    feraligatr: { roles: ['sweeper', 'wallbreaker'], types: ['water'], tier: 'B' },
    togekiss: { roles: ['sweeper'], types: ['flying'], tier: 'C' },
    salamence: { roles: ['sweeper'], types: ['dragon', 'flying'], tier: 'C'},
    mandibuzz: { roles: ['wall'], types: ['dark', 'flying'], tier: 'C' },
    jolteon: { roles: ['sweeper'], types: ['electric'], tier: 'D' },
    milotic: { roles: ['wall'], types: ['water'], tier: 'D' }
    // Aggiungi altri Pokémon qui se necessario
};


const SuggestedMoveset = {
    volcarona: { roles: ['sweeper', 'sunUseful'], types: ['bug', 'fire'], tier: 'S' },
    ferrothorn: { roles: ['rainUseful', 'wall'], types: ['grass', 'steel'], tier: 'A' },
    garchompPhysical: { roles: ['sweeper', 'hazardSetter'], types: ['dragon', 'ground'], tier: 'C' },
    garchomp: { roles: ['sweeper', 'hazardSetter'], types: ['dragon', 'ground'], tier: 'S+' },
    garchompTank: { roles: ['wall', 'hazardSetter'], types: ['dragon', 'ground'], tier: 'S' },
    blissey: { roles: ['wall'], types: ['normal'], tier: 'B' },
    chansey: { roles: ['wall'], types: ['normal'], tier: 'S' },
    scizor: { roles: ['rainUseful', 'sweeper','pivot'], types: ['bug', 'steel'], tier: 'S+' },
    skarmory: { roles: ['wall','hazardSetter','hazardRemoval'], types: ['steel', 'flying'], tier: 'S' },
    zapdos: { roles: ['rainUseful', 'wall','hazardRemoval','pivot'], types: ['electric', 'flying'], tier: 'S+' },
    zapdosTimid: { roles: ['rainUseful', 'sweeper','hazardRemoval','pivot'], types: ['electric', 'flying'], tier: 'A' },
    serperior: { roles: ['rainUseful', 'sweeper'], types: ['grass'], tier: 'S+' },
    serperiorDefogger: { roles: ['rainUseful', 'sweeper','hazardRemoval'], types: ['grass'], tier: 'B' },
    jellicent: { roles: ['wall'], types: ['water', 'ghost'], tier: 'S+' },
    jellicentTrick: { roles: ['wallbreaker'], types: ['water', 'ghost'], tier: 'B' },
    weezing: { roles: ['wall'], types: ['poison'], tier: 'S+' },
    weezingTS: { roles: ['wall','hazardSetter'], types: ['poison'], tier: 'A' },
    mamoswine: { roles: ['sweeper', 'wallbreaker','hazardSetter'], types: ['ice', 'ground'], tier: 'S' },
    dragonite: { roles: ['sweeper', 'sunUseful'], types: ['dragon', 'flying'], tier: 'S' },
    tyranitar: { roles: ['wall','sweeper'], types: ['rock', 'dark'], tier: 'S'},
    rotomwash: { roles: ['wall','pivot','hazardRemoval'], types: ['electric', 'water'], tier: 'S' },
    rotomwashTrick: { roles: ['Wallbreaker','pivot','hazardRemoval'], types: ['electric', 'water'], tier: 'B' },
    gliscor: { roles: ['wall','hazardRemoval'], types: ['ground', 'flying'], tier: 'S' },
    gliscorSweeper: { roles: ['sweeper'], types: ['ground', 'flying'], tier: 'C' },
    starmie: { roles: ['sweeper','hazardRemoval'], types: ['water', 'psychic'], tier: 'S' },
    starmieTank: { roles: ['tank','hazardRemoval'], types: ['water', 'psychic'], tier: 'B' },
    hydreigon: { roles: ['sweeper', 'wallbreaker'], types: ['dark', 'dragon'], tier: 'S' },
    excadrill: { roles: ['rainUseful','hazardSetter','hazardRemoval'], types: ['ground', 'steel'], tier: 'S' },
    excadrillSand: { roles: ['rainUseful','sweeper'], types: ['ground', 'steel'], tier: 'B' },
    breloom: { roles: ['sweeper', 'wallbreaker'], types: ['grass', 'fighting'], tier: 'S' },
    reuniclus: { roles: ['wallbreaker', 'wall'], types: ['psychic'], tier: 'S' },
    pelipper: { roles: ['rainSetter', 'wall','hazardRemoval'], types: ['water', 'flying'], tier: 'A' },
    conkeldurr: { roles: ['sweeper', 'wallbreaker'], types: ['fighting'], tier: 'A' },
    crawdaunt: { roles: ['rainAbuser', 'wallbreaker'], types: ['water', 'dark'], tier: 'A' },
    metagross: { roles: ['wall','hazardSetter'], types: ['steel', 'psychic'], tier: 'A' },
    metagrossPhysical: { roles: ['sweeper','hazardSetter'], types: ['steel', 'psychic'], tier: 'C' },
    gengar: { roles: ['sweeper', 'wallbreaker'], types: ['ghost', 'poison'], tier: 'A' },
    gengarLead: { roles: ['hazardSetter', 'wallbreaker'], types: ['ghost', 'poison'], tier: 'C' },
    amoonguss: { roles: ['wall','pivot'], types: ['grass', 'poison'], tier: 'A' },
    mienshao: { roles: ['sweeper', 'wallbreaker','pivot'], types: ['fighting'], tier: 'A'},
    infernape: { roles: ['sweeper', 'wallbreaker', 'sunUseful'], types: ['fire', 'fighting'], tier: 'A' },
    infernapeSL: { roles: ['sunUseful','hazardSetter'], types: ['fire', 'fighting'], tier: 'D' },
    suicune: { roles: ['wallbreaker','wall'], types: ['water'], tier: 'A' },
    chandelure: { roles: ['wallbreaker', 'sunUseful'], types: ['ghost', 'fire'], tier: 'A' },
    magnezone: { roles: ['sweeper','pivot'], types: ['electric', 'steel'], tier: 'A' },
    bronzong: { roles: ['wall','hazardSetter'], types: ['steel', 'psychic'], tier: 'A' },
    darmanitan: { roles: ['sweeper','pivot', 'wallbreaker', 'sunAbuser'], types: ['fire'], tier: 'A' },
    empoleon: { roles: ['wall','hazardRemoval','hazardSetter'], types: ['water', 'steel'], tier: 'A' },
    tentacruel: { roles: ['wall','hazardRemoval'], types: ['water', 'poison'], tier: 'A' },
    weavile: { roles: ['sweeper','wallbreaker'], types: ['dark', 'ice'], tier: 'A' },
    kingdra: { roles: ['rainAbuser'], types: ['water', 'dragon'], tier: 'A' },
    porygon2: { roles: ['wall'], types: ['normal'], tier: 'A' },
    gyarados: { roles: ['sweeper'], types: ['water', 'flying'], tier: 'B' },
    gastrodon: { roles: ['wall','hazardSetter'], types: ['water', 'ground'], tier: 'B' },
    espeon: { roles: ['wall','hazardRemoval','pivot'], types: ['psychic'], tier: 'B'},
    espeonSweeper: { roles: ['sweeper', 'sunUseful','hazardRemoval'], types: ['psychic'], tier: 'B'},
    torkoal: { roles: ['sunSetter','hazardSetter','hazardRemoval'], types: ['fire'], tier: 'B' },
    porygon_z: { roles: ['sweeper'], types: ['normal'], tier: 'B' },
    lucario: { roles: ['sweeper', 'wallbreaker'], types: ['fighting', 'steel'], tier: 'B' },
    sableye: { roles: ['wall', 'utility'], types: ['dark', 'ghost'], tier: 'B' },
    kabutops: { roles: ['rainAbuser'], types: ['rock', 'water'], tier: 'B' },
    cofagrigus: { roles: ['wall'], types: ['ghost'], tier: 'B' },
    cloyster: { roles: ['sweeper','wallbreaker'], types: ['water', 'ice'], tier: 'B' },
    venusaur: { roles: ['sunAbuser'], types: ['grass', 'poison'], tier: 'B'},
    ditto: { roles: ['utility'], types: ['normal'], tier: 'B' },
    raikou: { roles: ['sweeper'], types: ['electric'], tier: 'B' },
    entei: { roles: ['sweeper', 'sunUseful'], types: ['fire'], tier: 'B' },
    staraptor: { roles: ['sweeper','pivot'], types: ['normal', 'flying'], tier: 'B' },
    poliwrath: { roles: ['rainAbuser'], types: ['water', 'fighting'], tier: 'B'},
    feraligatr: { roles: ['sweeper', 'wallbreaker'], types: ['water'], tier: 'B' },
    togekiss: { roles: ['sweeper','wallbreaker'], types: ['flying'], tier: 'C' },
    salamence: { roles: ['sweeper'], types: ['dragon', 'flying'], tier: 'C'},
    mandibuzz: { roles: ['wall','hazardRemoval'], types: ['dark', 'flying'], tier: 'C' },
    jolteon: { roles: ['sweeper','pivot'], types: ['electric'], tier: 'D' },
    milotic: { roles: ['wall'], types: ['water'], tier: 'D' }
    // Aggiungi altri Pokémon qui se necessario
};

// Definizione delle sinergie tra Pokémon
const synergies = {
    pelipper: { kingdra: 12 },
    kingdra: { pelipper: 40 },
    ferrothorn: { rotomWash: 4 },
    rotomWash: { ferrothorn: 4 },
    torkoal: { darmanitan: 4, venusaur: 4, entei: 4}
};

// Aggiungi pesi ai ruoli per ogni modello di team
const roleWeights = {
    balance: {
        sweeper: 1,
        wallbreaker: 1,
        wall: 1,
        //WEATHER NO
        rainAbuser: 0.5,
        rainSetter: 0.5,
        sunAbuser: 0.5,
        sunSetter: 0.5,
    },
    hyperOffense: {
        sweeper: 1.5, // Gli sweeper sono molto importanti
        wallbreaker: 1.2,
        //WEATHER NO
        rainAbuser: 0.5,
        rainSetter: 0.5,
        sunAbuser: 0.5,
        sunSetter: 0.5,
    },
    bulkyOffense: {
        sweeper: 1,
        wallbreaker: 1.5, // Wallbreaker sono fondamentali
        wall: 1,
        //WEATHER NO
        rainAbuser: 0.5,
        rainSetter: 0.5,
        sunAbuser: 0.5,
        sunSetter: 0.5,
    },
    stall: {
        wall: 1.5, // Le difese sono le più importanti
        wallbreaker: 1,
        //WEATHER NO
        rainAbuser: 0.5,
        rainSetter: 0.5,
        sunAbuser: 0.5,
        sunSetter: 0.5,
    },
    semiStall: {
        wall: 1.5,
        sweeper: 1,
        wallbreaker: 1,
        //WEATHER NO
        rainAbuser: 0.5,
        rainSetter: 0.5,
        sunAbuser: 0.5,
        sunSetter: 0.5,
    },
    rain: {
        rainSetter: 5, // Il rain setter è cruciale
        rainAbuser: 2.5,
        rainUseful: 2,
        //WEATHER NO
        sunAbuser: 0.5,
        sunSetter: 0.5,
    },
    sun: {
        sunSetter: 5, // Il sun setter è cruciale
        sunAbuser: 2.5,
        sunUseful: 2,
        //WEATHER NO
        rainAbuser: 0.5,
        rainSetter: 0.5,
    }
};

// Lista di mosse hazard e hazard removal
const hazardMoves = ['stealth rock', 'spikes', 'toxic spikes'];
const hazardRemovalMoves = ['defog', 'rapid spin'];
const utilityMoves = ['trick', 'taunt'];
const pivotmoves = ['u-turn', 'volt switch', 'teleport','baton pass'];

// Modelli di team con i requisiti di ruolo
const teamModels = {
    balance: {
        roles: { sweeper: [1, 4], wallbreaker: [1, 2], wall: [2, 3], hazardRemoval: [1], hazardSetter: [1] },
    },
    hyperOffense: {
        roles: { sweeper: [4, 6], wallbreaker: [1, 3], stallbreaker: [0, 1] },
    },
    bulkyOffense: {
        roles: { wallbreaker: [2, 4], hazardRemoval: [0, 1], hazardSetter: [1, 1]},
 
    },
    stall: {
        roles: { wall: [5, 6], wallbreaker: [0, 1], hazardRemoval: [1, 1], hazardSetter: [1, 2]},
    },
    semiStall: {
        roles: { wall: [4, 5], sweeper: [0, 1], wallbreaker: [0, 2], hazardRemoval: [1, 1], hazardSetter: [1, 2] },
    },
    rain: {
        roles: { rainSetter: [0, 1], rainAbuser: [1, 2], rainUseful: [0, 4], hazardRemoval: [1, 1]},
    },
    sun: {
        roles: { sunSetter: [0, 1], sunAbuser: [1, 2], sunUseful: [0, 2], hazardRemoval: [1, 2]},
    }
};

// Funzione per ottenere i dati del team
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



// Funzione che aggiunge ruoli in base alle mosse del Pokémon
function addRolesBasedOnMoves(pokemon) {
    let roles = [];

    // Controlla se ha mosse hazard
    if (pokemon.moves.some(move => hazardMoves.includes(move))) {
        roles.push('hazardSetter');
    }
    
    // Controlla se ha mosse di hazard removal
    if (pokemon.moves.some(move => hazardRemovalMoves.includes(move))) {
        roles.push('hazardRemoval');
    }

    // Controlla se ha mosse utility (trick o taunt)
    if (pokemon.moves.some(move => utilityMoves.includes(move))) {
        roles.push('stallbreaker');
    }

    // Controlla se ha mosse di pivot (U-turn, Volt Switch, etc.)
    if (pokemon.moves.some(move => pivotmoves.includes(move))) {
        roles.push('pivot');
    }

    return roles;
}


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
    flying: { weakTo: ['electric', 'ice', 'rock'], resists: ['grass', 'fighting', 'bug'], immuneTo: ['ground'] },
    psychic: { weakTo: ['bug', 'ghost', 'dark'], resists: ['fighting', 'psychic'], immuneTo: [] },
    bug: { weakTo: ['fire', 'flying', 'rock', 'ghost', 'poison'], resists: ['grass', 'fighting', 'ground'], immuneTo: [] },
    rock: { weakTo: ['water', 'grass', 'fighting', 'ground', 'steel'], resists: ['normal', 'flying', 'poison', 'fire'], immuneTo: [] },
    ghost: { weakTo: ['ghost', 'dark'], resists: ['poison', 'bug'], immuneTo: ['normal', 'fighting'] },
    dragon: { weakTo: ['ice', 'dragon'], resists: ['fire', 'water', 'electric', 'grass'], immuneTo: [] },
    dark: { weakTo: ['fighting', 'bug'], resists: ['ghost', 'dark'], immuneTo: ['psychic'] },
    steel: { weakTo: ['fire', 'fighting', 'ground'], resists: ['normal', 'flying', 'rock', 'bug', 'steel', 'grass', 'ice', 'psychic', 'dragon', 'ghost', 'dark'], immuneTo: ['poison'] }
};
function calculateWeaknesses(team) {
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
        psychic: 0
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



function evaluateTeamAgainstModel(team, bestModel, rainBonusApplied) {
    if (!teamModels[bestModel]) {
        console.error(`Modello "${bestModel}" non trovato in teamModels.`);
        return -Infinity;
    }

    let roles = { rainSetter: 0, rainAbuser: 0, rainUseful: 0, sweeper: 0, wallbreaker: 0, wall: 0, pivot: 0, stallbreaker: 0, hazardRemoval: 0, hazardSetter: 0, sunSetter: 0, sunAbuser: 0, sunUseful: 0};
    let score = 0;
    let hasRainSetter = team.some(pokemon => pokemonRoles[pokemon.name]?.roles.includes('rainSetter'));

    // Conta i ruoli nel team e identifica hazard, hazard removal, trick o taunt
    team.forEach(pokemon => {
        if (pokemonRoles[pokemon.name]) {
            // Conta i ruoli predefiniti
            pokemonRoles[pokemon.name].roles.forEach(role => {
                roles[role]++;
            });
        }
        
        // Aggiungi ruoli dinamici basati sulle mosse
        const dynamicRoles = addRolesBasedOnMoves(pokemon);
        dynamicRoles.forEach(role => {
            roles[role]++;
        });
    });

    // Aumenta il punteggio se i ruoli corrispondono ai requisiti del modello
    for (let role in teamModels[bestModel].roles) {
        const required = teamModels[bestModel].roles[role];

        if (Array.isArray(required) && typeof roles[role] === 'number') {
            if (roles[role] >= required[0] && roles[role] <= required[1]) {
                score += roles[role] * 10; // Assegna 10 punti per ogni Pokémon che ricopre questo ruolo
            }
        }
    }

    // Se esiste un rainSetter nel team, aumenta il punteggio solo per il modello "rain" una volta
    if (hasRainSetter && bestModel === 'rain' && !rainBonusApplied) {
        console.log("Rain setter è nel team, aumento del punteggio per il modello rain.");
        score += 30; // Aggiungi il bonus per il rain setter
    }

    return score;
}




function suggestBestPokemon(team, modelName) {
    console.log("Team:", team);
    console.log("Model:", modelName);

    let suggestions = [];
    let teamWeaknesses = calculateWeaknesses(team); // Calcola le debolezze attuali del team
    console.log("Team Weaknesses", teamWeaknesses);

    // Inizializza un oggetto roles per contare quanti Pokémon nel team hanno ciascun ruolo
    let roles = { rainSetter: 0, rainAbuser: 0, rainUseful: 0, sweeper: 0, wallbreaker: 0, wall: 0, pivot: 0, stallbreaker: 0, hazardRemoval: 0, hazardSetter: 0, sunSetter: 0, sunAbuser: 0, sunUseful: 0};

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
    for (let pokemon in SuggestedMoveset) {
        if (!team.some(p => p.name === pokemon)) {
            let score = 0; // Il punteggio parte da 0

            let skip = false; // Variabile per determinare se saltare questo Pokémon

            // Verifica i ruoli che sono stati dichiarati nel modello
            for (let role in model.roles) {
                const roleReq = model.roles[role];
                // Se il ruolo è già oltre il limite, salta questo Pokémon
                if (Array.isArray(roleReq)) {
                    if (SuggestedMoveset[pokemon].roles.includes(role) && roles[role] >= roleReq[1]) {
                        skip = true;
                        break; // Interrompi il ciclo se uno dei ruoli è già pieno
                    }
                }
            }

            if (skip) continue; // Se il Pokémon non è valido, passa al successivo

            // Aumenta il punteggio se il Pokémon copre le debolezze del team
            teamWeaknesses.forEach(([weakType]) => {
                SuggestedMoveset[pokemon].types.forEach(type => {
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
                    if (SuggestedMoveset[pokemon].roles.includes(role) && roles[role] < roleReq[1]) {
                        score += 10 * roleWeight; // Aumenta il punteggio in base al peso
                    }
                } else {
                    if (SuggestedMoveset[pokemon].roles.includes(role)) {
                        score += 10 * roleWeight; // Aumenta il punteggio in base al peso
                    }
                }
            }
            // Aggiungi il bonus di 10 punti per i Pokémon in tier S+
            const tier = SuggestedMoveset[pokemon].tier || 'B'; // Se non ha tier, predefinito è B
            if (tier === 'S+') {
                score += 10;
            }
            if (tier === 'S') {
                score += 8;
            }
            if (tier === 'A') {
                score += 5;
            }
            if (tier === 'B') {
                score += 3;
            }
            if (tier === 'C') {
                score += 1;
            }
            if (tier === 'D') {
                score -= 2;
            }

            // Aggiungi bonus per sinergie con i Pokémon già nel team
            team.forEach(teamPokemon => {
                const synergyPartners = synergies[teamPokemon.name] || {};
                if (synergyPartners[pokemon]) {
                    score += synergyPartners[pokemon]; // Aggiungi il punteggio specifico per la sinergia
                }

                let hasHazardRemoval = team.some(p => 
                    pokemonRoles[p.name]?.roles.includes('hazardRemoval') || 
                    addRolesBasedOnMoves(p).includes('hazardRemoval')
                );

                // Se non ci sono hazardRemoval, Consiglia hazardRemoval per pokemon come Volcarona o Dragonite
                if (!hasHazardRemoval && (teamPokemon.name === 'volcarona' || teamPokemon.name === 'dragonite') && SuggestedMoveset[pokemon].roles.includes('hazardRemoval')) {
                    score += 11; // Aggiungi 11 punti per hazardRemoval se Volcarona o Dragonite sono nel team e non ci sono hazardRemoval
                }
            });



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




function worstPokemonCalc(pokemon, team, model, roles, weaknesses) {
    let score = 0;

    // Ottieni i ruoli derivati dalle mosse del Pokémon
    const moveBasedRoles = addRolesBasedOnMoves(pokemon);
    const combinedRoles = [...(pokemonRoles[pokemon.name]?.roles || []), ...moveBasedRoles]; // Combina i ruoli predefiniti con quelli derivati dalle mosse

    // Aggiungi punteggio per i ruoli del Pokémon in base al modello
    for (let role in model.roles) {
        const roleReq = model.roles[role];
        const roleWeight = roleWeights[model.name] || 1; // Pesi specifici per il modello

        if (Array.isArray(roleReq)) {
            if (combinedRoles.includes(role) && roles[role] < roleReq[1]) {
                score += 10 * roleWeight; // Aggiungi punteggio in base al peso del ruolo
            }
        } else {
            if (combinedRoles.includes(role)) {
                score += 10 * roleWeight; // Aggiungi punteggio in base al peso del ruolo
            }
        }
    }

    // Aumenta il punteggio per la copertura delle debolezze del team
    weaknesses.forEach(([weakType]) => {
        pokemonRoles[pokemon.name]?.types.forEach(type => {
            const resists = typeEffectiveness[type].resists || [];
            if (resists.includes(weakType)) {
                score += 9; // Aggiungi punti se il Pokémon resiste a una debolezza del team
            }
        });
    });

    // Aggiungi punti per sinergie con altri membri del team
    team.forEach(teamPokemon => {
        const synergyPartners = synergies[teamPokemon.name] || {};
        if (synergyPartners[pokemon.name]) {
            score += synergyPartners[pokemon.name]; // Aggiungi punti per sinergia
        }
    });

    // Aggiungi bonus o penalità basata sul tier del Pokémon
    const tier = SuggestedMoveset[pokemon.name]?.tier || 'D';
    if (tier === 'S+') {
        score += 10;
    } else if (tier === 'S') {
        score += 8;
    } else if (tier === 'A') {
        score += 5;
    } else if (tier === 'B') {
        score += 3;
    } else if (tier === 'C') {
        score += 1;
    } else if (tier === 'D') {
        score -= 2;
    }

    return score;
}

document.getElementById('calculate').addEventListener('click', function() {
    let team = getTeamData();

    // Identifica il modello di team più vicino
    let bestModel = null;
    let bestScore = -Infinity;
    let rainBonusApplied = false;

    for (let modelName in teamModels) {
        let score = evaluateTeamAgainstModel(team, modelName, rainBonusApplied);
        if (modelName === 'rain' && score > bestScore && team.some(pokemon => pokemonRoles[pokemon.name]?.roles.includes('rainSetter'))) {
            rainBonusApplied = true;
        }

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

        // Calcola il punteggio di ciascun Pokémon nel team
        let roles = { rainSetter: 0, rainAbuser: 0, sweeper: 0, wallbreaker: 0, wall: 0, pivot: 0, stallbreaker: 0, hazardRemoval: 0, hazardSetter: 0, sunSetter: 0, sunAbuser: 0, sunUseful: 0 };
        team.forEach(pokemon => {
            pokemonRoles[pokemon.name].roles.forEach(role => {
                roles[role]++;
            });
        });

        let worstPokemon = team.reduce((worst, pokemon) => {
            let pokemonScore = worstPokemonCalc(pokemon, team, teamModels[bestModel], roles, weaknesses);
            return pokemonScore < worst.score ? { name: pokemon.name, score: pokemonScore } : worst;
        }, { score: Infinity });

        let resultText = `Team Model: ${bestModel}\n`;

        // Stampa le debolezze con il numero accanto tra parentesi
        if (weaknesses.length > 0) {
            const weaknessTypes = weaknesses.map(([type, count]) => `${type}(${count})`).join(', ');
            resultText += `Weaknesses: ${weaknessTypes}\n`;
        } else {
            resultText += `Weaknesses: None\n`;
        }

        resultText += `Worst Pokémon: ${worstPokemon.name} (Score: ${worstPokemon.score})\n`;
        suggestions.forEach(suggestion => {
            resultText += `Suggested Pokémon: ${suggestion.name} (Score: ${suggestion.score})\n`;
        });

        document.getElementById('result').innerText = resultText;
    }
});