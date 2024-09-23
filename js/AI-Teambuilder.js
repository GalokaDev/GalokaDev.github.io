const chatContainer = document.querySelector('.messages');
        const form = document.querySelector('form');
        const input = form.querySelector('input');

        // Funzione per aggiungere messaggi nella chat
        function addMessage(author, text) {
            const messageDiv = document.createElement('div');
            messageDiv.innerHTML = `<strong>${author}:</strong> ${text}`;
            chatContainer.appendChild(messageDiv);
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }

        // Creiamo un'istanza di una rete neurale di Brain.js
        const net = new brain.NeuralNetwork();

        // Addestriamo la rete neurale con semplici esempi
        net.train([
            { input: { domanda: "miglior team pokemon" }, output: { risposta: "Il miglior team dipende dal tuo stile di gioco!" } },
            { input: { domanda: "tipo più forte" }, output: { risposta: "Il tipo Drago è considerato tra i più forti!" } },
            { input: { domanda: "vantaggi di fuoco" }, output: { risposta: "I Pokémon di tipo Fuoco sono forti contro Erba, Coleottero, e Ghiaccio." } },
            { input: { domanda: "svantaggi di acqua" }, output: { risposta: "I Pokémon di tipo Acqua sono deboli contro Elettro e Erba." } },
            { input: { domanda: "consigli per battaglie competitive" }, output: { risposta: "Bilancia il tuo team e fai attenzione ai tipi avversari!" } },
        ]);

        // Funzione per ottenere una risposta dall'IA
        function getResponse(question) {
            const output = net.run({ domanda: question.toLowerCase() });
            return output.risposta ? output.risposta : "Mi dispiace, non ho una risposta a questa domanda.";
        }

        // Gestione dell'invio del messaggio
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const message = input.value.trim();
            if (message) {
                addMessage('You', message);

                // Ottenere una risposta dall'IA
                const aiResponse = getResponse(message);
                addMessage('AI', aiResponse);

                input.value = '';
            }
        });