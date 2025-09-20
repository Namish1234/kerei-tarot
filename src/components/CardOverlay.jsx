import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { tarotData } from '../data/tarotData';
import './CardOverlay.css';

// REMOVED: The getImageUrl helper function is no longer needed here

const CardOverlay = ({ cardId, onClose }) => {
  const card = tarotData.find((c) => c.id === cardId);

  // ... (the rest of the component is the same, just using card.image)
  // ... for example:
  // <img src={card.image} alt={card.name} />
  
  if (!card) {
    return null;
  }
  
  // (The full component code is long, so I'm showing the key change)
  // Just make sure to remove the getImageUrl helper and use `card.image` directly
  // Here is the full code for clarity:
  
  const [showInfo, setShowInfo] = React.useState(false);

  React.useEffect(() => {
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
                <p>
                  Maybe you are at the brink of something new? Are you?
                  This section can be extended with more detailed information about the card's meaning.
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


export default CardOverlay;