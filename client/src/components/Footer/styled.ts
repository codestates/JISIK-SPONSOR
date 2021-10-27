import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100vw;
  background-color: #343a40;
  padding: 80px 0;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  max-width: 960px;
  padding: 0 30px;
  margin: 0 auto;
  text-align: center;

  img {
    width: 272px;
    height: 40px;
  }
`;

export const TeamBox = styled.div`
  width: 100%;
  margin-top: 50px;
  border-top: 1px solid rgba(248, 249, 250, 0.3);

  img {
    width: 40px;
    height: 40px;
  }
`;

export const MemberBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;
  margin: 50px 0;
`;

export const MemberProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;
`;

export const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: #ced4da;

  & > span {
    margin-top: 3px;
    font-family: 'Lato';
  }

  & p span {
    font-size: 16px;
  }

  & p span:last-child {
    font-size: 12.8px;
    font-family: 'Lato';
    margin-left: 5px;
    color: #adb5bd;
  }
`;

export const Social = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  gap: 20px;

  img {
    width: 32px;
    height: 32px;
  }
`;

export const Copyright = styled.p`
  bottom: 0;
  font-family: Lato;
  font-size: 20px;
  line-height: 1.4;
  font-weight: 300;
  color: #adb5bd;
`;
