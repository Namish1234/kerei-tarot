import React from 'react';
import { motion } from 'framer-motion';

const ProcessPage = () => {
  return (
    <motion.div 
      style={{ paddingTop: '100px', textAlign: 'center', color: 'white' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Process Page</h1>
      <p>Content for this page is coming soon.</p>
    </motion.div>
  );
};

export default ProcessPage;