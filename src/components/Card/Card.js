import React from 'react';
import Image from '../Image';
import * as S from './styles';

const Card = (props) => {
  const { dataID, image: src, text, onClick } = props;

  return (
    <S.Card
      className="card"
      data-id={dataID}
      onClick={(e) => onClick(e)}
      onTouchStart={(e) => {
        e.target.style.boxShadow = '0px 4px 3px 0px #f46565';
      }}
      onTouchEnd={(e) => {
        e.target.style.boxShadow = '0px 4px 4px 1px rgba(0, 0, 0, 0.25)';
      }}
    >
      <Image src={src} alt={text} />
      <S.Legend>{text}</S.Legend>
    </S.Card>
  );
};

export default Card;
