import styled from 'styled-components';

export const CallbackContainer = styled.div`
  background: ${({ theme }) => theme.colors.violet};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > h1 {
    margin-top: 2.5rem;
  }
  & > h1 > span {
    font-size: 6rem;
    font-weight: 900;
    line-height: 1.4em;
    color: #ffffff;
    position: relative;
    top: 2rem;
    display: inline-block;
    animation: bounce 0.3s ease infinite alternate;
    text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
      0 5px 0 #ccc, 0 6px 0 transparent, 0 7px 0 transparent,
      0 8px 0 transparent, 0 9px 0 transparent, 0 10px 10px rgba(0, 0, 0, 0.4);
  }

  & > p {
    font-size: 4rem;
    font-weight: 500;
    line-height: 1.35em;
    color: #ffffff;
    text-align: center;
  }

  & > h1 > span:nth-child(2) {
    animation-delay: 0.1s;
  }
  & > h1 > span:nth-child(3) {
    animation-delay: 0.2s;
  }
  & > h1 > span:nth-child(4) {
    animation-delay: 0.3s;
  }
  & > h1 > span:nth-child(5) {
    animation-delay: 0.4s;
  }
  & > h1 > span:nth-child(6) {
    animation-delay: 0.5s;
  }
  & > h1 > span:nth-child(7) {
    animation-delay: 0.6s;
  }
  & > h1 > span:nth-child(8) {
    animation-delay: 0.7s;
  }
  & > h1 > span:nth-child(9) {
    animation-delay: 0.8s;
  }
  & > h1 > span:nth-child(10) {
    animation-delay: 0.9s;
  }
  & > h1 > span:nth-child(11) {
    animation-delay: 0.1s;
  }
  & > h1 > span:nth-child(12) {
    animation-delay: 0.11s;
  }
  @keyframes bounce {
    100% {
      top: -20px;
      text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
        0 5px 0 #ccc, 0 6px 0 #ccc, 0 7px 0 #ccc, 0 8px 0 #ccc, 0 9px 0 #ccc,
        0 50px 25px rgba(0, 0, 0, 0.2);
    }
  }
`;
