import React from 'react';
import * as S from './styles';

const Modal = () => {
  return (
    <>
      <S.Overlay></S.Overlay>
      <S.Modal className="modal">
        <S.Content>Nice job!</S.Content>
        <S.Content>You win!</S.Content>
      </S.Modal>
    </>
  );
};

export default Modal;
