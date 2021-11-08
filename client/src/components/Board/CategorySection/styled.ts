/*eslint-disable*/
import styled from 'styled-components';

export const Section = styled.section`
  padding: 30px 0;
`;

export const Wrap = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 30px;

  @media all and (max-width: 959px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const AllCategoryWrap = styled.div`
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

  @media all and (max-width: 606px) {
    & span {
      font-size: 16px;
    }
  }

  @media all and (max-width: 567px) {
    & span {
      font-size: 15px;
    }
  }
`;

export const FilterWrap = styled.div`
  flex: 1 1 auto;
  text-align: right;
  width: auto;
`;
