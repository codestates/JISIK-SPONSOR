import styled from 'styled-components';

export const IngProject = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;

  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

export const IngProjectButton = styled.button`
  color: #eee;
  background-color: #7048e8;
  border-radius: 5px;
  width: 12%;
  height: 3.5rem;
  border: 1px solid;
`;

export const Endproject = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;

  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

export const GoTopButton = styled.a`
  position: fixed;
  bottom: 30px;
  right: 30px;
  img {
    width: 8rem;
    height: 8rem;
  }
  @media screen and (max-width: 1200px) {
    bottom: 80px;
    right: 20px;
    img {
      width: 6rem;
      height: 6rem;
    }
  }
`;
