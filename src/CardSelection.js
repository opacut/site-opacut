import React, { useState } from 'react';
import './CardSelection.css';

function CardSelection({ cards, onSelectionDone }) {
    const [selectedCards, setSelectedCards] = useState([]);

    // Toggle card selection
    const handleCardToggle = (card) => {
        setSelectedCards((prev) => {
            if (prev.includes(card)) {
                return prev.filter((c) => c.id !== card.id);
            } else {
                return [...prev, card];
            }
        });
    };

    // Pass selected cards back to the parent
    const handleDone = () => {
        onSelectionDone(selectedCards);
    };

    return (
        <div className="card-selection">
            <h1>Select Rooms</h1>
            <div className="card-grid">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className={`card ${selectedCards.includes(card) ? 'selected' : ''}`}
                        onClick={() => handleCardToggle(card)}
                    >
                        <img src={card.image} alt={card.name} />
                        <p>{card.name}</p>
                    </div>
                ))}
            </div>
            <button onClick={handleDone} className="done-button">
                Show Selected Cards
            </button>
        </div>
    );
}

export default CardSelection;