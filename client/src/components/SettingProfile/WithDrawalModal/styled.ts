import styled from 'styled-components';
import { MiniModalText } from 'components/Modal/styled';

export const WithDrawalText = styled(MiniModalText)`
  > p {
    font-size: 1.6rem;
    margin-top: 0.5rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 3rem;
  > button {
    width: auto;
    height: auto;
    font-size: 2rem;
    line-height: 1.4em;
    color: #fff;
    cursor: pointer;
    padding: 0.5rem 3rem;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.violet};
    border: 3px solid ${({ theme }) => theme.colors.violet};
  }
`;
