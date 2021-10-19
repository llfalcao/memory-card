import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import CardContainer from './components/CardContainer';
import Modal from './components/Modal';
import cardData from './assets/cards/cards';

const App = () => {
  const [score, setScore] = useState({ current: 0, best: 0 });
  const [cards, setCards] = useState(cardData);

  useEffect(() => {
    if (score.current > score.best) {
      setScore({ ...score, best: score.current });
    }
  }, [score]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const incrementScore = () =>
    setScore({ ...score, current: score.current + 1 });

  const resetGame = (clearAll) => {
    cardData.map((card) => (card.isClicked = false));
    setCards(cardData);
    if (clearAll) {
      setScore({ ...score, current: 0, best: 0 });
    } else {
      setScore({ ...score, current: 0 });
    }
  };

  const handleCardClick = (e) => {
    const { id } = e.target.dataset;
    const index = cards.findIndex((card) => card.id === id);
    if (cards[index].isClicked) {
      resetGame();
      return;
    }
    const newCards = [...cards];
    newCards[index].isClicked = true;
    shuffleArray(newCards);
    setCards(newCards);
    incrementScore();
  };

  return (
    <div className="App">
      <Header />
      <Scoreboard score={score.current} bestScore={score.best} />
      <CardContainer cards={cards} onClick={handleCardClick} />
      {score.best === cards.length ? <Modal resetGame={resetGame} /> : null}
    </div>
  );
};

export default App;
