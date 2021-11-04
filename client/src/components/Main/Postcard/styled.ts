/*eslint-disable*/
import styled from 'styled-components';
import postcardimg from '../../../images/postcardimg.png';
import star from '../../../images/star.png';
import hashtag from '../../../images/hashtag.png';
import usericon from '../../../images/user-icon.png';
import ingbar from '../../../images/ingbar.png';
import clock from '../../../images/clock.png';

export const Postcardwrap = styled.div`
  background-color: pink;
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
`;

export const Postcardimg = styled.div`
  background-image: url(${postcardimg});
  background-repeat: no-repeat;
  background-size: 50% auto;
  background-position: 100% 50%;
  position: relative;
  border-radius: 10px 10px 0px 0px;
  padding: 80px 0;
  width: 33.333333%;
  margin-left: 110px;
`;

export const Star = styled.div`
  background-image: url(${star});
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: 40% 0;
  margin-bottom: 10px;
`;

export const Hashtag = styled.div`
  background-image: url(${hashtag});
  background-repeat: no-repeat;
  background-size: 70px;
  background-position: 25% 0;
  padding: 20px;
`;

export const Title = styled.div`
  font-size: 17px;
  font-weight: 500;
  line-height: 1.5;
  margin-left: 450px;
`;

export const Text = styled.div`
  font-size: 13.5px;
  color: #959ca3;
  line-height: 1.5;
  margin-left: 450px;
  margin-top: 10px;
`;

export const User = styled.div`
  background-image: url(${usericon});
  background-repeat: no-repeat;
  background-size: 30px;
  margin-left: 450px;
  margin-top: 10px;
  padding: 20px;
`;

export const Username = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-left: 24px;
  margin-top: -12px;
`;

export const Ingbar = styled.div`
  background-image: url(${ingbar});
  background-repeat: no-repeat;
  margin-left: 450px;
  padding: 10px;
`;

export const Money = styled.div`
  font-size: 17px;
  margin-left: 450px;
  margin-bottom: 25px;
  font-weight: 500;
`;

export const Percent = styled.div`
  display: block;
  color: #f08c00;
  font-size: 13px;
  font-weight: 500;
  margin-left: 98px;
  margin-top: -15px;
`;

export const Clock = styled.div`
  background-image: url(${clock});
  background-repeat: no-repeat;
  background-position: 33.3% 0;
`;

export const Day = styled.div`
  font-size: 10px;
  margin-left: 635px;
  margin-top: -37px;
  margin-bottom: 20px;
`;