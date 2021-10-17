import styled from 'styled-components';

export const Card = styled.div`
  width: 180px;
  height: 205px;
  background: #f1f1f1;
  box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  cursor: pointer;
  transition: 0.2s ease-out;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    box-shadow: 0px 4px 3px 0px #f46565;
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 450px) {
    transition: none;
  }
`;

export const Legend = styled.span`
  font: normal calc(2px + 2vmin) Manrope;
  color: #2d2d2d;
  pointer-events: none;
`;
