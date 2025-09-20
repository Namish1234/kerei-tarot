import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from './firebase.js';
// UPDATED: Removed serverTimestamp, which was causing the error
import { doc, setDoc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';

import Navbar from './components/Navbar';
import SelectedCard from './components/SelectedCard';
import MainPage from './pages/MainPage';
import CardsPage from './pages/CardsPage';
import AboutPage from './pages/AboutPage';
import ProcessPage from './pages/ProcessPage';
import NotFoundPage from './pages/NotFoundPage';
import ScrollToTop from './components/ScrollToTop';
import AuthModal from './components/AuthModal';
import ProtectedRoute from './components/ProtectedRoute';
import ReadingsPage from './pages/ReadingsPage';
import { tarotData } from './data/tarotData';
import './App.css';

function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [clickedCardId, setClickedCardId] = useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();

  const createUserProfileDocument = async (user) => {
    if (!user) return;
    const userDocRef = doc(db, 'users', user.uid);
    const snapshot = await getDoc(userDocRef);
    if (!snapshot.exists()) {
      try {
        await setDoc(userDocRef, {
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          createdAt: new Date(),
          readings: []
        });
        console.log("User profile created for:", user.uid);
      } catch (err) {
        console.error("Error creating user document:", err);
      }
    }
  };

  useEffect(() => {
    if (user) {
      createUserProfileDocument(user);
    }
  }, [user]);

  useEffect(() => {
    if (location.pathname !== '/') {
      if (selectedCard) {
        setSelectedCard(null);
        setIsFlipped(false);
        setClickedCardId(null); 
      }
    }
  }, [location.pathname, selectedCard]);
  
  const handleCardClick = async (cardFanId) => {
    if (selectedCard) return;

    setIsFlipped(false);
    setClickedCardId(cardFanId);
    
    const randomCard = tarotData[Math.floor(Math.random() * tarotData.length)];
    setSelectedCard(randomCard);

    const currentUser = auth.currentUser;
    if (currentUser) {
      try {
        const userDocRef = doc(db, 'users', currentUser.uid);
        await updateDoc(userDocRef, {
          readings: arrayUnion({
            cardId: randomCard.id,
            cardName: randomCard.name,
            // UPDATED: Use a standard JavaScript Date object
            timestamp: new Date() 
          })
        });
        console.log("Reading saved successfully for user:", currentUser.uid);
      } catch (err) {
        console.error("Error saving reading:", err);
      }
    }

    setTimeout(() => {
      setIsFlipped(true);
    }, 100); 
  };
  
  const handleClose = () => {
    setSelectedCard(null);
    setIsFlipped(false);
    setClickedCardId(null);
  };
  
  const isCardSelected = !!selectedCard;
  
  const AppRoutes = () => {
    return (
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
           <Route path="/" element={ <MainPage isBlurred={isCardSelected} onCardClick={handleCardClick} clickedCardId={clickedCardId} /> } />
          <Route path="/cards" element={<CardsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/process" element={<ProcessPage />} />
          
          <Route 
            path="/readings"
            element={
              <ProtectedRoute>
                <ReadingsPage user={user} />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
    );
  };

  return (
    <div className="App">
      <ScrollToTop />
      <Navbar user={user} onLoginClick={() => setIsAuthModalOpen(true)} />
      
      <AppRoutes />

      {isCardSelected && (
        <>
          <div className="close-overlay" onClick={handleClose}></div>
          <SelectedCard 
            card={selectedCard} 
            isFlipped={isFlipped}
            onClose={handleClose}
          />
        </>
      )}

      <AnimatePresence>
        {isAuthModalOpen && <AuthModal onClose={() => setIsAuthModalOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}

export default App;