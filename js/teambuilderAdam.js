const pokemonRoles = {
    volcarona: { roles: ['sweeper', 'sunUseful'], types: ['bug', 'fire'], tier: 'S' ,base:'volcarona'},
    ferrothorn: { roles: ['rainUseful', 'wall'], types: ['grass', 'steel'], tier: 'A' },
    garchomp: { roles: ['sweeper'], types: ['dragon', 'ground'], tier: 'S+' },
    garchomptank: { roles: ['wall'], types: ['dragon', 'ground'], tier: 'S',base:'garchomp'},
    blissey: { roles: ['wall'], types: ['normal'], tier: 'B' },
    chansey: { roles: ['wall'], types: ['normal'], tier: 'S' },
    scizor: { roles: ['rainUseful', 'sweeper'], types: ['bug', 'steel'], tier: 'S+' },
    skarmory: { roles: ['wall'], types: ['steel', 'flying'], tier: 'S' },
    zapdos: { roles: ['rainUseful', 'wall'], types: ['electric', 'flying'], tier: 'S' },
    zapdostimid: { roles: ['rainUseful', 'sweeper'], types: ['electric', 'flying'], tier: 'S+',base:'zapdos' },
    serperior: { roles: ['rainUseful', 'sweeper'], types: ['grass'], tier: 'S+' },
    jellicent: { roles: ['wall'], types: ['water', 'ghost'], tier: 'S+' },
    weezing: { roles: ['wall'], types: ['poison'], tier: 'S+' },
    mamoswine: { roles: ['sweeper', 'wallbreaker'], types: ['ice', 'ground'], tier: 'S' },
    dragonite: { roles: ['sweeper', 'rainUseful'], types: ['dragon', 'flying'], tier: 'S' },
    tyranitar: { roles: ['wall'], types: ['rock', 'dark'], tier: 'S'},
    rotomwash: { roles: ['wall'], types: ['electric', 'water'], tier: 'S' },
    gliscor: { roles: ['wall'], types: ['ground', 'flying'], tier: 'S' },
    gliscorsweeper: { roles: ['sweeper'], types: ['ground', 'flying'], tier: 'S' },
    starmie: { roles: ['sweeper'], types: ['water', 'psychic'], tier: 'S' },
    hydreigon: { roles: ['sweeper', 'wallbreaker'], types: ['dark', 'dragon'], tier: 'S' },
    excadrill: { roles: ['sweeper','rainUseful'], types: ['ground', 'steel'], tier: 'S' },
    breloom: { roles: ['sweeper', 'wallbreaker'], types: ['grass', 'fighting'], tier: 'S' },
    reuniclus: { roles: ['wallbreaker', 'wall'], types: ['psychic'], tier: 'S' },
    pelipper: { roles: ['rainSetter', 'wall'], types: ['water', 'flying'], tier: 'A' },
    conkeldurr: { roles: ['sweeper', 'wallbreaker'], types: ['fighting'], tier: 'A' },
    crawdaunt: { roles: ['rainAbuser', 'wallbreaker'], types: ['water', 'dark'], tier: 'A' },
    metagross: { roles: ['wall'], types: ['steel', 'psychic'], tier: 'A' },
    metagrossphysical: { roles: ['sweeper'], types: ['steel', 'psychic'], tier: 'A' },
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
    espeon: { roles: ['wall', 'sunUseful'], types: ['psychic'], tier: 'B'},
    espeonsweeper: { roles: ['sweeper', 'sunUseful'], types: ['psychic'], tier: 'B',base:'espeon'},
    torkoal: { roles: ['sunSetter'], types: ['fire'], tier: 'B' },
    porygon_z: { roles: ['sweeper'], types: ['normal'], tier: 'B' },
    lucario: { roles: ['sweeper', 'wallbreaker'], types: ['fighting', 'steel'], tier: 'B' },
    sableye: { roles: ['wall', 'utility'], types: ['ghost', 'dark'], tier: 'B' },
    kabutops: { roles: ['rainAbuser'], types: ['rock', 'water'], tier: 'B' },
    cofagrigus: { roles: ['wall'], types: ['ghost'], tier: 'B' },
    cloyster: { roles: ['sweeper'], types: ['water', 'ice'], tier: 'B' },
    venusaur: { roles: ['sunAbuser'], types: ['grass', 'poison'], tier: 'B'},
    ditto: { roles: ['utility'], types: ['normal'], tier: 'B' },
    raikou: { roles: ['sweeper'], types: ['electric'], tier: 'B' },
    entei: { roles: ['sweeper', 'sunUseful'], types: ['fire'], tier: 'B' },
    staraptor: { roles: ['sweeper'], types: ['normal', 'flying'], tier: 'B' },
    poliwrath: { roles: ['rainAbuser'], types: ['water', 'fighting'], tier: 'B'},
    feraligatr: { roles: ['sweeper'], types: ['water'], tier: 'B' },
    togekiss: { roles: ['sweeper'], types: ['flying'], tier: 'C' },
    salamence: { roles: ['sweeper'], types: ['dragon', 'flying'], tier: 'C'},
    mandibuzz: { roles: ['wall'], types: ['dark', 'flying'], tier: 'C' },
    jolteon: { roles: ['sweeper'], types: ['electric'], tier: 'D' },
    milotic: { roles: ['wall'], types: ['water'], tier: 'D' },
    houndoom: { roles: ['sweeper'],types:['fire','dark'], tier:'D'},
    clefable:{roles: ['wall'],types:['normal'],tier:'C'},
    lanturn:{roles: ['wall'],types:['water','electric'], tier:'D'},
    // Aggiungi altri Pokémon qui se necessario
};


let SuggestedMoveset = {
    volcarona: { roles: ['sweeper', 'sunUseful'], types: ['bug', 'fire'], tier: 'S' },
    ferrothorn: { roles: ['rainUseful', 'wall'], types: ['grass', 'steel'], tier: 'A' },
    garchompPhysical: { roles: ['sweeper'], types: ['dragon', 'ground'], tier: 'C',base:'garchomp' },
    garchomp: { roles: ['sweeper', 'hazardSetter'], types: ['dragon', 'ground'], tier: 'S+' ,base:'garchomp'},
    garchomptank: { roles: ['wall', 'hazardSetter'], types: ['dragon', 'ground'], tier: 'S' ,base:'garchomp'},
    blissey: { roles: ['wall'], types: ['normal'], tier: 'B' },
    chansey: { roles: ['wall'], types: ['normal'], tier: 'S' },
    scizor: { roles: ['rainUseful', 'sweeper','pivot'], types: ['bug', 'steel'], tier: 'S+' ,priorities:['bullet punch']},
    skarmory: { roles: ['wall','hazardSetter','hazardRemoval'], types: ['steel', 'flying'], tier: 'S' },
    zapdos: { roles: ['rainUseful', 'wall','hazardRemoval','pivot'], types: ['electric', 'flying'], tier: 'S+' },
    zapdostimid: { roles: ['rainUseful', 'sweeper','pivot'], types: ['electric', 'flying'], tier: 'A',base:'zapdos' },
    serperior: { roles: ['rainUseful', 'sweeper'], types: ['grass'], tier: 'S+' },
    serperiorDefogger: { roles: ['rainUseful', 'hazardRemoval'], types: ['grass'], tier: 'B' ,base:'serperior'},
    jellicent: { roles: ['wall'], types: ['water', 'ghost'], tier: 'S+' },
    jellicenttrick: { roles: ['wallbreaker'], types: ['water', 'ghost'], tier: 'B' ,base:'jellicent'},
    weezing: { roles: ['wall'], types: ['poison'], tier: 'S+' },
    weezingTS: { roles: ['wall','hazardSetter'], types: ['poison'], tier: 'A' ,base:'weezing'},
    mamoswine: { roles: ['sweeper', 'wallbreaker','hazardSetter'], types: ['ice', 'ground'], tier: 'S',priorities:['ice shard']},
    dragonite: { roles: ['sweeper', 'rainUseful'], types: ['dragon', 'flying'], tier: 'S' },
    tyranitar: { roles: ['wall','sweeper','wallbreaker'], types: ['rock', 'dark'], tier: 'S'},
    rotomwash: { roles: ['wall','pivot','hazardRemoval'], types: ['electric', 'water'], tier: 'S' },
    rotomwashtrick: { roles: ['Wallbreaker','pivot','hazardRemoval'], types: ['electric', 'water'], tier: 'B',base:'rotomwash'},
    gliscor: { roles: ['wall','hazardRemoval'], types: ['ground', 'flying'], tier: 'S' },
    gliscorsweeper: { roles: ['sweeper'], types: ['ground', 'flying'], tier: 'C',base:'gliscor' },
    starmie: { roles: ['sweeper','hazardRemoval'], types: ['water', 'psychic'], tier: 'S' },
    starmietank: { roles: ['tank','hazardRemoval'], types: ['water', 'psychic'], tier: 'B' ,base:'starmie'},
    hydreigon: { roles: ['sweeper', 'wallbreaker'], types: ['dark', 'dragon'], tier: 'S' },
    excadrill: { roles: ['rainUseful','hazardSetter','hazardRemoval'], types: ['ground', 'steel'], tier: 'S' },
    excadrillsand: { roles: ['rainUseful','sweeper'], types: ['ground', 'steel'], tier: 'B',base:'excadrill' },
    breloom: { roles: ['sweeper', 'wallbreaker'], types: ['grass', 'fighting'], tier: 'S',priorities:['mach punch'] },
    reuniclus: { roles: ['wallbreaker', 'wall'], types: ['psychic'], tier: 'S' },
    pelipper: { roles: ['rainSetter', 'wall','hazardRemoval'], types: ['water', 'flying'], tier: 'A' },
    conkeldurr: { roles: ['sweeper', 'wallbreaker'], types: ['fighting'], tier: 'A' ,priorities:['mach punch'] },
    crawdaunt: { roles: ['rainAbuser', 'wallbreaker'], types: ['water', 'dark'], tier: 'A' ,priorities:['aqua jet']},
    metagross: { roles: ['wall','hazardSetter'], types: ['steel', 'psychic'], tier: 'A' },
    metagrossphysical: { roles: ['sweeper','hazardSetter'], types: ['steel', 'psychic'], tier: 'C',priorities:['bullet punch'],base:'metagross'},
    gengar: { roles: ['sweeper', 'wallbreaker'], types: ['ghost', 'poison'], tier: 'A' },
    gengarlead: { roles: ['hazardSetter', 'wallbreaker'], types: ['ghost', 'poison'], tier: 'C' ,base:'gengar'},
    amoonguss: { roles: ['wall','pivot'], types: ['grass', 'poison'], tier: 'A' },
    mienshao: { roles: ['sweeper', 'wallbreaker','pivot'], types: ['fighting'], tier: 'A',priorities:['fake out']},
    infernape: { roles: ['sweeper', 'wallbreaker', 'sunUseful'], types: ['fire', 'fighting'], tier: 'A' ,priorities:['mach punch','fake out','vacuum wave']},
    infernapesl: { roles: ['sunUseful','hazardSetter'], types: ['fire', 'fighting'], tier: 'D' ,base:'infernape',priorities:['mach punch','fake out','vacuum wave']},
    suicune: { roles: ['wallbreaker','wall'], types: ['water'], tier: 'A' },
    chandelure: { roles: ['wallbreaker', 'sunUseful'], types: ['ghost', 'fire'], tier: 'A' },
    magnezone: { roles: ['sweeper','pivot'], types: ['electric', 'steel'], tier: 'A' },
    bronzong: { roles: ['wall','hazardSetter'], types: ['steel', 'psychic'], tier: 'A' },
    darmanitan: { roles: ['sweeper','pivot', 'wallbreaker', 'sunAbuser'], types: ['fire'], tier: 'A' },
    empoleon: { roles: ['wall','hazardRemoval','hazardSetter'], types: ['water', 'steel'], tier: 'A' },
    tentacruel: { roles: ['wall','hazardRemoval'], types: ['water', 'poison'], tier: 'A' },
    weavile: { roles: ['sweeper','wallbreaker'], types: ['dark', 'ice'], tier: 'A' ,priorities:['ice shard']},
    kingdra: { roles: ['rainAbuser'], types: ['water', 'dragon'], tier: 'A' },
    porygon2: { roles: ['wall'], types: ['normal'], tier: 'A' },
    gyarados: { roles: ['sweeper'], types: ['water', 'flying'], tier: 'B' },
    gastrodon: { roles: ['wall','hazardSetter'], types: ['water', 'ground'], tier: 'B' },
    espeon: { roles: ['wall','hazardRemoval','pivot'], types: ['psychic'], tier: 'B'},
    espeonsweeper: { roles: ['sweeper', 'sunUseful','hazardRemoval'], types: ['psychic'], tier: 'B',base:'espeon'},
    torkoal: { roles: ['sunSetter','hazardSetter','hazardRemoval'], types: ['fire'], tier: 'B' },
    porygon_z: { roles: ['sweeper'], types: ['normal'], tier: 'B' },
    lucario: { roles: ['sweeper', 'wallbreaker'], types: ['fighting', 'steel'], tier: 'B', priorities:['extreme speed','vacuum wave','bullet punch'] },
    sableye: { roles: ['wall', 'utility'], types: ['dark', 'ghost'], tier: 'B' },
    kabutops: { roles: ['rainAbuser'], types: ['rock', 'water'], tier: 'B' },
    cofagrigus: { roles: ['wall'], types: ['ghost'], tier: 'B' },
    cloyster: { roles: ['sweeper','wallbreaker'], types: ['water', 'ice'], tier: 'B',priorities:['ice shard'] },
    venusaur: { roles: ['sunAbuser'], types: ['grass', 'poison'], tier: 'B'},
    ditto: { roles: ['utility'], types: ['normal'], tier: 'B' },
    raikou: { roles: ['sweeper'], types: ['electric'], tier: 'B' },
    entei: { roles: ['sweeper', 'sunUseful'], types: ['fire'], tier: 'B',priorities:['extreme speed'] },
    staraptor: { roles: ['sweeper','pivot'], types: ['normal', 'flying'], tier: 'B' },
    poliwrath: { roles: ['rainAbuser'], types: ['water', 'fighting'], tier: 'B'},
    feraligatr: { roles: ['sweeper', 'wallbreaker'], types: ['water'], tier: 'B',priorities:['aqua jet'] },
    togekiss: { roles: ['sweeper','wallbreaker'], types: ['flying'], tier: 'C' },
    salamence: { roles: ['sweeper'], types: ['dragon', 'flying'], tier: 'C'},
    mandibuzz: { roles: ['wall','hazardRemoval'], types: ['dark', 'flying'], tier: 'C' },
    jolteon: { roles: ['sweeper','pivot'], types: ['electric'], tier: 'D' },
    milotic: { roles: ['wall'], types: ['water'], tier: 'D' },
    houndoom: { roles: ['sweeper'],types:['fire','dark'], tier:'D',priorities:['sucker punch']},
    clefable:{roles: ['wall','hazardSetter'],types:['normal'],tier:'C'},
    lanturn:{roles: ['wall'],types:['water','electric'], tier:'D'},

    // Aggiungi altri Pokémon qui se necessario
};

// Definizione delle sinergie tra Pokémon
const synergies = {
    mienshao: { amoonguss:3 },
    amoonguss: { mienshao: 3 },
};

// Aggiungi pesi ai ruoli per ogni modello di team
const roleWeights = {
    balance: {
        sweeper: 1,
        wallbreaker: 1,
        wall: 1,
    },
    hyperOffense: {
        sweeper: 1.5, // Gli sweeper sono molto importanti
        wallbreaker: 1.2,
    },
    bulkyOffense: {
        sweeper: 1,
        wallbreaker: 1.2,
        wall: 1,
    },
    stall: {
        wall: 1.5, // Le difese sono le più importanti
        wallbreaker: 1.1,
    },
    semiStall: {
        wall: 1.5,
        sweeper: 1,
        wallbreaker: 1,
    },
    rain: {
        rainSetter: 5, // Il rain setter è cruciale
        rainAbuser: 2.5,
        rainUseful: 2,
    },
    sun: {
        sunSetter: 5, // Il sun setter è cruciale
        sunAbuser: 2.5,
        sunUseful: 2,
    }
};


// Lista di mosse hazard e hazard removal
const hazardMoves = ['stealth rock', 'spikes', 'toxic spikes'];
const hazardRemovalMoves = ['defog', 'rapid spin'];
const utilityMoves = ['trick', 'taunt'];
const pivotmoves = ['u-turn', 'volt switch', 'teleport','baton pass'];
const stallmoves = ['whirlwind','roar','haze','will-o-wisp','dragon tail','thunder wave','soft-boiled','recover','roost'];
const sweepermoves=['swords dance'];
const prioritymoves=['extreme speed','ice shard','bullet punch','mach punch','sucker punch','fake out','aqua jet']

// Modelli di team con i requisiti di ruolo
const teamModels = {
    balance: {
        roles: { sweeper: [1, 4], wallbreaker: [1, 2], wall: [2, 3], hazardRemoval: [1, 1], hazardSetter: [1, 1] },
    },
    offensive:{
        roles: { sweeper: [1, 4], wallbreaker: [1, 2], wall:[1,2],hazardRemoval:[1,2],hazardSetter:[0,1], pivot:[1,2]},
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
        roles: { sunSetter: [0, 1], sunAbuser: [1, 2], sunUseful: [0, 3], hazardRemoval: [1, 2]},
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
            team.push({ name: pokemon, moves, index:i });
        }
    }
    return team;
}



// Funzione che aggiunge ruoli in base alle mosse del Pokémon
function addRolesBasedOnMoves(pokemon) {
    let roles = [];

    if (pokemon.moves!=undefined)
    {
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
            roles.push('wallbreaker');
        }
    
        // Controlla se ha mosse di pivot (U-turn, Volt Switch, etc.)
        if (pokemon.moves.some(move => pivotmoves.includes(move))) {
            roles.push('pivot');
        }

        // Controlla se ha mosse che forzano il cambio(roar) o rimuovono stats(haze) o nerfano stats(will-o-wisp) o cure
        if (pokemon.moves.some(move => stallmoves.includes(move))) {
            roles.push('wall');
        } 

        //controlla se ha mosse di setup per dare ruolo sweeper
        if (pokemon.moves.some(move => sweepermoves.includes(move))) {
            roles.push('sweeper');
        } 
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
    bug: { weakTo: ['fire', 'flying', 'rock'], resists: ['grass', 'fighting', 'ground'], immuneTo: [] },
    rock: { weakTo: ['water', 'grass', 'fighting', 'ground', 'steel'], resists: ['normal', 'flying', 'poison', 'fire'], immuneTo: [] },
    ghost: { weakTo: ['ghost', 'dark'], resists: ['poison', 'bug'], immuneTo: ['normal', 'fighting'] },
    dragon: { weakTo: ['ice', 'dragon'], resists: ['fire', 'water', 'electric', 'grass'], immuneTo: [] },
    dark: { weakTo: ['fighting', 'bug'], resists: ['ghost', 'dark'], immuneTo: ['psychic'] },
    steel: { weakTo: ['fire', 'fighting', 'ground'], resists: ['normal', 'flying', 'rock', 'bug', 'steel', 'grass', 'ice', 'psychic', 'dragon', 'ghost', 'dark'], immuneTo: ['poison'] }
};

const pokemonAbilities = {
    "Chandelure": "Flash Fire",
    "Rotomwash": "Levitate",
    "Hydreigon":"Levitate",
    "Houndoom":"Flash Fire",
    "Mamoswine":"Thick Fat",
    "Dragonite":"Multiscale",
    "Skarmory":"Sturdy",
    "Lanturn":"Volt Absorb",
    "Jolteon":"Volt Absorb",
    // Aggiungi altri Pokémon e abilità qui
};

const allTypes=['normal','fire','water','grass','electric','ice','fighting','poison','ground','flying','psychic','bug','rock','ghost','dragon','dark','steel']
function calculateWeaknesses(team) {
    let typeWeaknessChart = {
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
        typeWeaknessChart=calcSingleMonWeaknesses(typeWeaknessChart,pokemon.name,pokemon.index)
    });
    
    return Object.entries(typeWeaknessChart).filter(([type, count]) => count >= 1); //Adam, penso bisogna essere coscienti che si è deboli ad un certo tipo
}

function start(){
    let i=1;

    while (i<=6) {
        updateAbilityCheckbox(i);
        i++;
    }

    createSetWithCheckedAbility();
}

function capitalize(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1).toLowerCase();
}
function createSetWithCheckedAbility(){

    for(let p in SuggestedMoveset)
    {

        let Ability="";
        let Poke=""; 

        if (pokemonAbilities[capitalize(p)])
        {
            Poke=p.toLowerCase();
            Ability=pokemonAbilities[capitalize(p)];
        }
        else if(pokemonAbilities[capitalize(SuggestedMoveset[p].base)])
        {
            Poke=SuggestedMoveset[p].base;
            Ability=pokemonAbilities[capitalize(SuggestedMoveset[p].base)];
        }

        if(Ability!=""){
            console.log(SuggestedMoveset[p].priorities);
            SuggestedMoveset[p+" Ability "+Ability]={roles:SuggestedMoveset[p].roles,types:SuggestedMoveset[p].types,tier:SuggestedMoveset[p].tier,base:Poke,ChkAb:Ability,priorities:SuggestedMoveset[p].priorities};
        }
    }

}

function updateAbilityCheckbox(index) {
    const pokemonInput = document.getElementById(`pokemon-${index}`);
    const abilitiesContainer = document.getElementById(`abilities-${index}`);
    const pokemonName = capitalize(pokemonInput.value);

    // Pulisce il box (lo cancellas)
    abilitiesContainer.innerHTML = "";

    // Controlla se il Pokémon inserito è nella lista
    if (pokemonAbilities[pokemonName]) {

        const ability = pokemonAbilities[pokemonName];
        // Crea un checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `ability-${index}`;
        checkbox.name = `ability-${index}`;
        checkbox.value = ability;

        // Crea il label
        const label = document.createElement("label");
        label.htmlFor = `ability-${index}`;
        label.textContent = ability;
        label.style.width="150%";

        abilitiesContainer.style.display="flex";
        abilitiesContainer.style.alignItems="center";
        abilitiesContainer.style.marginBottom="1rem";
        abilitiesContainer.appendChild(checkbox);
        abilitiesContainer.appendChild(label);
    }
}

function calcSingleMonWeaknesses(typeWeakness,poke,index=0)
{
    let types;
    let found=true;
    if (pokemonRoles[poke])
    {
        types=pokemonRoles[poke].types;
    }
    else if(SuggestedMoveset[poke])
    {
        types=SuggestedMoveset[poke].types;
    }
    else
    {
        found=false
    }

    if (found) {
        
        const [type1, type2] = types;
        

        //TEMPORANEI QUESTI LET, da assegnare alle abilità una proprietà immune to e resist to e valutare quelli
        let levitate=false;
        let flashFire=false;
        let thickFat=false;
        let voltAbsorb=false;

        let type1WeaknessChart = {
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
        let type2WeaknessChart = {
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

        // Gestione del primo tipo
        if (typeEffectiveness[type1]) {
            typeEffectiveness[type1].weakTo.forEach(t => type1WeaknessChart[t]=1);
            typeEffectiveness[type1].resists.forEach(t => type1WeaknessChart[t]=-1);
            typeEffectiveness[type1].immuneTo.forEach(t => type1WeaknessChart[t]=-2);
        } else{
            console.log(`Pokémon: ${poke}, Tipo 1: ${type1}, Tipo 2: ${type2}`);
        }

        // Gestione del secondo tipo
        if (type2 && typeEffectiveness[type2]) {
            typeEffectiveness[type2].weakTo.forEach(t => {
                if (!typeEffectiveness[type1].immuneTo.includes(t)) {
                    type2WeaknessChart[t]=1;
                }
            });
            typeEffectiveness[type2].resists.forEach(t => {
                if (!typeEffectiveness[type1].immuneTo.includes(t)) {
                    type2WeaknessChart[t]=-1;
                }
            });
            typeEffectiveness[type2].immuneTo.forEach(t => {
                type2WeaknessChart[t] = -2;
            });
        }
        

        levitate=(chkIfAbilitySelected(poke,SuggestedMoveset[poke].ChkAb,"Levitate",index));

        flashFire=(chkIfAbilitySelected(poke,SuggestedMoveset[poke].ChkAb,"Flash Fire",index));

        thickFat=(chkIfAbilitySelected(poke,SuggestedMoveset[poke].ChkAb,"Thick Fat",index));

        voltAbsorb=(chkIfAbilitySelected(poke,SuggestedMoveset[poke].ChkAb,"Volt Absorb",index))

        allTypes.forEach(t => {
            if(type1WeaknessChart[t]===-2 || type2WeaknessChart[t]===-2)
            {
                typeWeakness[t]-=2
            }
            else if((t==='ground' && levitate) || (t==='fire' && flashFire) || (t==='electric' && voltAbsorb)){
                typeWeakness[t]-=2
            }
            else if((t==='ice' && thickFat) || (t==='fire' && thickFat))
            {
                typeWeakness[t]+=type1WeaknessChart[t]+type2WeaknessChart[t]-1;
            }
            else
            {
                typeWeakness[t]+=type1WeaknessChart[t]+type2WeaknessChart[t]
            }
        });
    }
    else
    {
        console.warn(`Pokémon "${poke}" non trovato .`);
    }
    return typeWeakness;
}

const StealthRockWeakAbility=["Sturdy","Multiscale"];

function chkIfAbilitySelected(poke,ChkAb,ability,index=0){
    if (index===0)
    {
        if(ChkAb!=undefined)
        {
            return ChkAb==ability;
        }
        return false;
    }
    else
    {
        chkboxAbility=document.getElementById(`ability-${index}`);

        return pokemonAbilities[capitalize(poke)]===ability && chkboxAbility.checked===true;
    }
}

//checks if there is a pokemon that needs someone to remove the rocks i.e. volcarona x4 weakness(typing based) or dragonite because of ability(harcoded)
function hasStealthRockWeakness(poke,index=0){

    StealthRockWeakAbility.forEach(sr=>{
        if (chkIfAbilitySelected(poke,SuggestedMoveset[poke].ChkAb,sr,index))
        {
            return 2;
        }
    });

    let typeWeaknessChart = {
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

    typeWeaknessChart=calcSingleMonWeaknesses(typeWeaknessChart,poke);

    return typeWeaknessChart['rock']; 
}

function countTeamRoles(team)
{
    let roles = { rainSetter: 0, rainAbuser: 0, rainUseful: 0, sweeper: 0, wallbreaker: 0, wall: 0, pivot: 0, stallbreaker: 0, hazardRemoval: 0, hazardSetter: 0, sunSetter: 0, sunAbuser: 0, sunUseful: 0};

    // Conta i ruoli nel team e identifica hazard, hazard removal, trick o taunt
    team.forEach(pokemon => {
        let rolesAdded={ rainSetter: 0, rainAbuser: 0, rainUseful: 0, sweeper: 0, wallbreaker: 0, wall: 0, pivot: 0, stallbreaker: 0, hazardRemoval: 0, hazardSetter: 0, sunSetter: 0, sunAbuser: 0, sunUseful: 0};
        if (pokemonRoles[pokemon.name] && pokemon.moves!=null) {
            // Conta i ruoli predefiniti
            pokemonRoles[pokemon.name].roles.forEach(role => {
                if (rolesAdded[role]===0) { rolesAdded[role]++;roles[role]++;}
            });
            // Aggiungi ruoli dinamici basati sulle mosse
            const dynamicRoles = addRolesBasedOnMoves(pokemon);
            dynamicRoles.forEach(role => {
                if (rolesAdded[role]===0) { rolesAdded[role]++;roles[role]++;}
            });
        }
        else if(SuggestedMoveset[pokemon.name])
        {
            // Conta i ruoli predefiniti
            SuggestedMoveset[pokemon.name].roles.forEach(role => {
                roles[role]++;
            });
        }
    });
    
    return roles
}

function evaluateTeamAgainstModel(team, bestModel, rainBonusApplied) {
    if (!teamModels[bestModel]) {
        console.error(`Modello "${bestModel}" non trovato in teamModels.`);
        return -Infinity;
    }

    let roles = { rainSetter: 0, rainAbuser: 0, rainUseful: 0, sweeper: 0, wallbreaker: 0, wall: 0, pivot: 0, stallbreaker: 0, hazardRemoval: 0, hazardSetter: 0, sunSetter: 0, sunAbuser: 0, sunUseful: 0};
    let score = 0;
    let hasRainSetter = team.some(pokemon => pokemonRoles[pokemon.name]?.roles.includes('rainSetter'));
    let hasPriority = team.some(pokemon => hasPriorityMoves(pokemon.name,pokemon.moves)==true);
    //Conta i ruoli
    roles=countTeamRoles(team);
    
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

    //se esiste un pokemon con priority nel team hyperoffensive/offensive/balance/bulkyoffensive
    if (hasPriority && (bestModel === 'hyperoffensive' ||bestModel === 'offensive' || bestModel === 'balance' || bestModel === 'bulkyoffensive') ) {
        console.log("Il team ha una priority, molto utile per la speed control");
        score += 10; // Aggiungi il bonus per la priority
    }
    return score;
}

function AddScoreOnWeaknessCoverage(weaknesses,poke)
{
    let score=0;

        // Aumenta il punteggio per la copertura delle debolezze del team
        weaknesses.forEach(([weakType,weakValue]) => {
            if (weakValue>=2)
            {
                SuggestedMoveset[poke]?.types.forEach(type => {
                    const resists = typeEffectiveness[type].resists || [];
                    if (resists.includes(weakType)) {
                        score += 9; // Aggiungi punti se il Pokémon resiste a una debolezza frequente del team
                    }
                });
            }
        });
    
    return score;
}

function hasPriorityMoves(pokemon,moves)
{
    let prior=false;

    if (moves!=null)
    {
        moves.forEach(m=>{
            prioritymoves.forEach(pm => {
                if (m==pm){
                    prior= true;
                }
            });
        })
    }
    else if (SuggestedMoveset[pokemon])
    {
        if ( SuggestedMoveset[pokemon].priorities!=undefined)
        {
            SuggestedMoveset[pokemon].priorities.forEach(m=>
            {
                if (prioritymoves[m]){
                    prior= true;
                }
            }
            )
        }
    }
    
    return prior;
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
    score+=AddScoreOnWeaknessCoverage(weaknesses,pokemon.name);
    // Aggiungi punti per sinergie con altri membri del team
    team.forEach(teamPokemon => {
        const synergyPartners = synergies[teamPokemon.name] || {};
        if (synergyPartners[pokemon.name]) {
            score += synergyPartners[pokemon.name]; // Aggiungi punti per sinergia
        }
    });

    // Aggiungi bonus o penalità basata sul tier del Pokémon
    const tier = SuggestedMoveset[pokemon.name]?.tier || 'D';
    score += getTierScore(tier);

    return score;
}

function getTierScore(tier)
{
    if (tier === 'S+') {
        return 10;
    } else if (tier === 'S') {
        return 8;
    } else if (tier === 'A') {
        return 5;
    } else if (tier === 'B') {
        return 3;
    } else if (tier === 'C') {
        return 1;
    } else if (tier === 'D') {
        return -3;
    }
}

function suggestBestPokemon(team, modelName,worstToReplace="") {
    console.log("Team:", team);
    console.log("Model:", modelName);

    let suggestions = [];

    for (let pokemon in SuggestedMoveset) {
        let newTeamScore=0;  
        if (!team.some(p => p.name === pokemon || p.name === SuggestedMoveset[pokemon].base)) {

            let newTeam=[]
            team.forEach(teamPokemon=>{
                if (teamPokemon.name!=worstToReplace || team.length<6){
                    newTeam.push(teamPokemon)
                }
            });
            newTeam.push({name:pokemon});
            newTeamScore=evaluateTeamAgainstModel(newTeam,modelName,true);
            newTeamScore = evaluateTeamScore (newTeam,newTeamScore,calculateWeaknesses(newTeam));

            // Aggiungi il Pokémon alla lista delle suggerimenti se il punteggio è sufficiente
            if (newTeamScore > 0)
            {
                suggestions.push({ name: pokemon, newTeamScore:newTeamScore});
            }
            else
            {
                suggestions.push({ name: pokemon,newTeamScore:0});
            }
            
        }

    }


    suggestions.sort((a, b) => b.newTeamScore - a.newTeamScore);

    return suggestions;
}

function evaluateTeamScore(team,teamScore,weaknesses){
    // Stampa le debolezze con il numero accanto tra parentesi
    if (weaknesses.length > 0) {
    
        weaknesses.forEach(w=>{
            teamScore-=w[1]*3;
        });
        
    }
    // vado a contare nel team debolette sr(1=x2 weak, 2=x4weak o sash,multiscale,vigore )
    // al check del hazard removal vado a vedere se sr>=3
    let cntStealthRockWeak=0;
    team.forEach(teamPokemon=>{
        cntStealthRockWeak+=hasStealthRockWeakness(teamPokemon.name,teamPokemon.index)
    });
    // Aggiungi bonus per sinergie con i Pokémon già nel team
    team.forEach(teamPokemon => {
        const synergyPartners = synergies[teamPokemon.name] || {};
        team.forEach(t=>{
            if (synergyPartners[t.name]) {
                teamScore += synergyPartners[t.name]; // Aggiungi il punteggio specifico per la sinergia
            }
        });    
        const tier = SuggestedMoveset[teamPokemon.name]?.tier || 'D';
        teamScore+=getTierScore(tier);
    });
    let hasHazardRemoval = team.some(p => 
        pokemonRoles[p.name]?.roles.includes('hazardRemoval') || 
        addRolesBasedOnMoves(p).includes('hazardRemoval')
    );
    if (!hasHazardRemoval && cntStealthRockWeak>2 ) {
        teamScore -= 11; // Togli 11 punti team per mancanza hazardRemoval se Volcarona o Dragonite sono nel team
    }

    if (isVoltSwitchBlocked(team))
    {
        teamScore+= 11;
    }
    return teamScore;
}

function isVoltSwitchBlocked(team)
{

    let blocked=false;

    team.forEach(p =>{
        blocked = (SuggestedMoveset[p.name].types[0]=='ground' || SuggestedMoveset[p.name].types[1]=='ground');

        if (!blocked)
        {
            blocked = (chkIfAbilitySelected(p.name,SuggestedMoveset[p.name].ChkAb,'Volt Absorb',p.index));
        }

        if (blocked)
        {
            console.log("Volt switch blocked by: " + p.name);
            return blocked;
        }
    });

    return blocked;
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
        let resultText = `Team Model: ${bestModel}\n`;

        // Calcola il punteggio di ciascun Pokémon nel team
        roles = countTeamRoles(team);
        console.log(roles);
        let worstPokemon = team.reduce((worst, pokemon) => {
            let pokemonScore = worstPokemonCalc(pokemon, team, teamModels[bestModel], roles, weaknesses);
            return pokemonScore < worst.score ? { name: pokemon.name, score: pokemonScore } : worst;
        }, { score: Infinity });

        if(weaknesses.length>0)
        {
            const weaknessTypes = weaknesses.map(([type, count]) => `${type}(${count})`).join(', ');
            resultText += `Weaknesses: ${weaknessTypes}\n`;
        }
        else {
            resultText += `Weaknesses: None\n`;
        }
        bestScore= evaluateTeamScore(team,bestScore,weaknesses);

        resultText +=`Team Score: ${bestScore}\n`;
        
        resultText += `Worst Pokémon: ${worstPokemon.name} (Score: ${worstPokemon.score})\n`;
        
        let suggestions;
        resultText += `Suggested Pokémon:`;
        resultText +=`\n`;

        //suggeriti in base al worst pokemon
        suggestions = suggestBestPokemon(team, bestModel,worstPokemon.name);
        suggestions.forEach(suggestion => {
            resultText += `-    ${suggestion.name} (New Team Score: ${suggestion.newTeamScore})`;
            resultText +=`\n`;
        });
        resultText +=`\n`;
        
        document.getElementById('result').innerText = resultText;
    }
});