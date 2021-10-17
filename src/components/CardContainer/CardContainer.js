import React from 'react';
import Card from '../Card';
import * as S from './styles';

const CardContainer = (props) => {
  const { cards, onClick } = props;

  return (
    <S.Container id="card-container">
      {cards.map((card) => (
        <Card
          key={card.id}
          dataID={card.id}
          image={card.src}
          text={card.text}
          onClick={onClick}
        />
      ))}
    </S.Container>
  );
};

export default CardContainer;
