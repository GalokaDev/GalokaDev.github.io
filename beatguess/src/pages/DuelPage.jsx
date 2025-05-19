import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function DuelPage() {
  const location = useLocation();
  const nickname = location.state?.nickname || 'Giocatore';
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const [correctAnswer] = useState('Imagine Dragons'); // risposta corretta temporanea

  const handleGuess = () => {
    if (input.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      setMessage('🎉 Complimenti! Hai indovinato!');
    } else {
      setMessage('❌ Risposta sbagliata. Riprova!');
    }
    setInput('');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Ciao {nickname}, indovina la canzone!</h1>
      <p>🎵 Riproduzione canzone (simulata)...</p>

      {/* Input per indovinare */}
      <input
        type="text"
        placeholder="Scrivi il titolo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: '10px', fontSize: '1rem', margin: '1rem 0' }}
      />
      <br />
      <button
        onClick={handleGuess}
        style={{ padding: '10px 20px', fontSize: '1rem' }}
      >
        Invia
      </button>

      {/* Messaggio risultato */}
      {message && <p style={{ marginTop: '20px', fontSize: '1.2rem' }}>{message}</p>}
    </div>
  );
}
