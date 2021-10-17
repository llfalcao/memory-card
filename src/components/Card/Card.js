import React from 'react';
import Image from '../Image';
import * as S from './styles';

const Card = (props) => {
  const { image: src, text } = props;

  return (
    <S.Card>
      <Image src={src} alt={text} />
      <S.Legend>{text}</S.Legend>
    </S.Card>
  );
};

export default Card;
