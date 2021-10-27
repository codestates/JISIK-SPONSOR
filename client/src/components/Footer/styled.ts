import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100vw;
  height: 515px;
  background-color: #343a40;
  padding: 80px 270px;
`;

export const FooterWrapper = styled.div`
  display: flex;
  width: 900px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 272px;
    height: 40px;
  }
`;

export const TeamBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 900px;
  height: 265px;
  /* background-color: beige; */
  margin-top: 50px;
  border-top: 1px solid rgba(248, 249, 250, 0.3);
  position: relative;

  img {
    width: 40px;
    height: 40px;
  }
`;

export const MemberBox = styled.div`
  display: flex;
  gap: 10px;
  width: 733px;
  position: absolute;
  top: 50px;
  /* margin-bottom: 50px; */
`;

export const MemberProfile = styled.div`
  display: flex;
  gap: 10px;
`;

export const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
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
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 20px;
  position: absolute;
  top: 150px;

  img {
    width: 32px;
    height: 32px;
  }
`;

export const Copyright = styled.p`
  position: absolute;
  bottom: 0;
  font-family: Lato;
  font-size: 20px;
  line-height: 1.4;
  font-weight: 300;
  color: #adb5bd;
`;
