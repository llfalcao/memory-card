import React from 'react';
import * as S from './styles';
import btnRestart from '../../assets/buttons/restart.svg';

const Modal = (props) => {
  const { resetGame } = props;

  return (
    <>
      <S.Overlay></S.Overlay>
      <S.Modal className="modal">
        <S.Content>Nice job!</S.Content>
        <S.Content>You win!</S.Content>
        <S.Button type="button">
          <S.ButtonImg src={btnRestart} alt="Restart" />
          <S.ButtonText onClick={() => resetGame(true)}>Restart</S.ButtonText>
        </S.Button>
      </S.Modal>
    </>
  );
};

export default Modal;
