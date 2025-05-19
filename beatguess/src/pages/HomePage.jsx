import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const [nickname, setNickname] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  const handlePlay = () => {
    if (nickname.trim() === '') return;
    setIsSearching(true);
    setTimeout(() => {
      navigate('/duel', { state: { nickname } });
    }, 2000);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Nome del Sito</h1>
      <input
        type="text"
        placeholder="Inserisci il tuo nickname"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        style={{ padding: '10px', fontSize: '1rem', marginBottom: '1rem' }}
      />
      <br />
      <button
        onClick={handlePlay}
        disabled={isSearching}
        style={{ padding: '10px 20px', fontSize: '1rem' }}
      >
        {isSearching ? 'In attesa di un avversario...' : 'Play'}
      </button>
    </div>
  );
}
