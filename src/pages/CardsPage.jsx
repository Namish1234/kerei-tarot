import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { tarotData } from '../data/tarotData';
import CardOverlay from '../components/CardOverlay';
import './CardsPage.css';

// REMOVED: The getImageUrl helper function is no longer needed here

const CardsPage = () => {
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const preSelectedId = searchParams.get('selected');
    if (preSelectedId) {
      setSelectedCardId(preSelectedId);
    }
  }, [searchParams]);

  const handleCardClick = (id) => {
    setSelectedCardId(id);
  };

  const handleCloseOverlay = () => {
    setSelectedCardId(null);
  };

  return (
    <motion.div
      className="cards-page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>The Major Arcana</h2>
      <div className="card-grid">
        {tarotData
          .filter((card) => card.type === 'major')
          .map((card) => (
            <div key={card.id} className="card-link" onClick={() => handleCardClick(card.id)}>
              <img src={card.image} alt={card.name} />
              <p>{card.name}</p>
            </div>
          ))}
      </div>
      {/* ... (all the other suit grids are the same, just using card.image) ... */}
      <h2>The Suit of Wands</h2>
      <div className="card-grid">
        {tarotData
          .filter((card) => card.suit === 'wands')
          .map((card) => (
            <div key={card.id} className="card-link" onClick={() => handleCardClick(card.id)}>
              <img src={card.image} alt={card.name} />
              <p>{card.name}</p>
            </div>
          ))}
      </div>
      <h2>The Suit of Cups</h2>
      <div className="card-grid">
        {tarotData
          .filter((card) => card.suit === 'cups')
          .map((card) => (
            <div key={card.id} className="card-link" onClick={() => handleCardClick(card.id)}>
              <img src={card.image} alt={card.name} />
              <p>{card.name}</p>
            </div>
          ))}
      </div>
      <h2>The Suit of Swords</h2>
      <div className="card-grid">
        {tarotData
          .filter((card) => card.suit === 'swords')
          .map((card) => (
            <div key={card.id} className="card-link" onClick={() => handleCardClick(card.id)}>
              <img src={card.image} alt={card.name} />
              <p>{card.name}</p>
            </div>
          ))}
      </div>
      <h2>The Suit of Pentacles</h2>
      <div className="card-grid">
        {tarotData
          .filter((card) => card.suit === 'pentacles')
          .map((card) => (
            <div key={card.id} className="card-link" onClick={() => handleCardClick(card.id)}>
              <img src={card.image} alt={card.name} />
              <p>{card.name}</p>
            </div>
          ))}
      </div>


      {selectedCardId && (
        <CardOverlay cardId={selectedCardId} onClose={handleCloseOverlay} />
      )}
    </motion.div>
  );
};

export default CardsPage;