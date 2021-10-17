import React from 'react';
import Image from '../Image';
import * as S from './styles';

const Card = (props) => {
  const { dataID, image: src, text, onClick } = props;

  return (
    <S.Card className="card" data-id={dataID} onClick={(e) => onClick(e)}>
      <Image src={src} alt={text} />
      <S.Legend>{text}</S.Legend>
    </S.Card>
  );
};

export default Card;
