import styled from 'styled-components';

export const Header = styled.header`
  text-align: center;

  @media (min-width: 1921px) {
    margin-bottom: 3rem;
  }
`;

export const Title = styled.h1`
  font: bold calc(24px + 2vmin) Manrope;
  color: #f46565;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  margin: 1rem 0 0;
`;

export const Subtitle = styled.h2`
  font: bold calc(4px + 2vmin) Manrope;
  color: #00000095;

  @media (min-width: 1921px) {
    font-size: 1.8vmin;
  }
`;

export const Paragraph = styled.p`
  font: 500 calc(4px + 2vmin) SF Pro Display, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  color: #444;
  margin: 1rem 0 1.5rem;

  @media (max-width: 550px) {
    max-width: 300px;
    font-size: 1rem;
    display: block;
  }
`;
