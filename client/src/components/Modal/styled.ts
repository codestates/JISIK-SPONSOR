import styled from 'styled-components';

export const ModalBackup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContainer = styled.div`
  width: 485px;
  background: #fff;
  border-radius: 10px;
  padding: 60px 80px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 900;
  /* height: 500px; */

  @media screen and (max-width: 650px) {
    width: 100%;
    height: 100%;
  }
`;

export const PersonalInfoBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 998;
`;

export const PersonalInfo = styled.div`
  position: fixed;
  padding: 20px;
  width: 515px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  border-radius: 10px;
  background-color: #ffff;

  > span {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }

  > h1 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1.45em;
    color: #495057;
  }

  > div {
    width: 450px;
    height: 300px;
    border: none;
    margin-top: 30px;
    overflow-x: hidden;

    & > h2,
    & > h3 {
      font-size: 16px;
      font-weight: 700;
      line-height: 1.45em;
      color: #495057;
    }

    & > p {
      font-size: 12px;
      line-height: 1.45em;
    }
  }
`;

export const ConditionInfoBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 998;
`;

export const ConditionInfo = styled.div`
  width: 515px;
  padding: 20px;
  border-radius: 10px;
  background-color: #ffff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;

  > span {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }

  > h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1.45em;
    color: #495057;
  }

  > textarea {
    resize: none;
    width: 450px;
    height: 300px;
    border: none;
    margin-top: 30px;
    overflow-x: hidden;
  }
`;
export const ModalHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: yellow; */

  > span {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
  > h2 {
    color: ${({ theme }) => theme.colors.violetWord};
    font-weight: 700;
    font-size: 39.06px;
  }

  > p {
    font-weight: 400;
    font-size: 12.8px;
    line-height: 1.45em;
    margin-top: 15px;
    color: #868e96;

    > button {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.violetWord};
      border: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.violetWord};
      background: none;
      cursor: pointer;
    }
  }
`;

export const ConflitContainer = styled(ModalContainer)`
  width: auto;
  padding: 50px auto;
  @media screen and (max-width: 650px) {
    width: 100%;
    height: 100%;
  }
`;
export const ModalWraaper = styled(ModalHead)`
  > h2 {
    font-size: 25px;
  }

  > p {
    font-size: 16px;
  }

  > button {
    background: ${({ theme }) => theme.colors.violet};
    border: 3px solid ${({ theme }) => theme.colors.violet};
    width: 20%;
    padding: 10px 0;
    border-radius: 10px;
    color: #fff;
    font-size: 20px;
    line-height: 1.45em;
    font-weight: 500;
    margin-top: 10px;
    cursor: pointer;
  }
`;

export const MiniModalContainer = styled(ModalContainer)`
  top: 12%;
  left: 50%;
  width: auto;
  height: auto;
  padding: 40px 80px;
  z-index: 999;
`;

export const MiniModalBack = styled(ModalBackup)`
  z-index: 998;
`;
export const MiniModalText = styled(ModalWraaper)`
  > h2 {
    font-size: 20px;
  }

  > button {
    width: auto;
    height: auto;
    padding: 0 30px;
    margin-top: 20px;
  }
`;
export const ModalBody = styled.div`
  margin-top: 25px;

  > form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 12.8px;
    font-weight: 500;
    line-height: 1.4;
    color: #212529;

    > input {
      border: 2px solid #e9ecef;
      border-radius: 5px;
      height: 35px;

      &.invalid {
        border: 1px solid #dd584a;
        background-color: #fddddd;
      }
    }
  }

  p {
    font-size: 12px;
    color: #dd584a;
  }
`;

export const ErrMsg = styled.div`
  &.hidden {
    display: none;
  }

  &.errMsg {
    font-size: 12px;
    color: #dd584a;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

export const LoginButton = styled.button`
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4em;
  padding: 15px 0 15px 0;
  color: #495057;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;

  &:first-child {
    background: ${({ theme }) => theme.colors.violet};
    border: 1px solid ${({ theme }) => theme.colors.violet};
    color: #fff;
  }
  &:nth-child(2) {
    background: #fff;
    border: none;
  }
  &:last-child {
    background: #ffe710;
    border: 1px solid #ffe710;
  }
  & + & {
    margin-top: 10px;
  }

  > img {
    width: 30px;
    height: 30px;
    position: absolute;
    left: 10px;
  }
`;
export const CheckBoxConainter = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  > div {
    &:nth-child(2) {
      margin-top: 10px;
    }
    &:nth-child(3) {
      margin-top: 10px;
    }
  }
  input {
    display: none;
  }

  input + label {
    cursor: pointer;
  }

  input + label::before {
    content: '';
    display: inline-block;
    width: 15px;
    height: 15px;
    border: 1px solid #868e96;
    vertical-align: middle;
    margin-right: 10px;
  }

  input:checked + label::before {
    content: '\f00c';
    font-family: 'Font Awesome 5 free';
    font-weight: 900;
    color: #ffffff;
    background-color: #0dbd7e;
    font-size: 13px;
    text-align: center;
  }

  label {
    font-size: 12.8px;
    font-weight: 400;
    line-height: 1.45em;
    color: ${({ theme }) => theme.colors.suppotWord};
  }
  a {
    font-size: 12.8px;
    line-height: 1.45em;
    font-weight: 500;
    background: none;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.violetWord};
  }
`;

export const SignupButton = styled.button`
  margin-top: 30px;
  padding: 20px 0 20px 0;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4em;
  color: #fff;
  background: ${({ theme }) => theme.colors.violet};
  border: 1px solid #7950f2;
  cursor: pointer;
`;
