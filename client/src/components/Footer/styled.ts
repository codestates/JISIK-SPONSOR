import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100vw;
  background-color: #343a40;
  padding: 8rem 0;
  @media all and (max-width: 960px) {
    margin-bottom: 6.2rem;
  }
  @media all and (max-width: 620px) {
    padding: 6rem 0;
  }
`;

export const FooterWrapper = styled.div`
  width: 100%;
  max-width: 960px;
  padding: 0 3rem;
  margin: 0 auto;
  text-align: center;
  img {
    width: auto;
    height: 4rem;
  }
  @media all and (max-width: 620px) {
    padding: 0 3rem;
    img {
      height: 3rem;
    }
  }
`;

export const TeamBox = styled.div`
  width: 100%;
  margin-top: 5rem;
  border-top: 1px solid rgba(248, 249, 250, 0.1);
  img {
    width: 4rem;
    height: 4rem;
  }
`;

export const MemberBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 5rem 0;
  gap: 3rem;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const MemberProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: #ced4da;
  & > span {
    margin-top: 0.5rem;
    font-family: 'Lato';
  }
  & p span {
    font-size: 1.6rem;
  }
  & p span:last-child {
    font-size: 1.28rem;
    font-family: 'Lato';
    margin-left: 0.5rem;
    color: #adb5bd;
  }
`;

export const Social = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  gap: 2rem;
  img {
    width: 3.2rem;
    height: 3.2rem;
  }
`;

export const Copyright = styled.p`
  bottom: 0;
  font-family: Lato;
  font-size: 2rem;
  line-height: 1.4;
  font-weight: 300;
  color: #adb5bd;
  @media all and (max-width: 480px) {
    font-size: 1.6rem;
  }
`;
