import styled from 'styled-components';
export const StyledButton = styled.button`
  width: 100%;
  padding: 20px 30px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  border: 0;
  color: #fff;
  border-radius: 5px;
  background: #7950f2;

  @media screen and (max-width: 900px) {
    width: 50%;
  }

  @media screen and (max-width: 718px) {
    width: 50%;
  }
`;
