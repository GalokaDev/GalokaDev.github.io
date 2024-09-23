// Inizializza la rete neurale di Brain.js
const net = new brain.NeuralNetwork();

// Funzione per addestrare il modello con esempi personalizzati
function trainBot(trainingData) {
    net.train(trainingData, {
        log: true,          // Mostra log durante l'allenamento
        logPeriod: 100,     // Mostra log ogni 100 iterazioni
        iterations: 2000,   // Numero di iterazioni
        errorThresh: 0.005  // Soglia di errore
    });
}

// Dati di allenamento di esempio (puoi modificarli)
const trainingData = [
    { input: { hi: 1 }, output: { greeting: 1 } },
    { input: { hello: 1 }, output: { greeting: 1 } },
    { input: { how: 1, are: 1, you: 1 }, output: { status: 1 } },
    { input: { what: 1, is: 1, your: 1, name: 1 }, output: { name: 1 } }
];

// Addestra il modello
trainBot(trainingData);

// Funzione per ricevere una risposta dal bot
function getBotResponse(userMessage) {
    const words = userMessage.toLowerCase().split(' ');
    let input = {};

    // Prepara l'input per la rete neurale
    words.forEach(word => input[word] = 1);

    const result = net.run(input);

    // Analizza il risultato e restituisce una risposta
    if (result.greeting) {
        return "Hello! How can I assist you?";
    } else if (result.status) {
        return "I'm doing well, thanks for asking!";
    } else if (result.name) {
        return "I am Galoka, your friendly assistant.";
    } else {
        return "I'm not sure how to respond to that.";
    }
}

// Funzione per gestire l'invio del messaggio
document.getElementById('sendMessage').addEventListener('click', function () {
    const userInput = document.getElementById('userInput').value;
    const botResponse = getBotResponse(userInput);

    // Aggiungi il messaggio dell'utente e la risposta del bot nella chat
    const chatMessages = document.getElementById('chatMessages');
    const userMessageHtml = `<div class="flex gap-3 my-4 text-gray-600 text-sm flex-1">
                                <p class="leading-relaxed"><span class="block font-bold text-gray-700">You: </span>${userInput}</p>
                             </div>`;
    const botMessageHtml = `<div class="flex gap-3 my-4 text-gray-600 text-sm flex-1">
                                <p class="leading-relaxed"><span class="block font-bold text-gray-700">AI: </span>${botResponse}</p>
                            </div>`;
    chatMessages.innerHTML += userMessageHtml + botMessageHtml;

    // Pulisci l'input dell'utente
    document.getElementById('userInput').value = '';
});
