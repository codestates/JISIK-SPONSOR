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
  NumberAddButton,
  UserName
} from './styled';
import { ProjectBody, Container } from 'components/StartProject/commonStyled';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'index';
import {
  showMiniMoal,
  insertText,
  showWithDrawalModal
} from 'store/modal-slice';
interface changePwProps {
  password: string;
  checkPassword: string;
}
function AccountSetting() {
  const dispatch = useDispatch();
  const { email, name } = useSelector(
    (state: RootState) => state.userInfo.userInfo
  );
  const [changePW, setChangePW] = useState<changePwProps>({
    password: '',
    checkPassword: ''
  });
  const [number, setNumber] = useState<string>('');
  const [pwVaild, setPwVaild] = useState<boolean>(false);
  const [isVaild, setIsVaild] = useState<boolean>(false);
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
    const { password, checkPassword } = changePW;
    if (password !== '' && checkPassword !== '' && !isVaild && !pwVaild) {
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
      dispatch(showMiniMoal(true));
      dispatch(insertText('비밀번호가 성공적으로 변경되었습니다.'));
      setChangePW({
        password: '',
        checkPassword: ''
      });
    } else {
      dispatch(showMiniMoal(true));
      dispatch(insertText('변경하실 비밀번호를 입력해주세요.'));
    }
  };

  const handleWithDrawal = async () => {
    dispatch(showWithDrawalModal(true));
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
      dispatch(showMiniMoal(true));
      dispatch(insertText('휴대폰번호가 성공적으로 등록되었습니다.'));
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
        <UserName>
          <h3>이름</h3>
          <input type="text" value={name} disabled />
        </UserName>
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
              value={changePW.password}
              placeholder="새로운 비밀번호"
            />
            {pwVaild && (
              <p>비밀번호는 영문 대소문자와 숫자 6~12자리로 입력해야합니다.</p>
            )}
            <input
              type="text"
              onChange={handleInput('checkPassword')}
              value={changePW.checkPassword}
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
            <NumberAddButton onClick={addPhoneNumber}>등록</NumberAddButton>
          </form>
          {numberVaild && <p>올바른 형식이 아닙니다.</p>}
        </PhoneNumber>

        <SettingWithdrawal>
          <h3>회원탈퇴</h3>
          <p>
            회원탈퇴를 하셔도 기존에 작성한 댓글, 게시글은 삭제되지 않습니다.
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
