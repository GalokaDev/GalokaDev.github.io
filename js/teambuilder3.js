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
    let typeScores = {};
    types.forEach(type => typeScores[type] = 0);

    let hazardRemovalCount = 0;
    let switchMoveCount = 0;
    let pokemonInserted = false;
    let insertedPokemon = [];  // Salva i Pokémon inseriti

    // Rimuovi tutte le icone di pericolo esistenti prima del controllo
    function removeWarningIcons() {
        for (let i = 1; i <= 6; i++) {
            let pokemonBox = document.getElementById(`pokemon-${i}`);
            // Rimuove qualsiasi icona di pericolo già presente
            let warningIcon = pokemonBox.parentElement.querySelector('.warning-icon');
            if (warningIcon) {
                warningIcon.remove();
            }
            // Rimuove anche la classe di errore (se applicata)
            pokemonBox.classList.remove('error-box');
        }
    }

    // Funzione per aggiungere icona di pericolo vicino al box
    function addWarningIcon(pokemonBox) {
        let warningIcon = document.createElement('span');
        warningIcon.classList.add('warning-icon');
        warningIcon.innerHTML = '⚠️'; // Icona di pericolo rossa
        warningIcon.title = 'Not found'; // Testo al passaggio del mouse

        // Aggiungi la classe per indicare errore
        pokemonBox.classList.add('error-box');

        // Posiziona l'icona accanto al box
        pokemonBox.parentElement.appendChild(warningIcon);
    }

    // Funzione per aggiornare i punteggi dei tipi
    function updateTypeScores(pokemonName) {
        let pokemon = typeChart[pokemonName];
        if (pokemon) {
            pokemon.weaknesses.forEach(type => typeScores[type] += 1);
            pokemon.superweak.forEach(type => typeScores[type] += 2);

            pokemon.resistances.forEach(type => typeScores[type] -= 1);
            pokemon.immunities.forEach(type => typeScores[type] -= 2);
        }
    }

    // Funzione per formattare il nome del Pokémon (prima lettera maiuscola, resto minuscolo)
    function formatPokemonName(name) {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    }

    // Funzione per contare le mosse speciali (rimozione hazard e switch)
    function countSpecialMoves(move) {
        if (hazardRemovalMoves.includes(move.toLowerCase())) {
            hazardRemovalCount++;
        }
        if (switchMoves.includes(move.toLowerCase())) {
            switchMoveCount++;
        }
    }

    // Funzione per trovare un Pokémon che copra le debolezze principali
    function findPokemonToCoverWeaknesses(weaknesses) {
        let bestPokemon = null;
        let bestScore = 0;

        // Loop su tutti i Pokémon nel typeChart
        for (let pokemonName in typeChart) {
            let pokemon = typeChart[pokemonName];
            let coverageScore = 0;

            // Aumenta il punteggio se il Pokémon ha resistenze o immunità contro le debolezze della squadra
            weaknesses.forEach(weakness => {
                if (pokemon.resistances.includes(weakness)) {
                    coverageScore += 1;
                }
                if (pokemon.immunities.includes(weakness)) {
                    coverageScore += 2;
                }
            });

            // Se il punteggio di copertura è il migliore finora, aggiorna il miglior Pokémon
            if (coverageScore > bestScore) {
                bestScore = coverageScore;
                bestPokemon = pokemonName;
            }
        }

        return bestPokemon;
    }

    // Funzione per determinare quale Pokémon sostituire
    function findPokemonToReplace(pokemonName, weaknesses) {
        let worstPokemon = null;
        let worstScore = 0;

        // Loop su tutti i Pokémon inseriti
        insertedPokemon.forEach(inserted => {
            let pokemon = typeChart[inserted];
            let contributionScore = 0;

            // Aumenta il punteggio se il Pokémon contribuisce alle debolezze principali della squadra
            weaknesses.forEach(weakness => {
                if (pokemon.weaknesses.includes(weakness)) {
                    contributionScore += 1;
                }
                if (pokemon.superweak.includes(weakness)) {
                    contributionScore += 2;
                }
            });

            // Se il punteggio di contributo è il peggiore finora, aggiorna il Pokémon da sostituire
            if (contributionScore > worstScore) {
                worstScore = contributionScore;
                worstPokemon = inserted;
            }
        });

        return worstPokemon;
    }

    // Rimuovi le icone precedenti
    removeWarningIcons();

    // Raccolta dei nomi dei Pokémon inseriti e delle loro mosse
    for (let i = 1; i <= 6; i++) {
        let pokemonName = document.getElementById(`pokemon-${i}`).value.trim();
        let pokemonBox = document.getElementById(`pokemon-${i}`);

        if (pokemonName) {
            pokemonInserted = true; // Almeno un Pokémon è stato inserito
            pokemonName = formatPokemonName(pokemonName); // Formatta il nome del Pokémon
            if (!typeChart[pokemonName]) {
                addWarningIcon(pokemonBox); // Aggiungi l'icona se il nome non è trovato nel typeChart
            } else {
                updateTypeScores(pokemonName);
                insertedPokemon.push(pokemonName); // Aggiungi il Pokémon alla lista degli inseriti
            }

            // Verifica le mosse per il Pokémon corrente
            for (let j = 1; j <= 4; j++) {
                let move = document.getElementById(`move-${i}-${j}`).value.trim();
                if (move) {
                    countSpecialMoves(move);
                }
            }
        } else {
            // Aggiungi icona di pericolo se il campo è vuoto
            addWarningIcon(pokemonBox);
        }
    }

    // Se nessun Pokémon è stato inserito
    if (!pokemonInserted) {
        document.getElementById('result').innerText = "Non hai inserito nessun Pokémon.\nNon hai abbastanza mosse per togliere hazard.\nNon hai abbastanza mosse per switchare.";
        return;
    }

    // Verifica dei tipi con punteggi superiori a 2
    let weaknesses = [];
    for (let type in typeScores) {
        if (typeScores[type] > 2) {
            weaknesses.push(type);
        }
    }

    // Mostra il risultato delle debolezze
    let result = weaknesses.length > 0 ? `Soffri troppo questi tipi: ${weaknesses.join(', ')}` : "La tua squadra è ben bilanciata!";

    // Controllo per le mosse di rimozione hazard e switch
    if (hazardRemovalCount === 0) {
        result += "\nNon hai abbastanza mosse per togliere hazard.";
    }
    if (switchMoveCount === 0) {
        result += "\nNon hai abbastanza mosse per switchare.";
    }

    // Se ci sono debolezze, consiglia un Pokémon
    if (weaknesses.length > 0) {
        let recommendedPokemon = findPokemonToCoverWeaknesses(weaknesses);

        if (insertedPokemon.length >= 6) {
            // Se la squadra è già piena, suggerisci anche chi sostituire
            let pokemonToReplace = findPokemonToReplace(recommendedPokemon, weaknesses);
            result += `\nPer migliorare la tua squadra, potresti aggiungere ${recommendedPokemon}, che copre le tue debolezze. Sostituirei ${pokemonToReplace}.`;
        } else {
            result += `\nPer migliorare la tua squadra, potresti aggiungere ${recommendedPokemon}, che copre le tue debolezze.`;
        }
    }

    document.getElementById('result').innerText = result;
});













// Dizionario con Pokémon e relativi tag
const pokemonTags = {
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

// Dizionario con le mosse di ogni Pokémon
const pkmMoves = {
    "Volcarona": ["Quiver Dance", "Fiery Dance", "Bug Buzz"],
    "Landorus-T": ["Stealth Rock", "Earthquake", "U-turn", "Defog"],
    "Toxapex": ["Toxic Spikes", "Scald", "Recover", "Haze"],
    "Excadrill": ["Rapid Spin", "Earthquake", "Iron Head"],
    // Aggiungere altre mosse
};

// Funzione per contare i Pokémon in base al tag
function contaPokemonPerRuolo(team, ruolo) {
    return team.filter(pkm => pokemonTags[pkm] && pokemonTags[pkm].includes(ruolo)).length;
}

// Funzione per analizzare il tipo di team
function analizzaTeam(team) {
    const sweeperCount = contaPokemonPerRuolo(team, "Sweeper");
    const wallbreakerCount = contaPokemonPerRuolo(team, "Wallbreaker");
    const stallbreakerCount = contaPokemonPerRuolo(team, "Stallbreaker");
    const pivotOrWallCount = contaPokemonPerRuolo(team, "Wall") + contaPokemonPerRuolo(team, "Pivot");
    const hazardSetterCount = contaPokemonPerRuolo(team, "HazardSetter");
    const hazardRemoverCount = contaPokemonPerRuolo(team, "HazardRemover");
    const rockWeakCount = contaPokemonPerRuolo(team, "RockWeak");

    // Identificazione del tipo di team
    if (sweeperCount === 0 || (sweeperCount === 1 && pivotOrWallCount >= 2)) {
        if (wallbreakerCount <= 2 && stallbreakerCount === 1 && pivotOrWallCount >= 2 && pivotOrWallCount <= 3) {
            return "Balance Team";
        }
    } else if (sweeperCount >= 2 && sweeperCount <= 4 && wallbreakerCount <= 3) {
        return "Hyper Offense";
    } else if (sweeperCount === 1 && wallbreakerCount >= 2 && stallbreakerCount === 1) {
        return "Bulky Offense";
    } else if (pivotOrWallCount >= 5 && stallbreakerCount === 1) {
        return "Stall Team";
    } else if (pivotOrWallCount >= 4 && sweeperCount <= 1 && wallbreakerCount <= 1) {
        return "Semi-Stall Team";
    } else {
        return "Tipo di team non riconosciuto";
    }
}

// Funzione per suggerire Pokémon mancanti
function suggerisciPokemonMancanti(team, tipoDiTeam) {
    let suggerimenti = [];

    // Controllo degli Hazard Setter
    const hazardSetterCount = contaPokemonPerRuolo(team, "HazardSetter");
    if (hazardSetterCount === 0) {
        suggerimenti.push("Aggiungi un Pokémon con Stealth Rock, Spikes o Toxic Spikes.");
    }

    // Controllo degli Hazard Remover
    const hazardRemoverCount = contaPokemonPerRuolo(team, "HazardRemover");
    const rockWeakCount = contaPokemonPerRuolo(team, "RockWeak");

    if (tipoDiTeam === "Hyper Offense") {
        if (rockWeakCount > 0 && hazardRemoverCount === 0) {
            suggerimenti.push("Aggiungi un Hazard Remover per proteggere i Pokémon deboli a Stealth Rock.");
        }
    } else if (["Balance Team", "Bulky Offense"].includes(tipoDiTeam)) {
        if (hazardRemoverCount === 0) {
            suggerimenti.push("Aggiungi un Pokémon con mosse di Hazard Removal (Defog o Rapid Spin).");
        }
    } else if (tipoDiTeam === "Stall Team" && hazardRemoverCount < 2) {
        suggerimenti.push("Aggiungi almeno 1-2 Hazard Remover per garantire il controllo del campo.");
    }

    // Controllo per Trick o Taunt nei team Hyper Offense
    if (tipoDiTeam === "Hyper Offense") {
        const hasTrickOrTaunt = team.some(pkm => pkmMoves[pkm] && (pkmMoves[pkm].includes("Trick") || pkmMoves[pkm].includes("Taunt")));
        if (!hasTrickOrTaunt) {
            suggerimenti.push("Aggiungi un Pokémon con Trick o Taunt per interrompere le strategie difensive.");
        }
    }

    return suggerimenti;
}

// Funzione principale per l'analisi e la raccomandazione
function analizzaESuggerisciTeam(team) {
    const tipoDiTeam = analizzaTeam(team);
    console.log(`Il tipo di team corrente è: ${tipoDiTeam}`);

    const suggerimenti = suggerisciPokemonMancanti(team, tipoDiTeam);
    if (suggerimenti.length > 0) {
        console.log("Suggerimenti per migliorare il team:");
        suggerimenti.forEach(suggerimento => console.log(`- ${suggerimento}`));
    } else {
        console.log("Il team è già bilanciato per questo tipo di strategia.");
    }
}

// Esempio di utilizzo
const teamCorrente = ["Volcarona", "Landorus-T", "Toxapex", "Excadrill"];
analizzaESuggerisciTeam(teamCorrente);

