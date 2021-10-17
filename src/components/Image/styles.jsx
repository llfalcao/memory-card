import styled from 'styled-components';

export const ImageContainer = styled.div`
  display: block;
  margin: 15px auto;
  width: 150px;
  height: 150px;
  background: #c4c4c4;
  border-radius: 11px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
