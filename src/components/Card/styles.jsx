import styled from 'styled-components';

export const Card = styled.div`
  width: 180px;
  height: 205px;
  background: linear-gradient(to bottom, #ece9ff, #f1f1f100);
  box-shadow: 0px 2px 10px 2px rgb(0, 0, 0, 0.1);
  border-radius: 20px;
  cursor: pointer;
  transition: transform 0.1s ease-out;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: start;

  &:hover {
    background: linear-gradient(to bottom, #ece9ff, #f1f1f18b);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 450px) {
    transition: none;
  }
`;

export const Legend = styled.span`
  font: 500 calc(2px + 2vmin) Manrope;
  color: #2d2d2d;
  pointer-events: none;
  margin: 0.5rem 0;

  @media (min-width: 1361px) {
    font-size: 1.5vmin;
  }

  @media (min-width: 1921px) {
    font-size: 0.95vmin;
  }

  @media (min-width: 2561px) {
    font-size: 0.7vmin;
  }
`;
