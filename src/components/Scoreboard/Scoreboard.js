import React from 'react';
import * as S from './styles';

const Scoreboard = () => {
  return (
    <S.Container id="scoreboard">
      <S.Score>
        <span>Score:</span> <span>12</span>
      </S.Score>

      <S.Score>
        <span>Best Score:</span> <span>12</span>
      </S.Score>
    </S.Container>
  );
};

export default Scoreboard;
