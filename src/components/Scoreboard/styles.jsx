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
`;

export const Score = styled.div`
  font: 500 calc(5px + 1.6vmin) Manrope;
  color: #ffffff;
  padding-bottom: 0.15rem;
`;
