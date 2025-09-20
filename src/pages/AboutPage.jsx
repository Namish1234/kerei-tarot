import React from 'react';
import { motion } from 'framer-motion';
// REMOVED: BionicReader import is gone
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import './AboutPage.css';
import myImage from '../assets/me.jpg';

const AboutPage = () => {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Right Column: Developer Info */}
      <div className="developer-pane">
        <motion.img
          src={myImage}
          alt="Zaratsu, the Developer"
          className="developer-image"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
        />
        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Zaratsu
        </motion.h3>
        <motion.p
          className="developer-title"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Creator & Developer
        </motion.p>
        <motion.div
          className="social-links"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a href="https://github.com/Namish1234" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://instagram.com/namish_000" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="mailto:namishshukla2@gmail.com" aria-label="Email">
            <FiMail />
          </a>
        </motion.div>
        <motion.p
          className="gemini-credit"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Conceptual pathways and poetic sparks were kindled with the help of Google's Gemini.
        </motion.p>
      </div>

      {/* Left Column: Main Content */}
      <div className="content-pane">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h1>About Kerei</h1>
          <p className="subtitle">
            Kerei was born from a simple idea: that the tools for introspection should be as beautiful and accessible as the insights they help reveal. In a digital world often cluttered with distractions and paywalls, we sought to create a quiet, modern sanctuary. Our purpose is to offer a straightforward and completely free space for you to connect with the timeless archetypes of the Tarot, using them not to predict the future, but to better understand your present.
          </p>
          <hr className="divider" />
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2>Kerei (綺麗) &ndash; Our Name</h2>
          <p className="bionic-text">
            Kerei is a Japanese word that translates to 'beautiful,' 'pretty,' or 'clean.' We chose this name because it perfectly captures our approach to this ancient practice. The journey of self-discovery doesn't need to be complex or shrouded in mystery. It can be a clean, clear, and beautiful process of looking within. Our minimalist design and direct approach are all inspired by the meaning of Kerei—helping you find the simple beauty in your own inner wisdom.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2>A Note from the Creator</h2>
          {/* UPDATED: Reverted to a standard <p> tag */}
          <p className="bionic-text">
            A confession: I am an atheist. I don't personally believe in a predetermined fate, in luck handed down by the cosmos, or that these cards hold supernatural power. I believe that luck is not a force we wait for, but a current we create. It is the downstream effect of our choices, our courage, our actions, and our resilience. We are the architects of our own journey. So why, then, a Tarot website? Because I also believe in the power of introspection. These cards are not magic—they are archetypes. They are a 78-paneled mirror reflecting the universal story of the human heart.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <h2>Tarot as Affirmation</h2>
          {/* UPDATED: Reverted to a standard <p> tag */}
          <p className="bionic-text">
            Do not look to these cards for answers you must give yourself. Do not use them as a crutch, but as a compass. The card you draw is a reflection of your current state of mind—a prompt for the conversation you need to have with yourself. If you seek courage and you draw Strength, it is not a prediction. It is an affirmation of the strength you are looking for within. If you face an ending and draw Death, it is not a dark omen, but a chance to reflect on the grace of letting go. Ultimately, the power is not in the card; it is in the quiet moment of reflection it provides. The story it tells is the one you are already writing.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;