import React from 'react';
import * as S from './styles';

const Scoreboard = (props) => {
  const { score } = props;
  const { bestScore } = props;

  return (
    <S.Container id="scoreboard">
      <S.Score>
        <span>Score:</span> <span>{score}</span>
      </S.Score>

      <S.Score>
        <span>Best Score:</span> <span>{bestScore}</span>
      </S.Score>
    </S.Container>
  );
};

export default Scoreboard;
