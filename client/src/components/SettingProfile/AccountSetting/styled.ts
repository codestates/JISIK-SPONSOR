import styled from 'styled-components';
import { SubTitleCss, AddButton } from 'components/StartProject/commonStyled';

// 비밀번호 변경
export const SettingChangePW = styled(SubTitleCss)`
  > form {
    display: flex;
    flex-direction: column;

    > input {
      width: 250px;
      height: 40px;
      border: 2px solid #e9ecef;
      border-radius: 5px;
      padding: 12px 0 12px 15px;
      margin-top: 5px;
    }

    > input:first-child {
      margin-top: 10px;
    }

    > p {
      margin-top: 5px;
      font-size: 12px;
      color: #dd584a;
    }
  }
`;

export const SettingWithdrawal = styled(SubTitleCss)`
  button {
    background: ${({ theme }) => theme.colors.suppotWord};
  }
`;

export const ChangeButton = styled(AddButton)`
  width: 90px;
  margin-top: 10px;
`;
export const WithdrawalButton = styled(AddButton)`
  width: 123px;
  margin-top: 10px;
`;
