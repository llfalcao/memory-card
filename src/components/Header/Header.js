import React from 'react';
import * as S from './styles';

const Header = () => {
  return (
    <S.Header id="header">
      <S.Title>Memory Card</S.Title>
      <S.Subtitle>
        Click on a card to increase your score, but not more than once!
      </S.Subtitle>
    </S.Header>
  );
};

export default Header;
