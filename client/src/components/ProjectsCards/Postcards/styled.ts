/*eslint-disable*/
import styled from 'styled-components';

export const PostcardsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const Ul = styled.ul`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  width: 100%;
  & > li {
    width: calc(33.333333% - 20px);
  }

  @media screen and (max-width: 1200px) {
    & > li {
      width: calc(50% - 15px);
    }
  }

  @media screen and (max-width: 718px) {
    & > li {
      margin: 0 auto;
      max-width: 360px;
      width: 100%;
    }
  }
`;
