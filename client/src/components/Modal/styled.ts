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
  padding: 6rem 8rem;
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
    padding: 6rem 3rem;
    &::-webkit-scrollbar {
      display: block;
    }
  }
  @media all and (max-height: 620px) {
    &::-webkit-scrollbar {
      display: block;
    }
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
  padding: 2rem;
  width: 51.5rem;
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
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.45em;
    color: #495057;
  }

  > div {
    width: 45rem;
    height: 30rem;
    border: none;
    margin-top: 3rem;
    overflow-x: hidden;

    & > h2,
    & > h3 {
      font-size: 1.6rem;
      font-weight: 700;
      line-height: 1.45em;
      color: #495057;
    }

    & > p {
      font-size: 1.2rem;
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
  width: 51.5rem;
  padding: 2rem;
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
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.45em;
    color: #495057;
  }

  > textarea {
    resize: none;
    width: 45rem;
    height: 30rem;
    border: none;
    margin-top: 3rem;
    overflow-x: hidden;
  }
`;
export const ModalHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    position: absolute;
    padding: 2rem;
    top: 0;
    right: 0;
    font-size: 2rem;
    cursor: pointer;
  }
  > span:hover {
    color: #fff;
    background: #5f3dc4;
  }

  > h2 {
    color: ${({ theme }) => theme.colors.violetWord};
    font-weight: 700;
    font-size: 3.906rem;
  }

  > p {
    font-weight: 400;
    font-size: 1.28rem;
    line-height: 1.45em;
    margin-top: 1.5rem;
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
      font-size: 3rem;
    }
  }
`;

export const ConflitContainer = styled(ModalContainer)`
  width: 100%;
  max-width: 500px;
  padding: 5rem auto;
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
    font-size: 2rem;
    line-height: 1.4em;
  }
  > p {
    font-size: 1.6rem;
  }
  > button {
    background: ${({ theme }) => theme.colors.violet};
    border: 3px solid ${({ theme }) => theme.colors.violet};
    padding: 1rem 3rem;
    border-radius: 10px;
    color: #fff;
    font-size: 2rem;
    line-height: 1.45em;
    font-weight: 500;
    margin-top: 2rem;
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
  padding: 4rem 8rem;
  text-align: center;
  word-break: keep-all;
  @media all and (max-width: 620px) {
    padding: 4rem;
    border-radius: 10px;
  }
`;

export const MiniModalBack = styled(ModalBackup)`
  z-index: 998;
`;
export const MiniModalText = styled(ModalWraaper)`
  > h2 {
    width: 100%;
    font-size: 2rem;
    line-height: 1.4em;
  }

  > button {
    width: auto;
    height: auto;
    font-weight: 400;
    border-radius: 5px;
    padding: 0.5rem 3rem;
    margin-top: 2rem;
  }
`;
export const ModalBody = styled.div`
  margin-top: 2.5rem;

  > form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 1.28rem;
    font-weight: 500;
    line-height: 1.4em;
    color: #212529;

    > input {
      height: 4rem;
      border-radius: 5px;
      border: 2px solid #e9ecef;
      &.invalid {
        border: 1px solid #dd584a;
        background-color: #fddddd;
      }
    }
  }

  p {
    font-size: 1.2rem;
    color: #dd584a;
  }
`;

export const ErrMsg = styled.div`
  &.hidden {
    display: none;
  }

  &.errMsg {
    font-size: 1.2rem;
    color: #dd584a;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`;

export const DeleteButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 3rem;
  > button {
    width: auto;
    height: auto;
    font-size: 2rem;
    line-height: 1.4em;
    color: #fff;
    cursor: pointer;
    padding: 0.5rem 3rem;
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
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.4em;
  color: #495057;
  padding: 1.5rem 0;
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
    margin-top: 1rem;
  }

  > img {
    width: 3rem;
    height: 3rem;
    position: absolute;
    left: 10px;
  }
`;
export const CheckBoxConainter = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  > div {
    &:nth-child(2) {
      margin-top: 1rem;
    }
    &:nth-child(3) {
      margin-top: 1rem;
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
    width: 1.5rem;
    height: 1.5rem;
    border: 1px solid #868e96;
    vertical-align: middle;
    margin-right: 1rem;
  }

  input:checked + label::before {
    content: '\f00c';
    font-family: 'Font Awesome 5 free';
    font-weight: 900;
    color: #ffffff;
    background-color: #0dbd7e;
    font-size: 1.28rem;
    text-align: center;
  }

  label {
    font-size: 1.28rem;
    font-weight: 400;
    line-height: 1.45em;
    color: ${({ theme }) => theme.colors.suppotWord};
  }
  a {
    font-size: 1.27rem;
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
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.4em;
  color: #fff;
  padding: 2rem 0;
  margin-top: 3rem;
  border-radius: 5px;
  border: 1px solid #7950f2;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.colors.violet};
  @media all and (max-width: 620px) {
    margin-top: 1.5rem;
  }
`;

export const DeleteText = styled(MiniModalText)`
  > p {
    font-size: 1.6rem;
    margin-top: 0.5rem;
  }
`;
