import React, { useState, useEffect } from 'react';
import { ModalBody, LoginButton, ButtonGroup } from './styled';
import kakao from '../../images/icons/kakao.png';
import google from '../../images/icons/Google.png';
import axios from 'axios';
import { REACT_APP_API_URL } from 'config';
import { UserInfoData } from './type';
import { showLoginModal } from 'store/modal-slice';
import { useDispatch } from 'react-redux';
import { login } from 'store/login-slice';
import { getUserInfo } from 'store/userInfo-slice';
const ModalInput = () => {
  const dispatch = useDispatch();
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

  const socialLoginHandler = (oauth: string) => {
    dispatch(showLoginModal(false));
    if (oauth === 'kakao') {
      window.location.assign(
        'https://kauth.kakao.com/oauth/authorize?client_id=1f5099b7b1d8b1f742215aebd0a67732&redirect_uri=http://localhost:3000/callback&response_type=code&scope=profile_nickname,profile_image,account_email'
      );
    }
    if (oauth === 'google') {
      window.location.assign(
        'https://accounts.google.com/o/oauth2/v2/auth?client_id=892268396360-ft901k9sd7lso4imkt4p0ba6r512nbpg.apps.googleusercontent.com&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/userinfo.profile+openid&redirect_uri=http://localhost:3000/callbackGoogle'
      );
    }
  };
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

  const handleLogin = async () => {
    try {
      const response = await axios.post<UserInfoData>(
        `${REACT_APP_API_URL}/login`,
        {
          email: enteredEmail,
          password: enteredPassword
        },
        {
          withCredentials: true
        }
      );
      dispatch(showLoginModal(false));
      dispatch(login());
      dispatch(getUserInfo(response.data));
    } catch (err) {
      console.log(err);
    }
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
        <LoginButton disabled={!formIsValid} onClick={handleLogin}>
          로그인
        </LoginButton>
        <LoginButton onClick={() => socialLoginHandler('google')}>
          <img src={google} />
          <span>구글 로그인</span>
        </LoginButton>
        <LoginButton onClick={() => socialLoginHandler('kakao')}>
          <img src={kakao} />
          <span>카카오톡 로그인</span>
        </LoginButton>
      </ButtonGroup>
    </>
  );
};

export default ModalInput;
