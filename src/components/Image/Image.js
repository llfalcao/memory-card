import React from 'react';
import * as S from './styles';

const Image = (props) => {
  const { src, text } = props;

  return (
    <S.ImageContainer>
      <S.Image src={src} alt={text} />
    </S.ImageContainer>
  );
};

export default Image;
