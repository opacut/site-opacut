import React, { useState } from 'react';
import CardList from './CardList';
import CardDetail from './CardDetail';
import BurgerMenu from './BurgerMenu';
import './App.css';
import rooms from './cards.json';
import characters from './characters.json';

//const cards = [];

function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('rooms');

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeDetail = () => {
    setSelectedCard(null);
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const handleNavigate = (screen) => {
    setCurrentScreen(screen);
    setMenuOpen(false);
  }

  const data = currentScreen === 'rooms' ? rooms : characters;

  const groupedCards = data.reduce((acc, card) => {
    if (!acc[card.color]) {
      acc[card.color] = [];
    }
    acc[card.color].push(card);
    return acc;
  }, {})

  return (
    <div className="App">
      {/* Burger Icon */}
      <button className="burger-icon" onClick={toggleMenu}>
        ☰
      </button>

      {/* Burger Menu */}
      <BurgerMenu
        isOpen={menuOpen}
        onClose={toggleMenu}
        onNavigate={handleNavigate}
      />

      {/* Main Content */}
      <h1>Room 25 Companion</h1>
      {Object.keys(groupedCards).map((color) => (
        <div key={color} className="color-section">
          <h2>{color}</h2>
          <CardList cards={groupedCards[color]} onCardClick={handleCardClick} />
        </div>
      ))}
      {selectedCard && <CardDetail card={selectedCard} onClose={closeDetail} />}
    </div>
  );
}

export default App;