document.addEventListener('DOMContentLoaded', function () {
    const chatContainer = document.querySelector('.pr-4');
    const form = document.querySelector('form');
    const input = form.querySelector('input');
    
    // Funzione per aggiungere messaggi nella chat
    function addMessage(author, text) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('flex', 'gap-3', 'my-4', 'text-gray-600', 'text-sm', 'flex-1');
        
        const avatar = document.createElement('span');
        avatar.classList.add('relative', 'flex', 'shrink-0', 'overflow-hidden', 'rounded-full', 'w-8', 'h-8');
        avatar.innerHTML = `<div class="rounded-full bg-gray-100 border p-1">
                            <svg stroke="none" fill="black" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" 
                            height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z">
                            </path></svg></div>`;
        
        const messageText = document.createElement('p');
        messageText.classList.add('leading-relaxed');
        messageText.innerHTML = `<span class="block font-bold text-gray-700">${author}</span> ${text}`;
        
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(messageText);
        chatContainer.appendChild(messageDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    // Funzione per rispondere a domande su PokéMMO
    function handlePokemmoQuery(message) {
        const pokemmoTips = `
            To build a strong team in PokéMMO, consider these tips:
            1. Balance Types: Include various types like Water, Electric, and Dragon to cover weaknesses.
            2. Speed and Power: Use fast sweepers like Gengar or Starmie to hit quickly and hard.
            3. Defensive Tanks: Pokemon like Blissey or Skarmory can tank hits and support the team.
            4. Status Moves: Moves like Thunder Wave or Toxic can cripple the opponent's team.
            5. Synergy: Ensure your Pokémon cover each other’s weaknesses.
        `;
        addMessage('AI', pokemmoTips);
    }

    // Funzione per inviare messaggi all'AI e ricevere una risposta
    async function sendMessageToAI(message) {
        addMessage('You', message);
        input.value = '';

        // Se il messaggio riguarda PokéMMO, rispondi con consigli specifici
        if (message.toLowerCase().includes('pokemmo')) {
            handlePokemmoQuery(message);
            return;
        }

        try {
            const response = await fetch('https://api.tuo-backend.com/chat', { // Cambia con il tuo backend AI
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: message })
            });

            const data = await response.json();
            addMessage('AI', data.response); // Mostra la risposta dell'AI
        } catch (error) {
            addMessage('AI', 'Sorry, there was an error processing your message.');
        }
    }

    // Gestione dell'invio del messaggio
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const message = input.value.trim();
        if (message) {
            sendMessageToAI(message);
        }
    });
});