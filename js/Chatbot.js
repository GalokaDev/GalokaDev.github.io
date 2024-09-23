document.addEventListener('DOMContentLoaded', function () {
    const net = new brain.NeuralNetwork({
        hiddenLayers: [3]
    });

    const trainingData = [
        { input: { hello: 1 }, output: { hi: 1 } },
        { input: { "how are you": 1 }, output: { "I'm fine": 1 } },
        { input: { "what's your name": 1 }, output: { "I'm a bot": 1 } },
        { input: { bye: 1 }, output: { goodbye: 1 } },
        { input: { thanks: 1 }, output: { "you're welcome": 1 } },
    ];

    net.train(trainingData, {
        iterations: 1000,
        errorThresh: 0.005,
        log: true,
        logPeriod: 10,
        learningRate: 0.3
    });

    function getChatbotResponse(input) {
        const formattedInput = formatInput(input);
        const result = net.run(formattedInput);
        const response = getHighestConfidenceOutput(result);

        if (result[response] < 0.5) {
            return "Sorry, I don't understand.";
        }
        return response;
    }

    function formatInput(input) {
        const formattedInput = {};
        const words = input.toLowerCase().split(" ");
        words.forEach(word => {
            formattedInput[word] = 1;
        });
        return formattedInput;
    }

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

    // Funzione per inviare il messaggio iniziale
    function sendInitialMessage() {
        const initialMessage = "Hi, how can I help you today?"; // Messaggio iniziale
        addMessageToChat("AI", initialMessage); // Aggiunge il messaggio nella chat come risposta dell'AI
    }

    // Gestione invio messaggio
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Previene l'invio del form

        const inputField = form.querySelector("input");
        const userMessage = inputField.value.trim();

        if (userMessage === "") return; // Non inviare messaggi vuoti

        addMessageToChat("User", userMessage); // Aggiunge il messaggio dell'utente nella chat

        const botResponse = getChatbotResponse(userMessage); // Ottiene la risposta del chatbot

        setTimeout(() => {
            addMessageToChat("AI", botResponse); // Aggiunge la risposta del chatbot nella chat
        }, 500);

        inputField.value = ""; // Resetta il campo di input
    });

    function addMessageToChat(sender, message) {
        const chatContainer = document.querySelector(".chat-messages"); // Modifica il selettore per usare la classe corretta
        const newMessage = document.createElement("div");
        newMessage.classList.add("flex", "gap-3", "my-4", "text-gray-600", "text-sm", "flex-1");

        // Icona per l'utente
        let userIcon = `
            <div class="rounded-full bg-gray-100 border p-1">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12c2.131 0 4-1.869 4-4s-1.869-4-4-4-4 1.869-4 4 1.869 4 4 4zm0 2c-2.67 0-8 1.336-8 4v2h16v-2c0-2.664-5.33-4-8-4z"></path>
                </svg>
            </div>

        `;

        // Icona per l'AI (rimane invariata)
        let aiIcon = `
            <div class="rounded-full bg-gray-100 border p-1">
                <svg stroke="none" fill="black" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" height="20" width="20">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"></path>
                </svg>
            </div>
        `;

        let icon = sender === "User" ? userIcon : aiIcon; // Determina quale icona mostrare

        newMessage.innerHTML = `
            <span class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                ${icon}
            </span>
            <p class="leading-relaxed"><span class="block font-bold text-gray-700">${sender}</span>${message}</p>
        `;
        chatContainer.appendChild(newMessage);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    // Chiamata alla funzione per inviare il messaggio iniziale quando la chat è pronta
    sendInitialMessage();
});