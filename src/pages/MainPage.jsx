import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import CardFan from '../components/CardFan';

// Accept clickedCardId as a prop
const MainPage = ({ isBlurred, clickedCardId, onCardClick }) => {
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const originalRootCssText = root.style.cssText;
    const originalBodyCssText = body.style.cssText;
    root.style.height = '100%';
    root.style.overflow = 'hidden';
    body.style.height = '100%';
    body.style.overflow = 'hidden';
    return () => {
      root.style.cssText = originalRootCssText;
      body.style.cssText = originalBodyCssText;
    };
  }, []);

  return (
    <>
      <Hero className={isBlurred ? 'blurred' : ''} /> 
      <CardFan 
        onCardClick={onCardClick}
        clickedCardId={clickedCardId} // Pass it down to CardFan
        isBlurred={isBlurred}
      />
    </>
  );
};

export default MainPage;