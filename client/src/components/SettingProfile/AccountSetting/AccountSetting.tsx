import React, { useState } from 'react';
import { REACT_APP_API_URL } from 'config';
import axios from 'axios';
import {
  SettingChangePW,
  ChangeButton,
  SettingWithdrawal,
  WithdrawalButton,
  UserEmail,
  PhoneNumber,
  NumberAddButton
} from './styled';
import { ProjectBody, Container } from 'components/StartProject/commonStyled';
import { logout } from 'store/login-slice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'index';
import { useHistory } from 'react-router';

interface changePwProps {
  password: string;
  checkPassword: string;
}
function AccountSetting() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { email } = useSelector((state: RootState) => state.userInfo.userInfo);
  const [changePW, setChangePW] = useState<changePwProps>({
    password: '',
    checkPassword: ''
  });
  const [number, setNumber] = useState<string>('');
  const [pwVaild, setPwVaild] = useState<boolean>(false);
  const [isVaild, setIsVaild] = useState<boolean>(false);
  console.log('##', pwVaild);
  const [numberVaild, setNumberVaild] = useState<boolean>(false);

  const handleInput =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      // const { password, checkPassword } = changePW;
      // let passwordExp = /^[a-zA-z0-9]{6,12}$/.test(e.target.value);
      const value = {
        ...changePW,
        [key]: e.target.value
      };
      setChangePW(value);
      isAllValid(value);
    };

  const isAllValid = (pwInfo: changePwProps) => {
    const { password, checkPassword } = pwInfo;
    passwordVaild(password);
    checkPwVaild(password, checkPassword);
  };

  const passwordVaild = (pw: string) => {
    const passwordExp = /^[a-zA-z0-9]{6,12}$/.test(pw);
    if (pw === '') {
      setPwVaild(false);
      return;
    }
    if (!passwordExp) {
      setPwVaild(true);
      return;
    }
    setPwVaild(false);
    return;
  };

  const checkPwVaild = (pw: string, checkPw: string) => {
    if (checkPw === '') {
      setIsVaild(false);
      return;
    }
    if (pw !== checkPw) {
      setIsVaild(true);
      return;
    }
    setIsVaild(false);
    return;
  };
  const handleClick = async () => {
    const { password } = changePW;
    const response = await axios.patch(
      `${REACT_APP_API_URL}/users/me/`,
      {
        password
      },
      {
        withCredentials: true
      }
    );
    console.log(response);
    alert('비밀번호가 정상적으로 변경되었습니다.');
  };

  const handleWithDrawal = async () => {
    await axios.delete(`${REACT_APP_API_URL}/users/me/`, {
      withCredentials: true
    });
    dispatch(logout());
    history.push('/');
    alert('회원탈퇴 되었습니다. 그동안 지식스폰서를 이용해주셔서 감사합니다.');
  };

  const handleNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberVaild(false);
    setNumber(e.target.value);
  };

  const handleVaild = (number: string) => {
    const separat = number.split('-').join('');
    // '-' 이 두개가 포함되어 있고 4번째 9번째 자리에 있는지 확인
    const hyphen =
      number.split('').filter((el) => el === '-').length === 2 &&
      number.split('')[3] === '-' &&
      number.split('')[8] === '-';
    // 숫자로 11자리가 이루어져있는지 확인
    const onlyNumber = !Number.isNaN(Number(separat)) && separat.length === 11;

    if (onlyNumber && hyphen) {
      return true;
    }
    return false;
  };
  const addPhoneNumber = async () => {
    const checkNumber = handleVaild(number);
    if (checkNumber) {
      const response = await axios.patch(
        `${REACT_APP_API_URL}/users/me/`,
        {
          mobile: number
        },
        {
          withCredentials: true
        }
      );
      console.log(response);
      alert('성공적으로 추가되었습니다.');
    } else {
      setNumberVaild(true);
    }
  };
  return (
    <Container>
      <ProjectBody>
        <h2>계정 설정</h2>
        <p>회원정보를 수정합니다.</p>

        <UserEmail>
          <h3>아이디</h3>
          <input type="email" value={email} disabled />
        </UserEmail>
        <SettingChangePW>
          <h3>비밀번호 변경</h3>
          <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
              e.preventDefault()
            }
          >
            <input
              type="text"
              onChange={handleInput('password')}
              placeholder="새로운 비밀번호"
            />
            {pwVaild && (
              <p>비밀번호는 영문 대소문자와 숫자 6~12자리로 입력해야합니다.</p>
            )}
            <input
              type="text"
              onChange={handleInput('checkPassword')}
              placeholder="새로운 비밀번호 확인"
            />
            {isVaild && <p>비밀번호가 일치하지 않습니다.</p>}
            <ChangeButton type="submit" onClick={handleClick}>
              변경
            </ChangeButton>
          </form>
        </SettingChangePW>

        <PhoneNumber>
          <h3>휴대폰 번호</h3>
          <p>010-1234-5678 형식으로 작성해주세요. </p>
          <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
              e.preventDefault()
            }
          >
            <input type="text" onChange={handleNumberInput} />
            <NumberAddButton onClick={addPhoneNumber}>추가</NumberAddButton>
          </form>
          {numberVaild && <p>올바른 형식이 아닙니다.</p>}
        </PhoneNumber>

        <SettingWithdrawal>
          <h3>회원탈퇴</h3>
          <p>
            회원탈퇴를 하시더라도 작성하신 댓글과 프로젝트는 삭제되지 않습니다.
          </p>
          <WithdrawalButton onClick={handleWithDrawal}>
            회원탈퇴
          </WithdrawalButton>
        </SettingWithdrawal>
      </ProjectBody>
    </Container>
  );
}

export default AccountSetting;
