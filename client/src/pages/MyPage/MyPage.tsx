import React from 'react';
import MyProfileBox from 'components/MyPage/MyProfileBox';
import MyInfoBox from 'components/MyPage/MyInfoBox';

import { MypageContainer, MypageWrapper } from './styled';

const MyPage = () => {
  return (
    <MypageContainer>
      <MypageWrapper>
        <MyProfileBox />
        <MyInfoBox />
      </MypageWrapper>
    </MypageContainer>
  );
};

export default MyPage;
