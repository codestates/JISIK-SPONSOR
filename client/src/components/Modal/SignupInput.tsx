import React, { useState } from 'react';
import { ModalBody, SignupButton, ErrMsg } from './styled';
import { showLoginModal, showSignupModal } from '../../store/modal-slice';
import { useDispatch } from 'react-redux';
import CheckBox from './CheckBox';
import axios from 'axios';
import { REACT_APP_API_URL } from 'config';
interface SignupInfo {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupInput = () => {
  const dispatch = useDispatch();

  const [signupInfo, setSignupInfo] = useState<SignupInfo>({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [checkState, setCheckState] = useState<boolean>(false);
  const [nameErr, setNameErr] = useState<string>('hidden');
  const [emailErr, setEmailErr] = useState<string>('hidden');
  const [passwordErr, setPasswordErr] = useState<string>('hidden');
  const [confirmPasswordErr, setConfirmPasswordErr] =
    useState<string>('hidden');
  const { name, email, password, confirmPassword }: SignupInfo = signupInfo;

  const handleInputValue =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const next = { ...signupInfo, [key]: e.target.value };
      setSignupInfo(next);
      isAllValid(next);
    };

  const isAllValid = (signupInfo: SignupInfo): boolean => {
    const { name, email, password, confirmPassword }: SignupInfo = signupInfo;

    const isNameValid = checkName(name);
    const isEmailValid = checkEmail(email);
    const isPasswordValid = checkPassword(password);
    const isConfirmPasswordValid = checkConfirmPassword(
      password,
      confirmPassword
    );

    return isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid &&
      isNameValid
      ? true
      : false;
  };

  const resetInfo = () => {
    setSignupInfo({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    setNameErr('');
    setEmailErr('');
    setPasswordErr('');
    setConfirmPasswordErr('');
  };

  const isExist = () => {
    const { name, email, password, confirmPassword }: SignupInfo = signupInfo;

    checkExist(name, '이름을') &&
    checkExist(email, '이메일을') &&
    checkExist(password, '비밀번호를') &&
    checkExist(confirmPassword, '비밀번호 확인을')
      ? true
      : false;

    return checkExist;
  };

  const checkExist = (value: string, input: string): boolean => {
    if (value === '') {
      alert(input + ' 입력해주세요!');
      return false;
    }
    return true;
  };

  const checkName = (name: string): boolean => {
    let nameExp = /^[가-힣]{3,6}$/;
    if (name === '') {
      setNameErr('hidden');
      return false;
    }
    if (!nameExp.test(name)) {
      setNameErr('');
      return false;
    }
    setNameErr('hidden');
    return true;
  };

  const checkEmail = (email: string): boolean => {
    let emailExp =
      /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (email === '') {
      setEmailErr('hidden');
      return false;
    }
    if (!emailExp.test(email)) {
      setEmailErr('');
      return false;
    }
    setEmailErr('hidden');
    return true;
  };

  const checkPassword = (password: string): boolean => {
    let passwordExp = /^[a-zA-z0-9]{6,12}$/;
    if (password === '') {
      setPasswordErr('hidden');
      return false;
    }
    if (!passwordExp.test(password)) {
      setPasswordErr('');
      return false;
    }
    setPasswordErr('hidden');
    return true;
  };

  const checkConfirmPassword = (
    password: string,
    confirmPassword: string
  ): boolean => {
    if (confirmPassword === '') {
      setConfirmPasswordErr('hidden');
      return false;
    }
    if (password !== confirmPassword) {
      setConfirmPasswordErr('');
      return false;
    }
    setConfirmPasswordErr('hidden');
    return true;
  };

  const handleSignup = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (isExist() && isAllValid(signupInfo)) {
      try {
        if (!checkState) {
          alert('약관동의 클릭해주세용');
          return;
        }
        const response = await axios.post(
          `${REACT_APP_API_URL}/signup`,
          {
            name,
            email,
            password
          },
          {
            withCredentials: true
          }
        );
        console.log('회원가입', response);
        resetInfo();
        dispatch(showLoginModal(true));
        dispatch(showSignupModal(false));
        alert('하쿠나마타타! 환영합니다🎉');
      } catch (err) {
        console.log(err);
        alert('회원가입에 실패하였습니다. 다시 시도해주세요🎯');
      }
    }
  };

  return (
    <ModalBody>
      <form>
        <label htmlFor="name">이름</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={handleInputValue('name')}
        />
        <ErrMsg className={nameErr === 'hidden' ? 'hidden' : 'errMsg'}>
          <span>닉네임은 한글 세 글자 이상이어야 합니다.</span>
        </ErrMsg>
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={handleInputValue('email')}
        />
        <ErrMsg className={emailErr === 'hidden' ? 'hidden' : 'errMsg'}>
          <span>올바르지 않은 이메일 형식입니다.</span>
        </ErrMsg>
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={handleInputValue('password')}
        />
        <ErrMsg className={passwordErr === 'hidden' ? 'hidden' : 'errMsg'}>
          <span>
            비밀번호는 영문 대소문자와 숫자 6~12자리로 입력해야합니다.
          </span>
        </ErrMsg>
        <label htmlFor="confirm-password">비밀번호 확인</label>
        <input
          id="confirm-password"
          type="password"
          value={confirmPassword}
          onChange={handleInputValue('confirmPassword')}
        />
        <ErrMsg
          className={confirmPasswordErr === 'hidden' ? 'hidden' : 'errMsg'}
        >
          <span>비밀번호가 일치하지 않습니다.</span>
        </ErrMsg>
        <CheckBox setCheckState={setCheckState} />
        <SignupButton onClick={handleSignup}>회원가입</SignupButton>
      </form>
    </ModalBody>
  );
};

export default SignupInput;
