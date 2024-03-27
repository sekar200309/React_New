
import React, { useState, useEffect } from 'react';
import './Home.css';
import backgroundVideo from './video.mp4';

const Home = () => {
  const [quotes] = useState([
    "Water is the driving force of all nature. - Leonardo da Vinci",
    "Thousands have lived without love, not one without water. - W. H. Auden",
    "The water you touch in a river is the last of that which has passed, and the first of that which is to come. - Leonardo da Vinci",
    "When the well is dry, we know the worth of water. - Benjamin Franklin",
    "Water is life, and clean water means health. - Audrey Hepburn"
  ]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex(prevIndex => (prevIndex + 1) % quotes.length);
    }, 2000); // Change quote every 2 seconds

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div className="home-page">
      <video className="background-video" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="quote-container">
        <h1>Valuable Quotes about Water</h1>
        <div className="quote">{quotes[currentQuoteIndex]}</div>
      </div>
    </div>
  );
};

export default Home;



