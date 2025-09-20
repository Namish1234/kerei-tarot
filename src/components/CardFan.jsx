import React from 'react';
import './CardFan.css';
import cardBackImage from '../assets/card.jpg';
import useMediaQuery from '../hooks/useMediaQuery';

const allCardClassNames = [
  'frame-47', 'frame-48', 'frame-49', 'frame-50', 'frame-51', 'frame-52', 'frame-53',
  'frame-54', 'frame-55', 'frame-56', 'frame-57', 'frame-58', 'frame-59', 'frame-60',
  'frame-61', 'frame-62', 'frame-63', 'frame-64', 'frame-65', 'frame-66', 'frame-67',
  'frame-68', 'frame-69', 'frame-70', 'frame-71', 'frame-72', 'frame-73', 'frame-74',
  'frame-75', 'frame-76'
];

// UPDATED: A slightly more central selection of cards for a better look
const mobileCardClassNames = ['frame-61', 'frame-62', 'frame-63', 'frame-64'];

const CardFan = ({ onCardClick, clickedCardId, isBlurred }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const cardsToRender = isMobile ? mobileCardClassNames : allCardClassNames;

  return (
    <div className={`card-fan-wrapper ${isBlurred ? 'blurred' : ''}`}>
      <div className="cards">
        {cardsToRender.map((className) => (
          <img
            key={className}
            className={`${className} ${className === clickedCardId ? 'hidden' : ''}`}
            src={cardBackImage}
            alt={`Card ${className}`}
            onClick={() => onCardClick(className)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardFan;