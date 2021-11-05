/*eslint-disable*/
import styled from 'styled-components';

export const Section = styled.section`
  background-color: pink;
  padding: 30px 0;
`;

export const Wrap = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 30px;
  background-color: green;
`;

export const AllCategoryWrap = styled.div`
  background-color: tomato;
  flex: 1 1 auto;
  & img {
    width: 30px;
    height: 30px;
    vertical-align: middle;
    margin-right: 10px;
  }
  & span {
    vertical-align: middle;
    font-size: 16px;
    font-weight: 500;
    color: #495057;
  }
`;

export const SubCategoryWrap = styled.div`
  background-color: skyblue;
  flex: 1 1 auto;
  width: auto;
`;

export const Ul = styled.ul`
  width: 100%;
  max-width: 580px;
`;

export const Li = styled.li`
  display: inline-block;
  margin: 7.5px 30px 7.5px 0;
  & a {
    display: inline-block;
  }
  & img {
    width: 30px;
    height: 30px;
    vertical-align: middle;
    margin-right: 10px;
  }
  & span {
    vertical-align: middle;
    font-size: 16px;
    font-weight: 500;
    color: #495057;
  }
`;

export const FilterWrap = styled.div`
  flex: 1 1 auto;
  text-align: right;
  background-color: orange;
  width: auto;
`;