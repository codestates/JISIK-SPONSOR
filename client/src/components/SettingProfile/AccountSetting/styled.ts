import styled from 'styled-components';
import { SubTitleCss, AddButton } from 'components/StartProject/commonStyled';

// 아이디
export const UserEmail = styled(SubTitleCss)`
  > input {
    width: 25rem;
    height: 4rem;
    padding: 1rem;
    color: #868e96;
    margin-top: 0.5rem;
    border-radius: 5px;
    border: 2px solid #e9ecef;
  }
`;

// 이름
export const UserName = styled(SubTitleCss)`
  > input {
    width: 25rem;
    height: 4rem;
    padding: 1rem;
    color: #868e96;
    margin-top: 0.5rem;
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
      width: 25rem;
      height: 4rem;
      color: #495057;
      padding: 1rem;
      margin-top: 0.5rem;
      border-radius: 5px;
      border: 2px solid #e9ecef;
    }

    > input:first-child {
      margin-top: 1rem;
    }

    > p {
      font-size: 1.28rem;
      font-weight: 500;
      line-height: 1.4em;
      color: #dd584a;
      margin: 0.5rem 0 1rem 0.5rem;
    }
  }
`;

// 전화번호
export const PhoneNumber = styled(SubTitleCss)`
  > form > input {
    width: 25rem;
    height: 4rem;
    padding: 1rem;
    color: #495057;
    margin-top: 0.5rem;
    margin-right: 1.5rem;
    border-radius: 5px;
    border: 2px solid #e9ecef;
  }

  > p:last-child {
    font-size: 1.28rem;
    font-weight: 500;
    line-height: 1.4em;
    color: #dd584a;
    margin: 0.5rem 0 1rem 0.5rem;
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
  width: 9rem;
  margin-top: 1rem;
`;

export const NumberAddButton = styled(AddButton)`
  width: 9rem;
  margin-top: 1rem;
`;
export const WithdrawalButton = styled(AddButton)`
  width: 12.3rem;
  margin-top: 1rem;
`;
