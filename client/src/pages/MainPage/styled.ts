import styled from 'styled-components';

export const IngProject = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;

  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

export const IngProjectButton = styled.button`
  color: #eee;
  background-color: #7048e8;
  border-radius: 5px;
  width: 12%;
  height: 35px;
  border: 1px solid;
`;

export const Endproject = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;

  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

export const GoTopButton = styled.a`
  position: fixed;
  bottom: 30px;
  right: 30px;
  img {
    width: 80px;
    height: 80px;
  }
  @media screen and (max-width: 1200px) {
    bottom: 80px;
    right: 20px;
    img {
      width: 60px;
      height: 60px;
    }
  }
`;
