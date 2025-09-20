import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { tarotData } from '../data/tarotData';
import './CardOverlay.css';

const CardOverlay = ({ cardId, onClose }) => {
  const card = tarotData.find((c) => c.id === cardId);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    if (cardId) {
      const timer = setTimeout(() => {
        setShowInfo(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [cardId]);

  const handleClose = () => {
    setShowInfo(false);
    onClose();
  };
  
  return (
    <AnimatePresence>
      {cardId && (
        <motion.div
          className="card-overlay-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleClose}
        >
          <motion.div
            className="card-overlay-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button className="card-overlay-close" onClick={handleClose}>×</button>

            <motion.div className="card-overlay-image" layout transition={{ type: 'spring', damping: 25, stiffness: 200 }}>
              <img src={card.image} alt={card.name} />
            </motion.div>

            {showInfo && (
              <motion.div
                className="card-overlay-info"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h1>{card.name}</h1>
                <div className="keywords">
                  {card.keywords.map((keyword, index) => (
                    <span key={index} className="keyword-tag">#{keyword}</span>
                  ))}
                </div>
                {/* UPDATED: Display the description from our data file */}
                <p>{card.description}</p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CardOverlay;