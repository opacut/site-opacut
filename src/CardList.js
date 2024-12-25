import React from 'react';
import './CardList.css';

function CardList({ cards, onCardClick }) {
    return (
        <div className="card-list">
            {cards.map((card) => (
                <div key={card.id} className="card-thumbnail" onClick={() => onCardClick(card)}>
                    <img src={card.image} alt={card.name} />
                </div>
            ))}
        </div>
    );
}

export default CardList;