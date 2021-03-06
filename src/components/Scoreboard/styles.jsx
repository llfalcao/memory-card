import styled from 'styled-components';

export const Container = styled.div`
  background: #0c152d;
  border-radius: 10px;
  width: calc(250px + 2vmin);
  height: 40px;
  filter: drop-shadow(0px 3px 0px #f46565);
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 0.5rem;
  padding: 0 1rem;
  cursor: default;
  transition: 0.1s ease-out;
  z-index: 1000;

  &:hover {
    filter: none;
    transform: translateY(3px);
  }

  @media (min-width: 1921px) {
    width: calc(300px + 2vmin);
    height: 50px;
    margin-bottom: 2rem;
  }
`;

export const Score = styled.div`
  font: 500 calc(5px + 1.6vmin) Manrope;
  color: #ffffff;
  padding-bottom: 0.15rem;

  @media (min-width: 1361px) {
    font-size: calc(2px + 1.6vmin);
  }

  @media (min-width: 1921px) {
    font-size: 1.35vmin;
  }

  @media (min-width: 2561px) {
    font-size: 0.95vmin;
  }
`;
