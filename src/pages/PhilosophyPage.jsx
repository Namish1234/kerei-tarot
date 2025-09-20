import React from 'react';
import { motion } from 'framer-motion';

const PhilosophyPage = () => {
  return (
    <motion.div 
      style={{ paddingTop: '100px', textAlign: 'center', color: 'white' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Philosophy Page</h1>
      <p>Content for this page is coming soon.</p>
    </motion.div>
  );
};

export default PhilosophyPage;