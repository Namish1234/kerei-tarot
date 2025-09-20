import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// REMOVED: No more database functions needed here
import { auth } from '../firebase.js';
import './AuthModal.css';
import googleIcon from '../assets/google-icon.png';

const AuthModal = ({ onClose }) => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      // The profile will be created automatically by App.jsx now
      await signInWithPopup(auth, provider);
      onClose();
    } catch (error) {
      setError("Failed to sign in with Google. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (isLoginView) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        onClose();
      } catch (error) {
        setError("Invalid email or password. Please try again.");
      }
    } else {
      try {
        // The profile will be created automatically by App.jsx now
        await createUserWithEmailAndPassword(auth, email, password);
        onClose();
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          setError("This email address is already in use.");
        } else {
          setError("Failed to create an account. Please try again.");
        }
      }
    }
  };

  // The rest of the component's JSX is exactly the same
  return (
    <motion.div
      className="auth-modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="auth-modal-content"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="auth-modal-close" onClick={onClose}>×</button>
        <h2>{isLoginView ? 'Welcome Back' : 'Create Your Account'}</h2>
        
        <button className="google-signin-btn" onClick={handleGoogleSignIn}>
          <img src={googleIcon} alt="Google logo" />
          <span>Sign in with Google</span>
        </button>

        <div className="divider-line">
          <span>OR</span>
        </div>

        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Email Address" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Password" 
            required 
            minLength="6"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="auth-error">{error}</p>}
          <button type="submit" className="email-submit-btn">
            {isLoginView ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <div className="toggle-view">
          {isLoginView ? (
            <p>Don't have an account? <span onClick={() => { setIsLoginView(false); setError(''); }}>Sign Up</span></p>
          ) : (
            <p>Already have an account? <span onClick={() => { setIsLoginView(true); setError(''); }}>Login</span></p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AuthModal;