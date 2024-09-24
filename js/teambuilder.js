// Mappa delle debolezze e resistenze dei Pokémon rispetto ai vari tipi
const typeChart = {
    "Pikachu": { "weaknesses": ["ground"], "resistances": ["flying", "steel", "electric"] },
    // Aggiungi qui altre voci per altri Pokémon
};

// Lista dei tipi di Pokémon
const types = ["normal", "fire", "water", "electric", "grass", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dragon", "dark", "steel"];

document.getElementById('calculate').addEventListener('click', function() {
    // Inizializzazione delle variabili per ogni tipo
    let typeScores = {};
    types.forEach(type => typeScores[type] = 0);

    // Funzione per aggiornare i punteggi dei tipi
    function updateTypeScores(pokemonName) {
        let pokemon = typeChart[pokemonName];
        if (pokemon) {
            pokemon.weaknesses.forEach(type => typeScores[type] += 1);
            pokemon.resistances.forEach(type => typeScores[type] -= 1);
        }
    }

    // Raccolta dei nomi dei Pokémon inseriti
    for (let i = 1; i <= 6; i++) {
        let pokemonName = document.getElementById(`pokemon-${i}`).value;
        if (pokemonName) {
            updateTypeScores(pokemonName);
        }
    }

    // Verifica dei tipi con punteggi superiori a 2
    let weaknesses = [];
    for (let type in typeScores) {
        if (typeScores[type] > 2) {
            weaknesses.push(type);
        }
    }

    // Mostra il risultato
    let result = weaknesses.length > 0 ? `Soffri troppo questi tipi: ${weaknesses.join(', ')}` : "La tua squadra è ben bilanciata!";
    document.getElementById('result').innerText = result;
});