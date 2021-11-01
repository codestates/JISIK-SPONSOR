import React, { useState, useEffect } from 'react';
import { ModalBody, LoginButton, ButtonGroup } from './styled';
import kakao from '../../images/icons/kakao.png';
import google from '../../images/icons/Google.png';

const ModalInput = () => {
  const [enteredEmail, setEnteredEmail] = useState<string>('');
  const [enteredPassword, setEnteredPassword] = useState<string>('');
  const [enteredEmailTouched, setEnteredEmailTouched] =
    useState<boolean>(false);
  const [enteredPasswordTouched, setEnteredPasswordTouched] =
    useState<boolean>(false);
  const [formIsValid, setFormIsValid] = useState<boolean>(false);

  const enteredEmailIsValid = enteredEmail.trim() !== '';
  const emailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  const enteredPwIsValid = enteredPassword.trim() !== '';
  const passwordIsInvalid = !enteredPwIsValid && enteredPasswordTouched;

  useEffect(() => {
    if (enteredEmailIsValid && enteredPwIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredEmailIsValid, enteredPwIsValid]);

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setEnteredEmailTouched(true);
    setEnteredPasswordTouched(true);

    if (!enteredEmailIsValid || !enteredPwIsValid) {
      return;
    }

    setEnteredEmail('');
    setEnteredEmailTouched(false);
    setEnteredPassword('');
    setEnteredPasswordTouched(false);
  };

  const emailInputClasses = emailIsInvalid ? 'invalid' : 'form';
  const passwordInputClasses = passwordIsInvalid ? 'invalid' : 'form';

  return (
    <>
      <ModalBody>
        <form onSubmit={formSubmitHandler}>
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            type="email"
            onChange={(e) => setEnteredEmail(e.target.value)}
            onBlur={() => setEnteredEmailTouched(true)}
            className={emailInputClasses}
          ></input>
          {emailIsInvalid && <p>이메일을 입력하세요.</p>}
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="password"
            onChange={(e) => setEnteredPassword(e.target.value)}
            onBlur={() => setEnteredPasswordTouched(true)}
            className={passwordInputClasses}
          ></input>
          {passwordIsInvalid && <p>비밀번호를 입력하세요.</p>}
        </form>
      </ModalBody>
      <ButtonGroup>
        <LoginButton disabled={!formIsValid}>로그인</LoginButton>
        <LoginButton>
          <img src={google} />
          <span>구글 로그인</span>
        </LoginButton>
        <LoginButton>
          <img src={kakao} />
          <span>카카오톡 로그인</span>
        </LoginButton>
      </ButtonGroup>
    </>
  );
};

export default ModalInput;
