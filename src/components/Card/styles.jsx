import styled from 'styled-components';

export const Card = styled.div`
  width: 180px;
  height: 205px;
  background: #f1f1f1;
  box-shadow: 0px 4px 5px 2px rgb(0, 0, 0, 0.1);
  border-radius: 25px;
  cursor: pointer;
  transition: transform 0.1s ease-out;
  user-select: none;

  &:hover {
    box-shadow: 0px 4px 3px 0px #f4656590;
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
