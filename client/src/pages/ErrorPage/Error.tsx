/*eslint-disable*/
import React from 'react';
import error from '../../images/error.png';
import { Section, Wrap, Homebutton } from './styled';

const Error = () => {
  return (
    <Section>
      <Wrap>
        <img src={error} alt="error image" />
        <h1>
          죄송합니다.
          <br />
          현재 요청하신 페이지는 찾을 수 없습니다.
        </h1>
      </Wrap>
      <Homebutton to="/">홈으로</Homebutton>
    </Section>
  );
};

export default Error;
