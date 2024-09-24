document.getElementById('calculate').addEventListener('click', () => {
    const team = [];
    const teamSize = 6;

    // Funzione per ottenere i dati del Pokémon e delle sue mosse
    for (let i = 1; i <= teamSize; i++) {
        const pokemon = document.getElementById(`pokemon-${i}`).value;
        const moves = [
            document.getElementById(`move-${i}-1`).value,
            document.getElementById(`move-${i}-2`).value,
            document.getElementById(`move-${i}-3`).value,
            document.getElementById(`move-${i}-4`).value
        ];
        
        if (pokemon) {
            team.push({ name: pokemon, moves, tags: [] });
        }
    }

    // Mappa delle debolezze/resistenze per ogni tipo
    const typeChart = {
        normal: { weakTo: ['fighting'], resistantTo: [] },
        fire: { weakTo: ['water', 'ground', 'rock'], resistantTo: ['fire', 'grass', 'ice', 'bug', 'steel', 'fairy'] },
        water: { weakTo: ['electric', 'grass'], resistantTo: ['fire', 'water', 'ice', 'steel'] },
        electric: { weakTo: ['ground'], resistantTo: ['electric', 'flying', 'steel'] },
        grass: { weakTo: ['fire', 'ice', 'poison', 'flying', 'bug'], resistantTo: ['water', 'electric', 'grass', 'ground'] },
        ice: { weakTo: ['fire', 'fighting', 'rock', 'steel'], resistantTo: ['ice'] },
        fighting: { weakTo: ['flying', 'psychic', 'fairy'], resistantTo: ['bug', 'rock', 'dark'] },
        poison: { weakTo: ['ground', 'psychic'], resistantTo: ['grass', 'fighting', 'poison', 'bug', 'fairy'] },
        ground: { weakTo: ['water', 'ice', 'grass'], resistantTo: ['poison', 'rock'], immuneTo: ['electric'] },
        flying: { weakTo: ['electric', 'ice', 'rock'], resistantTo: ['grass', 'fighting', 'bug'], immuneTo: ['ground'] },
        psychic: { weakTo: ['bug', 'ghost', 'dark'], resistantTo: ['fighting', 'psychic'] },
        bug: { weakTo: ['fire', 'flying', 'rock'], resistantTo: ['grass', 'fighting', 'ground'] },
        rock: { weakTo: ['water', 'grass', 'fighting', 'ground', 'steel'], resistantTo: ['normal', 'fire', 'poison', 'flying'] },
        ghost: { weakTo: ['ghost', 'dark'], resistantTo: ['poison', 'bug'], immuneTo: ['normal', 'fighting'] },
        dragon: { weakTo: ['ice', 'dragon', 'fairy'], resistantTo: ['fire', 'water', 'electric', 'grass'] },
        dark: { weakTo: ['fighting', 'bug', 'fairy'], resistantTo: ['ghost', 'dark'], immuneTo: ['psychic'] },
        steel: { weakTo: ['fire', 'fighting', 'ground'], resistantTo: ['normal', 'grass', 'ice', 'flying', 'psychic', 'bug', 'rock', 'dragon', 'steel', 'fairy'], immuneTo: ['poison'] },
        fairy: { weakTo: ['poison', 'steel'], resistantTo: ['fighting', 'bug', 'dark'], immuneTo: ['dragon'] }
    };

    // Funzione per assegnare i tag in base alle mosse
    function assignTags(pokemon) {
        const hazardMoves = ['stealthrock', 'spikes', 'toxicspikes'];
        const hazardRemovalMoves = ['rapidspin', 'defog'];
        const trickOrTauntMoves = ['trick', 'taunt'];

        // Aggiungere tag in base alle mosse
        if (pokemon.moves.some(move => hazardMoves.includes(move.toLowerCase()))) {
            pokemon.tags.push('HazardSetter');
        }
        if (pokemon.moves.some(move => hazardRemovalMoves.includes(move.toLowerCase()))) {
            pokemon.tags.push('HazardRemoval');
        }
        if (pokemon.moves.some(move => trickOrTauntMoves.includes(move.toLowerCase()))) {
            pokemon.tags.push('TrickOrTaunt');
        }
    }

    // Funzione per calcolare debolezze e resistenze del team
    function calculateWeaknessesResistances(team) {
        const weaknesses = {
            normal: 0, fire: 0, water: 0, electric: 0, grass: 0, ice: 0, fighting: 0, poison: 0,
            ground: 0, flying: 0, psychic: 0, bug: 0, rock: 0, ghost: 0, dragon: 0, dark: 0, steel: 0, fairy: 0
        };

        // Per ogni Pokémon del team, incrementa o decrementa i punteggi per ogni tipo
        team.forEach(pokemon => {
            // Ottieni le debolezze/resistenze del Pokémon
            const weaknessesOfPokemon = typeChart[pokemon.name.toLowerCase()]; // Supponiamo che il nome corrisponda esattamente al tipo (modificabile con un database)
            if (weaknessesOfPokemon) {
                weaknessesOfPokemon.weakTo.forEach(type => weaknesses[type]++);
                weaknessesOfPokemon.resistantTo.forEach(type => weaknesses[type]--);
                if (weaknessesOfPokemon.immuneTo) {
                    weaknessesOfPokemon.immuneTo.forEach(type => weaknesses[type]--);
                }
            }
        });

        return weaknesses;
    }

    // Funzione per identificare il tipo di team
    function evaluateTeam(team) {
        let model = null;
        const evaluation = {
            hazards: false,
            hazardRemoval: false,
            trickOrTaunt: false,
            rockWeak: false
        };

        // Assegnare tag ai Pokémon
        team.forEach(pokemon => assignTags(pokemon));

        // Calcolare debolezze e resistenze
        const weaknesses = calculateWeaknessesResistances(team);

        // Valutare bilanciamento delle debolezze
        const weakTypes = Object.keys(weaknesses).filter(type => weaknesses[type] > 0);
        const strongTypes = Object.keys(weaknesses).filter(type => weaknesses[type] < 0);

        // Aggiungi logica per verificare se il team segue i modelli (come nella versione precedente)

        return { model, weaknesses, strongTypes };
    }

    // Valutazione del team inserito
    const { model, weaknesses, strongTypes } = evaluateTeam(team);

    let resultText = "";

    if (!model) {
        resultText = "Il team inserito non corrisponde a nessun modello.\n";
    } else {
        resultText = `Il team corrisponde al modello: ${model}\n`;
    }

    // Mostra le debolezze principali del team
    resultText += "Debolezze principali del team:\n";
    Object.keys(weaknesses).forEach(type => {
        if (weaknesses[type] > 0) {
            resultText += `Il team ha ${weaknesses[type]} debolezza/e al tipo ${type}.\n`;
        }
    });

    // Se il team è incompleto, suggerire di aggiungere più Pokémon
    if (team.length < teamSize) {
        resultText += `Mancano ${teamSize - team.length} Pokémon per completare il team.\n`;
    }

    document.getElementById('result').innerText = resultText;
});
