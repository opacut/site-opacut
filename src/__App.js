import React, { useState } from 'react';
import CardList from './CardList';
import CardDetail from './CardDetail';
import CardSelection from './CardSelection';
import './App.css';
import cards from './cards.json';

//const cards = [];

function App() {
  const [selectedCards, setSelectedCards] = useState(null);
  const [finalCards, setFinalCards] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  // Handle selection done
  const handleSelectionDone = (cardsSubset) => {
    setFinalCards(cardsSubset);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeDetail = () => {
    setSelectedCard(null);
  }

  const groupedCards = cards.reduce((acc, card) => {
    if (!acc[card.color]) {
      acc[card.color] = [];
    }
    acc[card.color].push(card);
    return acc;
  }, {})

  return (
    <div className="App">
        {!finalCards ? (
            <CardSelection cards={cards} onSelectionDone={handleSelectionDone} />
        ) : (
          <>
            <h1>Room 25 Companion</h1>
              {Object.keys(groupedCards).map((color) => (
                <div key={color} className="color-section">
                  <h2>{color}</h2>
                  <CardList cards={groupedCards[color]} onCardClick={handleCardClick} />
                </div>
            ))}
            {selectedCard && <CardDetail card={selectedCard} onClose={closeDetail} />}
            <button onClick={() => setFinalCards(null)} className="reset-button">
                Reset Selection
            </button>
          </>
          )}
    </div>
  );
}

export default App;