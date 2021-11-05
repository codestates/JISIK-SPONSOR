/*eslint-disable*/
import styled from 'styled-components';
import postcardimg from '../../../images/postcardimg.png';

export const Li = styled.li`
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #fff;
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 165px;
  background-image: url(${postcardimg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    content: '';
    clear: both;
    background: rgba(0, 0, 0, 0.3);
  }
`;

export const InfoWrap = styled.div`
  padding: 15px 20px 20px;
  background-color: #fff;
`;

export const TopInfo = styled.div`
  margin-bottom: 20px;
  & > span {
    display: inline-block;
    font-size: 12.8px;
    color: #fff;
    font-weight: 500;
    line-height: 160%;
    padding: 5px 10px;
    border-radius: 20px;
    background-color: #3796cb;
  }
  & > h2 {
    font-size: 16px;
    color: #212529;
    font-weight: 600;
    line-height: 160%;
    margin: 5px 0 15px 0;
  }
  & > p {
    font-size: 12.8px;
    color: #868e96;
    line-height: 140%;
  }
`;

export const BottomInfo = styled.div`
  width: 100%;
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  margin-bottom: 15px;
  & > img {
    width: auto;
    height: 30px;
  }
  & > span {
    font-size: 12.8px;
    color: #212529;
    font-weight: 500;
  }
`;

export const BudgetInfo = styled.div`
  & > span {
    position: relative;
    overflow: hidden;
    display: block;
    height: 8px;
    border-radius: 10px;
    background-color: #dee2e6;
    margin-bottom: 10px;
  }
  & > span:after {
    position: absolute;
    left: 0;
    top: 0;
    width: 80%;
    height: 100%;
    display: block;
    content: '';
    clear: both;
    background-color: #0dbd7e;
  }
  & > div {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;

export const LeftWrap = styled.div`
  display: flex;
  gap: 5px;
  & > big {
    font-size: 16px;
    color: #495057;
    font-weight: 600;
  }
  & > small {
    font-size: 12.8px;
    color: #f08c00;
    font-weight: 500;
  }
`;
export const RightWrap = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  & > img {
    height: 16px;
  }
  & > span {
    font-size: 10.24px;
    color: #868e96;
  }
`;
