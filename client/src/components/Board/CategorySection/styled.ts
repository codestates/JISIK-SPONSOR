/*eslint-disable*/
import styled from 'styled-components';

export const Section = styled.section`
  padding: 30px 0;
  background: #f1f3f5;
  @media all and (max-width: 620px) {
    padding: 15px 0;
  }
`;

export const Wrap = styled.div`
  display: flex;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 30px;
  @media all and (max-width: 620px) {
    flex-direction: column;
    padding: 0 7.5px;
  }
`;

export const AllCategoryWrap = styled.div`
  width: 30%;
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
  @media all and (max-width: 620px) {
    width: 100%;
  }
`;

export const SubCategoryWrap = styled.div`
  width: 70%;
  @media all and (max-width: 620px) {
    width: 100%;
  }
`;

export const Ul = styled.ul`
  width: 100%;
`;

export const Li = styled.li`
  display: inline-block;
  margin: 7.5px 30px 7.5px 0;
  & a {
    display: inline-block;
    cursor: pointer;
  }
  & img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 10px;
    transition: all 0.3s;
  }
  & span {
    vertical-align: middle;
    font-size: 16px;
    font-weight: 500;
    color: #495057;
    transition: all 0.3s;
  }
  & a:hover img {
    transform: matrix(1.1, 0, 0, 1.1, 0, 0);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
  }
  & a:hover span {
    font-weight: 600;
    transition: all 0.3s;
  }
  @media all and (max-width: 620px) {
    margin: 7.5px 15px;
  }
  @media all and (max-width: 380px) {
    margin: 7.5px;
    & span {
      font-size: 12.8px;
    }
  }
`;
