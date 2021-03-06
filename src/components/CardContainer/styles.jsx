import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 2rem 2vw 5rem;

  @media (max-width: 550px) {
    gap: 1rem;
  }
`;
