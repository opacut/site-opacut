import React from 'react';
import './CardDetail.css';

function CardDetail({ card, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Fixed Header with Close Button */}
        <div className="modal-header">
          <button className="close-button" onClick={onClose}>
            X
          </button>
          <h2>{card.name}</h2>
        </div>

        {/* Scrollable Content */}
        <div className="modal-body">
          {/* Images Container */}
          <div className="images-container">
            <div className="miniature-container">
              <img src={card.image} alt={card.name} className="miniature-image" />
            </div>
            {card.ability_image && (
              <div className="ability-image-container">
                <img
                  src={card.ability_image}
                  alt={card.ability_name}
                  className="ability-image"
                />
              </div>
            )}
          </div>

          {/* Ability Details */}
          {card.ability_name && card.ability_description && (
            <div className="ability-section">
              <h3>{card.ability_name}</h3>
              <p
                className="ability-description"
                dangerouslySetInnerHTML={{ __html: card.ability_description }}
              />
            </div>
          )}
          {!card.ability_name && (
            <div className="decription-section">
              <h3>{card.ability_name}</h3>
              <p
                className="room-description"
                dangerouslySetInnerHTML={{ __html: card.description }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
