/*eslint-disable*/
import React from 'react';
import error from '../../images/error.png';
import {
  Section,
  Wrap,
  Homebutton
} from './styled';

const Error = () => {
  return (
    <Section>
      <Wrap>
        <h2>죄송합니다.</h2><br />
        <h2>현재 요청하신 페이지는 찾을 수 없습니다.</h2>
        <img src={error} alt="error image" />
      </Wrap>
      <Homebutton to="/">홈으로</Homebutton>
    </Section>
  )
};

export default Error;
