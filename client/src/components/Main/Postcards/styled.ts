/*eslint-disable*/
import styled from 'styled-components';

export const PostcardsWrap = styled.div`
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
`;
