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
  width: 100%;
  max-width: 485px;
  background: #fff;
  max-height: 90%;
  overflow-y: scroll;
  border-radius: 10px;
  padding: 60px 80px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 900;
  &::-webkit-scrollbar {
    display: none;
  }
  @media all and (max-width: 620px) {
    width: 100%;
    height: 100%;
    max-height: 100%;
    border-radius: 0;
    padding: 60px 30px;
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
    display: block;
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

  > span {
    position: absolute;
    padding: 20px;
    top: 0;
    right: 0;
    font-size: 20px;
    cursor: pointer;
  }
  > span:hover {
    color: #fff;
    background: #5f3dc4;
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
      cursor: pointer;
      background: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.violetWord};
    }
  }
  @media all and (max-width: 620px) {
    > span {
      font-size: 30px;
    }
  }
`;

export const ConflitContainer = styled(ModalContainer)`
  width: 100%;
  max-width: 500px;
  padding: 50px auto;
  @media all and (max-width: 620px) {
    width: 90%;
    height: auto;
    max-height: 90%;
    border-radius: 10px;
  }
`;
export const ModalWraaper = styled(ModalHead)`
  text-align: center;
  word-break: keep-all;
  > h2 {
    font-size: 20px;
    line-height: 1.4;
  }
  > p {
    font-size: 16px;
  }
  > button {
    background: ${({ theme }) => theme.colors.violet};
    border: 3px solid ${({ theme }) => theme.colors.violet};
    padding: 10px 30px;
    border-radius: 10px;
    color: #fff;
    font-size: 20px;
    line-height: 1.45em;
    font-weight: 500;
    margin-top: 20px;
    cursor: pointer;
  }
`;

export const MiniModalContainer = styled(ModalContainer)`
  z-index: 999;
  top: 50%;
  left: 50%;
  width: 90%;
  max-width: 500px;
  height: auto;
  padding: 40px 80px;
  text-align: center;
  word-break: keep-all;
  &::-webkit-scrollbar {
    display: none;
  }
  @media all and (max-width: 620px) {
    padding: 40px;
    border-radius: 10px;
  }
`;

export const MiniModalBack = styled(ModalBackup)`
  z-index: 998;
`;
export const MiniModalText = styled(ModalWraaper)`
  > h2 {
    width: 100%;
    font-size: 20px;
    line-height: 1.4;
  }

  > button {
    width: auto;
    height: auto;
    font-weight: 400;
    border-radius: 5px;
    padding: 5px 30px;
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
      height: 40px;
      border-radius: 5px;
      border: 2px solid #e9ecef;
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

export const DeleteButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
  > button {
    width: auto;
    height: auto;
    font-size: 20px;
    line-height: 1.4;
    color: #fff;
    cursor: pointer;
    padding: 5px 30px;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.violet};
    border: 3px solid ${({ theme }) => theme.colors.violet};
  }
`;

export const LoginButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
  color: #495057;
  padding: 15px 0;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

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
  @media all and (max-width: 620px) {
    margin: 0;
  }
`;

export const SignupButton = styled.button`
  cursor: pointer;
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
  color: #fff;
  padding: 20px 0;
  margin-top: 30px;
  border-radius: 5px;
  border: 1px solid #7950f2;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.colors.violet};
  @media all and (max-width: 620px) {
    margin-top: 15px;
  }
`;

export const DeleteText = styled(MiniModalText)`
  > p {
    font-size: 16px;
    margin-top: 5px;
  }
`;
