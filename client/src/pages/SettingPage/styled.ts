import styled from 'styled-components';

// 공통 제목 css
export const TitleCss = styled.div`
  margin-top: 40px;

  > h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1.45em;
    color: #495057;
  }

  > p {
    font-size: 12.8px;
    font-weight: 400;
    line-height: 1.45em;
    color: ${({ theme }) => theme.colors.suppotWord};
    margin-top: 10px;
  }
`;

// 버튼 css
export const ChangeButton = styled.button`
  width: 90px;
  padding: 10px 0;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.orange};
  border: none;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.3em;
  color: #fff;
`;

// 셋팅 Nav
export const ProjectNav = styled.nav`
  background: #e9ecef;
  padding: 30px 270px 30px 270px;
  display: flex;
  justify-content: space-between;
`;
export const NavButtonGroup = styled.div`
  button {
    &:first-child {
      margin-right: 15px;
    }
    &:nth-child(2) {
      margin-right: 15px;
    }
    &:nth-child(3) {
      margin-right: 15px;
    }
  }
`;
export const NavButton = styled.button`
  width: 94px;
  background: #fff;
  border: 1px solid #ced4da;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4em;
  padding: 12px 0 12px 0;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
`;

// 셋팅 BODY
export const SettingBody = styled.main`
  background: #fff;
  height: 100%;
  padding: 60px 0 60px 270px;

  > h2 {
    font-size: 25px;
    font-weight: 700;
    line-height: 1.45em;
    color: ${({ theme }) => theme.colors.violetWord};
  }
  > p {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.45em;
    color: ${({ theme }) => theme.colors.suppotWord};
    margin-top: 10px;
  }
  button {
    margin-top: 20px;
  }
`;

//  **프로필 수정**
// 닉네임 수정

export const SettingNickName = styled(TitleCss)`
  > input {
    border: 2px solid #e9ecef;
    border-radius: 5px;
    width: 250px;
    height: 40px;
    margin-top: 10px;
    margin-right: 15px;
  }
`;

// 프로필 이미지 수정

export const SettingImg = styled(TitleCss)`
  > input {
    display: none;
  }

  > label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px 0;
    align-items: center;
    border: 2px dashed #9575fa;
    border-radius: 5px;
    background: #f3f0ff;
    width: 300px;
    margin-top: 10px;

    > img {
      width: 60px;
      height: 60px;
    }

    > span:nth-child(2) {
      font-size: 16px;
      font-weight: 500;
      line-height: 1.45em;
      color: #9775fa;
      margin-top: 10px;
    }
    > span:last-child {
      font-size: 12.8px;
      font-weight: 500;
      line-height: 1.45em;
      color: #495057;
      margin-top: 5px;
    }
  }
`;

//  자기소개 수정

export const SettingSelfIntroduction = styled(TitleCss)`
  > textarea {
    display: block;
    resize: none;
    background: #ffffff;
    border: 2px solid #e9ecef;
    border-radius: 5px;
    margin-top: 10px;
    width: 560px;
    height: 100px;
  }
`;

// **계정 설정**

// 비밀번호 변경
export const SettingChangePW = styled(TitleCss)`
  > form {
    display: flex;
    flex-direction: column;

    > input {
      width: 250px;
      height: 40px;
      border: 2px solid #e9ecef;
      border-radius: 5px;
      padding: 12px 0 12px 15px;
      margin-top: 5px;
    }

    > input:first-child {
      margin-top: 10px;
    }
  }
`;

// 회원 탈퇴

export const SettingWithdrawal = styled(TitleCss)`
  button {
    background: ${({ theme }) => theme.colors.suppotWord};
  }
`;
