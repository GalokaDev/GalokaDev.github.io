// Inizializza la rete neurale
const net = new brain.NeuralNetwork({
    hiddenLayers: [3] // Configurazione della rete neurale
  });
  
  // Dati di allenamento aggiornati
  const trainingData = [
    { input: { hello: 1 }, output: { hi: 1 } },
    { input: { "how are you": 1 }, output: { "I'm fine": 1 } },
    { input: { "what's your name": 1 }, output: { "I'm a bot": 1 } },
    { input: { bye: 1 }, output: { goodbye: 1 } },
    { input: { thanks: 1 }, output: { "you're welcome": 1 } },
  ];
  
  // Allena la rete neurale con i dati di training
  net.train(trainingData, {
    iterations: 1000,   // Ridotto il numero di iterazioni per migliorare le performance iniziali
    errorThresh: 0.005, // Soglia di errore
    log: true,          // Abilita log per vedere l'allenamento
    logPeriod: 10,      // Log dopo ogni 10 iterazioni
    learningRate: 0.3   // Tasso di apprendimento
  });
  
  // Funzione per ottenere la risposta del chatbot
  function getChatbotResponse(input) {
    const formattedInput = formatInput(input); // Formatta l'input
    const result = net.run(formattedInput);    // Esegue la rete neurale
    const response = getHighestConfidenceOutput(result); // Ottiene la risposta
    return response;
  }
  
  // Formatta l'input trasformandolo in oggetto con le parole chiave
  function formatInput(input) {
    const formattedInput = {};
    const words = input.toLowerCase().split(" ");
    words.forEach(word => {
      formattedInput[word] = 1; // Assegna valore 1 per ogni parola
    });
    return formattedInput;
  }
  
  // Estrai il risultato con maggiore confidenza
  function getHighestConfidenceOutput(output) {
    let highest = 0;
    let response = "";
    for (let key in output) {
      if (output[key] > highest) {
        highest = output[key];
        response = key;
      }
    }
    return response;
  }
  
  // Gestione invio messaggio
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Previene l'invio del form
  
    const inputField = document.querySelector("input");
    const userMessage = inputField.value.trim(); // Rimuove gli spazi vuoti
  
    if (userMessage === "") return; // Se vuoto, non fa nulla
  
    // Aggiunge il messaggio dell'utente nella chat
    addMessageToChat("User", userMessage);
  
    // Ottiene la risposta del chatbot
    const botResponse = getChatbotResponse(userMessage);
  
    // Se la risposta esiste, la mostra nella chat
    if (botResponse) {
      setTimeout(() => {
        addMessageToChat("AI", botResponse);
      }, 500);
    } else {
      setTimeout(() => {
        addMessageToChat("AI", "Sorry, I don't understand.");
      }, 500);
    }
  
    inputField.value = ""; // Resetta il campo di input
  });
  
  // Funzione per aggiungere un messaggio alla chat
  function addMessageToChat(sender, message) {
    const chatContainer = document.querySelector(".pr-4");
    const newMessage = document.createElement("div");
    newMessage.classList.add("flex", "gap-3", "my-4", "text-gray-600", "text-sm", "flex-1");
    newMessage.innerHTML = `
      <span class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
        <div class="rounded-full bg-gray-100 border p-1">
          <svg stroke="none" fill="black" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" height="20" width="20">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"></path>
          </svg>
        </div>
      </span>
      <p class="leading-relaxed"><span class="block font-bold text-gray-700">${sender}</span>${message}</p>
    `;
    chatContainer.appendChild(newMessage);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }
  