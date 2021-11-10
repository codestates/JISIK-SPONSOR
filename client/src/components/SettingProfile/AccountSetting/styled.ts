import styled from 'styled-components';
import { SubTitleCss, AddButton } from 'components/StartProject/commonStyled';

// 아이디
export const UserEmail = styled(SubTitleCss)`
  > input {
    width: 250px;
    height: 40px;
    border: 2px solid #e9ecef;
    border-radius: 5px;
    padding: 12px 0 12px 15px;
    margin-top: 5px;
  }
`;
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

// 전화번호
export const PhoneNumber = styled(SubTitleCss)`
  > form > input {
    width: 250px;
    height: 40px;
    border: 2px solid #e9ecef;
    border-radius: 5px;
    padding: 12px 0 12px 15px;
    margin-top: 5px;
    margin-right: 15px;
  }

  > p:last-child {
    margin-top: 5px;
    font-size: 12px;
    color: #dd584a;
  }
`;
export const SettingWithdrawal = styled(SubTitleCss)`
  button {
    background: ${({ theme }) => theme.colors.suppotWord};
    border: 3px solid ${({ theme }) => theme.colors.suppotWord};
    transition: 0.3s;

    &:hover {
      transition: 0.3s;
      color: ${({ theme }) => theme.colors.suppotWord};
    }
  }
`;

export const ChangeButton = styled(AddButton)`
  width: 90px;
  margin-top: 10px;
`;

export const NumberAddButton = styled(AddButton)`
  width: 90px;
  margin-top: 10px;
`;
export const WithdrawalButton = styled(AddButton)`
  width: 123px;
  margin-top: 10px;
`;
