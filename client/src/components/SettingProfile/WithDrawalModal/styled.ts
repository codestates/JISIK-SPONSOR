import styled from 'styled-components';
import { MiniModalText } from 'components/Modal/styled';

export const WithDrawalText = styled(MiniModalText)`
  > p {
    font-size: 16px;
    margin-top: 5px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 30px;
  > button {
    width: auto;
    height: auto;
    font-size: 20px;
    line-height: 1.4;
    color: #fff;
    cursor: pointer;
    padding: 5px 30px;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.violet};
    border: 3px solid ${({ theme }) => theme.colors.violet};
  }
`;
