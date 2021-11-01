import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 270px;
  height: 60px;
  background-color: #7950f2;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
  border-radius: 5px;
  cursor: pointer;

  @media screen and (max-width: 576px) {
    width: 70%;
  }
`;
