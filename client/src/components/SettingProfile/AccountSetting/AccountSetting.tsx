import React, { useState } from 'react';
import { REACT_APP_API_URL } from 'config';
import axios from 'axios';
import {
  SettingChangePW,
  ChangeButton,
  SettingWithdrawal,
  WithdrawalButton
} from './styled';
import { ProjectBody, Container } from 'components/StartProject/commonStyled';

interface changePwProps {
  password: string;
  checkPassword: string;
}
function AccountSetting() {
  const [changePW, setChangePW] = useState<changePwProps>({
    password: '',
    checkPassword: ''
  });
  const [isVaild, setIsVaild] = useState<boolean>(false);
  const handleInput =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsVaild(false);
      setChangePW({
        ...changePW,
        [key]: e.target.value
      });
    };
  const handleClick = async () => {
    const { password, checkPassword } = changePW;
    if (password !== checkPassword) {
      setIsVaild(true);
      return;
    }
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
  };

  return (
    <Container>
      <ProjectBody>
        <h2>계정 설정</h2>
        <p>회원정보를 수정합니다.</p>

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

        <SettingWithdrawal>
          <h3>회원탈퇴</h3>
          <p>
            회원탈퇴를 하시더라도 작성하신 댓글과 프로젝트는 삭제되지 않습니다.
          </p>
          <WithdrawalButton>회원탈퇴</WithdrawalButton>
        </SettingWithdrawal>
      </ProjectBody>
    </Container>
  );
}

export default AccountSetting;
