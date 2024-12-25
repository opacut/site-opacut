import React, { useState } from 'react';
import CardList from './CardList';
import CardDetail from './CardDetail';
import BurgerMenu from './BurgerMenu';
import './App.css';
import rooms from './rooms_compe_2025.json';
import characters from './characters.json';

//const cards = [];

function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('rooms');
  const [modalOpen, setModalOpen] = useState(false);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setModalOpen(true);
  };

  const closeDetail = () => {
    setSelectedCard(null);
    setModalOpen(false);
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const handleNavigate = (screen) => {
    setCurrentScreen(screen);
    setMenuOpen(false);
  }

  const data = currentScreen === 'rooms' ? rooms : characters;

  return (
    <div className='App'>
        {/* Burger Icon */}
        {!modalOpen && (
            <button className='burger-icon' onClick={toggleMenu}>
                ☰
            </button>
        )}

        {/* Burger Menu */}
        <BurgerMenu
            isOpen={menuOpen}
            onClose={toggleMenu}
            onNavigate={handleNavigate}
        />

        {/* Main Content */}
        <h1>{currentScreen === 'rooms' ? "Rooms" : "Characters"}</h1>
        {currentScreen === 'rooms' ? (
            // Grouped by color for Rooms
            Object.keys(
                data.reduce((acc, card) => {
                    if (!acc[card.color]) acc[card.color] = [];
                    acc[card.color].push(card);
                    return acc;
                }, {})
            ).map((color) => (
                <div key={color} className='color-section'>
                    <h2>{color}</h2>
                    <CardList
                        cards={data.filter((card) => card.color === color)}
                        onCardClick={handleCardClick}
                    />
                </div>
            ))
        ) : (
            // Flat list for Characters
            <CardList cards={data} onCardClick={handleCardClick} />
        )}

        {selectedCard && <CardDetail card={selectedCard} onClose={closeDetail} />}
    </div>
  );
}

export default App;