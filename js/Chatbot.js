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
        { input: { ciao: 1 }, output: { hi: 1 } }, // Italiano: "ciao" -> "hi"
        { input: { "come stai": 1 }, output: { "I'm fine": 1 } }, // Italiano: "come stai" -> "I'm fine"
        { input: { grazie: 1 }, output: { "you're welcome": 1 } }, // Italiano: "grazie" -> "you're welcome"
    ];

    net.train(trainingData, {
        iterations: 1000,
        errorThresh: 0.005,
        log: true,
        logPeriod: 10,
        learningRate: 0.3
    });

    // Risposte multilingua
    const responses = {
        en: {
            "hi": "Hi there!",
            "I'm fine": "I'm fine, thank you!",
            "I'm a bot": "I'm a bot.",
            "goodbye": "Goodbye!",
            "you're welcome": "You're welcome!",
            "team_redirect": "Sure, I will redirect you to the teams page shortly."
        },
        it: {
            "hi": "Ciao!",
            "I'm fine": "Sto bene, grazie!",
            "I'm a bot": "Sono un bot.",
            "goodbye": "Arrivederci!",
            "you're welcome": "Prego!",
            "team_redirect": "Certo, ti reindirizzo subito sulla pagina dei team."
        },
        fr: {
            "hi": "Bonjour!",
            "I'm fine": "Je vais bien, merci!",
            "I'm a bot": "Je suis un bot.",
            "goodbye": "Au revoir!",
            "you're welcome": "De rien!",
            "team_redirect": "Bien sûr, je vais vous rediriger vers la page des équipes."
        }
    };

    // Funzione per rilevare la lingua dell'input
    function detectLanguage(input) {
        const lowerInput = input.toLowerCase();
        if (lowerInput.includes("ciao") || lowerInput.includes("come stai")) {
            return 'it';
        } else if (lowerInput.includes("bonjour") || lowerInput.includes("comment ça va")) {
            return 'fr';
        } else {
            return 'en'; // Inglese di default
        }
    }

    // Funzione per ottenere la risposta
    function getChatbotResponse(input) {
        const language = detectLanguage(input); // Rileva la lingua dell'input
        const formattedInput = formatInput(input); // Poi formatta l'input
        const result = net.run(formattedInput); // Usa il modello per ottenere il risultato
        const response = getHighestConfidenceOutput(result); // Ottieni la risposta con maggiore confidenza
    
        if (result[response] < 0.5) {
            return "Sorry, I don't understand.";
        }
    
        // Ritorna la risposta tradotta nella lingua rilevata
        return responses[language][response] || "Sorry, I don't understand.";
    }

    // Funzione per formattare l'input
    function formatInput(input) {
        const formattedInput = {};
        const words = input.toLowerCase().split(" "); // Separiamo l'input in singole parole
        words.forEach(word => {
            if (word) {
                formattedInput[word] = 1; // Ogni parola individuale è considerata come una caratteristica
            }
        });
        return formattedInput;
    }

    // Funzione per ottenere la risposta con maggiore confidenza
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

    // Funzione per il countdown e il redirect
    function startCountdown() {
        let countdown = 5;
        const countdownInterval = setInterval(() => {
            addMessageToChat("AI", countdown);
            countdown--;

            if (countdown < 0) {
                clearInterval(countdownInterval);
                window.location.href = "https://pokemmostats.com/Teams/";
            }
        }, 1000);
    }

    // Funzione per inviare il messaggio iniziale
    function sendInitialMessage() {
        const initialMessage = "Hi, how can I help you today?";
        addMessageToChat("AI", initialMessage);
    }

    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const inputField = form.querySelector("input");
        const userMessage = inputField.value.trim();

        if (userMessage === "") return;

        addMessageToChat("User", userMessage);

        const botResponse = getChatbotResponse(userMessage);

        if (botResponse.includes("redirect")) {
            addMessageToChat("AI", botResponse);
            startCountdown();
        } else {
            setTimeout(() => {
                addMessageToChat("AI", botResponse);
            }, 500);
        }

        inputField.value = "";
    });

    // Funzione per aggiungere messaggi alla chat
    function addMessageToChat(sender, message) {
        const chatContainer = document.querySelector(".chat-messages");
        const newMessage = document.createElement("div");
        newMessage.classList.add("flex", "gap-3", "my-4", "text-gray-600", "text-sm", "flex-1");

        let userIcon = `
            <div class="rounded-full bg-gray-100 border p-1">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12c2.131 0 4-1.869 4-4s-1.869-4-4-4-4 1.869-4 4 1.869 4 4 4zm0 2c-2.67 0-8 1.336-8 4v2h16v-2c0-2.664-5.33-4-8-4z"></path>
                </svg>
            </div>
        `;

        let aiIcon = `
            <div class="rounded-full bg-gray-100 border p-1">
                <svg stroke="none" fill="black" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" height="20" width="20">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"></path>
                </svg>
            </div>
        `;

        let icon = sender === "User" ? userIcon : aiIcon;

        newMessage.innerHTML = `
            <span class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                ${icon}
            </span>
            <p class="leading-relaxed"><span class="block font-bold text-gray-700">${sender}</span>${message}</p>
        `;
        chatContainer.appendChild(newMessage);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    sendInitialMessage();
});
