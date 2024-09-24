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
