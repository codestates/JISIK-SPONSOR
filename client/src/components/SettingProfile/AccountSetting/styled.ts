import styled from 'styled-components';
import { SubTitleCss, AddButton } from 'components/StartProject/commonStyled';

// 아이디
export const UserEmail = styled(SubTitleCss)`
  > input {
    width: 250px;
    height: 40px;
    padding: 10px;
    color: #868e96;
    margin-top: 5px;
    border-radius: 5px;
    border: 2px solid #e9ecef;
  }
`;

// 이름
export const UserName = styled(SubTitleCss)`
  > input {
    width: 250px;
    height: 40px;
    padding: 10px;
    color: #868e96;
    margin-top: 5px;
    border-radius: 5px;
    border: 2px solid #e9ecef;
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
      color: #495057;
      padding: 10px;
      margin-top: 5px;
      border-radius: 5px;
      border: 2px solid #e9ecef;
    }

    > input:first-child {
      margin-top: 10px;
    }

    > p {
      font-size: 12.9px;
      font-weight: 500;
      line-height: 1.4;
      color: #dd584a;
      margin: 5px 0 10px 5px;
    }
  }
`;

// 전화번호
export const PhoneNumber = styled(SubTitleCss)`
  > form > input {
    width: 250px;
    height: 40px;
    padding: 10px;
    color: #495057;
    margin-top: 5px;
    margin-right: 15px;
    border-radius: 5px;
    border: 2px solid #e9ecef;
  }

  > p:last-child {
    font-size: 12.9px;
    font-weight: 500;
    line-height: 1.4;
    color: #dd584a;
    margin: 5px 0 10px 5px;
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
