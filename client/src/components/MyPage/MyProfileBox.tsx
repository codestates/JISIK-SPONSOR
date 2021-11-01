import React from 'react';
import { MyprofileBox, MyprofileBoxMini } from './styled';

import Baksa from '../../images/baksa.png';

const MyProfileBox = () => {
  return (
    <MyprofileBox>
      <MyprofileBoxMini>
        <img src={Baksa} alt="baksa image" />
        <span>나박사</span>
        <p>
          안녕하세요. <br />
          나박사입니다.
        </p>
        <button>프로필 설정</button>
        <button>로그아웃</button>
      </MyprofileBoxMini>
    </MyprofileBox>
  );
};

export default MyProfileBox;
