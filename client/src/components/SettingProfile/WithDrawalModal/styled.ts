import styled from 'styled-components';
import { MiniModalText } from 'components/Modal/styled';

export const WithDrawalText = styled(MiniModalText)`
  > p {
    font-size: 12px;
    margin-top: 5px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  margin-top: 30px;

  > button {
    width: auto;
    height: auto;
    padding: 0 30px;
    background: ${({ theme }) => theme.colors.violet};
    border: 3px solid ${({ theme }) => theme.colors.violet};
    border-radius: 5px;
    color: #fff;
    font-size: 20px;
    line-height: 1.45em;
    font-weight: 500;
    cursor: pointer;
  }

  > button:first-child {
    margin-right: 5px;
  }
`;
