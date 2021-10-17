import styled from 'styled-components';

export const Card = styled.div`
  width: 180px;
  height: 205px;
  background: #f1f1f1;
  box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    transform: scale(1.02);
    filter: drop-shadow(0px 3px 0px #f46565);
    box-shadow: none;
  }
`;

export const Legend = styled.span`
  font: normal calc(2px + 2vmin) Manrope;
  color: #2d2d2d;
`;
