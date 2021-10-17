import React from 'react';
import Image from '../Image';
import * as S from './styles';

const Card = (props) => {
  const { text } = props;

  return (
    <S.Card>
      <Image />
      <S.Legend>{text}</S.Legend>
    </S.Card>
  );
};

export default Card;
