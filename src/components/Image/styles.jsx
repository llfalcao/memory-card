import styled from 'styled-components';

export const ImageContainer = styled.div`
  margin: 15px auto 0;
  width: 150px;
  height: 150px;
  background: #c4c4c4;
  border-radius: 11px;
  overflow: hidden;
  pointer-events: none;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
