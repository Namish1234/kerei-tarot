import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import notFoundImage from '../assets/404-image.png';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <motion.div
      className="not-found-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="not-found-image-wrapper">
        <img src={notFoundImage} alt="A lost card in a mystical forest" className="not-found-image" />
      </div>
      <div className="not-found-content"> {/* New wrapper for text content */}
        <h1>404 - Page Not Found</h1>
        <p>It seems this path is shrouded in mist. The card you seek is not here.</p>
        <Link to="/" className="not-found-link">Return to the Main Deck</Link>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;