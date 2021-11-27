/*eslint-disable*/
import styled from 'styled-components';
import temp from '../../../images/temp.png';

interface PercentProp {
  percent: number;
}

interface CategoryProp {
  background: string;
}

interface ThumbnailProp {
  thumbnail: string;
}

export const Li = styled.li`
  border-radius: 10px;
  text-align: left;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  &:hover {
    transform: matrix(1, 0, 0, 1, 0, -10);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
  }
  &:hover > a > article > div:nth-child(1):after {
    background: 0;
    transition: all 0.3s;
  }
`;

export const ImageWrap = styled.div<ThumbnailProp>`
  position: relative;
  width: 100%;
  height: 16.5rem;
  background-image: ${(props) =>
    props.thumbnail
      ? `url(${'https://jisiksponsor.com' + props.thumbnail})`
      : `url(${temp})`};
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
    transition: all 0.3s;
  }
`;

export const InfoWrap = styled.div`
  padding: 1.5rem 2rem 2rem;
  background-color: #fff;
`;

export const TopInfo = styled.div<CategoryProp>`
  margin-bottom: 2rem;
  & > span {
    display: inline-block;
    font-size: 1.28rem;
    color: #fff;
    font-weight: 500;
    line-height: 160%;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    background-color: ${(props) => {
      if (props.background === '인문학') return '#FF8D8D';
      else if (props.background === '사회과학') return '#F8B77B';
      else if (props.background === '자연과학') return '#4BD5D5';
      else if (props.background === '공학') return '#DE98FF';
      else if (props.background === '의약학') return '#89C3A7';
      else if (props.background === '농수해양학') return '#DF9469';
      else if (props.background === '예술체육학') return '#3796CB';
      else if (props.background === '복합학') return '#6A5AAC';
      else return '#868E96';
    }};
  }
  & > h2 {
    font-size: 1.6rem;
    line-height: 1.25em;
    height: 4.2rem;
    color: #212529;
    font-weight: 600;
    margin: 1rem 0 1.5rem 0;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  & > p {
    font-size: 1.28rem;
    line-height: 1.4em;
    height: 3.6rem;
    color: #868e96;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const BottomInfo = styled.div`
  width: 100%;
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  margin-bottom: 1.5rem;
  & > img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
  }
  & > span {
    font-size: 1.6rem;
    color: #212529;
    font-weight: 500;
  }
`;

export const BudgetInfo = styled.div<PercentProp>`
  & > span {
    position: relative;
    overflow: hidden;
    display: block;
    height: 0.8rem;
    border-radius: 10px;
    background-color: #dee2e6;
    margin-bottom: 1rem;
  }
  & > span:after {
    position: absolute;
    left: 0;
    top: 0;
    width: ${(props) => props.percent && props.percent + '%'};
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
  gap: 0.5rem;
  & > big {
    font-size: 1.6rem;
    color: #495057;
    font-weight: 600;
  }
  & > small {
    font-size: 1.28rem;
    color: #f08c00;
    font-weight: 500;
  }
`;
export const RightWrap = styled.div`
  & > img {
    vertical-align: middle;
    margin-right: 0.5rem;
    height: 1.6rem;
  }
  & > span {
    font-size: 1.2rem;
    color: #868e96;
  }
`;
