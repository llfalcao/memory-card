import React from 'react';
import Card from '../Card';
import * as S from './styles';

const CardContainer = (props) => {
  const { cards } = props;

  return (
    <S.Container id="card-container">
      {cards.map((card) => (
        <Card key={card.id} image={card.src} text={card.text} />
      ))}
    </S.Container>
  );
};

export default CardContainer;
