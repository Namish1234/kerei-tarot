import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SelectedCard.css';
import cardBackImage from '../assets/card.jpg';

const SelectedCard = ({ card, isFlipped, onClose }) => {
  const navigate = useNavigate();

  const handleInfoClick = () => {
    if (card && card.id) {
      // This will now work correctly, because the useEffect in App.jsx
      // will clean up the card state as soon as the URL changes.
      navigate(`/cards?selected=${card.id}`);
    }
  };

  if (!card) return null;

  return (
    <div className='selected-card-container'>
      <div className={`flipper ${isFlipped ? 'is-flipped' : ''}`}>
        <div className="card-face card-front" onClick={onClose}>
          <img src={cardBackImage} alt="Card Back" />
        </div>
        <div className="card-face card-back" onClick={handleInfoClick}>
          <img src={card.image} alt="Revealed Card" />
        </div>
      </div>
    </div>
  );
};

export default SelectedCard;