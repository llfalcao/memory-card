import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import CardContainer from './components/CardContainer';
import cardData from './assets/cards/cards';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState(cardData);

  const incrementScore = () => {};

  const resetGame = () => {};

  const handleCardClick = (e) => {
    const card = e.target.closest('.card');
    const { id } = card.dataset;
    const index = cards.findIndex((card) => card.id === id);
    if (cards[index].isClicked) {
      resetGame();
      return;
    }

    const newCards = [...cards];
    newCards[index].isClicked = true;
    setCards(newCards);
    incrementScore();
  };

  return (
    <div className="App">
      <Header />
      <Scoreboard score={score} bestScore={bestScore} />
      <CardContainer cards={cards} onClick={handleCardClick} />
    </div>
  );
}

export default App;
