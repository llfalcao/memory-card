import React from 'react';
import * as S from './styles';

const Header = () => {
  return (
    <S.Header id="header">
      <S.Title>Memory Game</S.Title>
      <S.Subtitle>Game of Thrones Edition</S.Subtitle>
      <S.Paragraph>
        Click on a card to increase your score, but not more than once!
      </S.Paragraph>
    </S.Header>
  );
};

export default Header;
