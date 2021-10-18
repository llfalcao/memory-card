import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #0c152df8;
  width: 220px;
  padding: 2rem 0;
  border-radius: 10px;
  animation: slide 0.5s ease-out;
  filter: drop-shadow(0px 4px 0px #f46565);

  @keyframes slide {
    0% {
      transform: translate(-50%, -40%);
    }
    50% {
      transform: translate(-50%, -52%);
    }
    100% {
      transform: translate(-50%, -50%);
    }
  }
`;

export const Content = styled.p`
  font: normal calc(10px + 2vmin) Manrope;
  width: max-content;
  margin: auto;
`;

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: #000000cc;
`;
