import React from 'react';
import './BurgerMenu.css';

function BurgerMenu({ isOpen, onClose, onNavigate }) {
    return (
        <div className={`burger-menu ${isOpen ? 'open' : ''}`}>
            <div className='menu-content'>
                <button className='close-button' onClick={onClose}>X</button>
                <ul>
                    <li onClick={() => onNavigate('rooms')}>Rooms</li>
                    <li onClick={() => onNavigate('characters')}>Characters</li>
                </ul>
            </div>
        </div>
    );
}

export default BurgerMenu;