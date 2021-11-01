import React from 'react';
import {
  SettingChangePW,
  ChangeButton,
  SettingWithdrawal,
  WithdrawalButton
} from './styled';
import { ProjectBody, Container } from 'components/StartProject/commonStyled';
function AccountSetting() {
  return (
    <Container>
      <ProjectBody>
        <h2>계정 설정</h2>
        <p>회원정보를 수정합니다.</p>

        <SettingChangePW>
          <h3>비밀번호 변경</h3>
          <form>
            <input type="text" placeholder="새로운 비밀번호" />
            <input type="text" placeholder="새로운 비밀번호 확인" />
          </form>
          <ChangeButton>변경</ChangeButton>
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
