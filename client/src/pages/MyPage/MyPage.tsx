import React from 'react';
import Baksa from '../../images/baksa.png';

import {
  MyInfoBox,
  MypageContainer,
  MypageWrapper,
  MyprofileBox,
  MyprofileBoxMini,
  MyInfoTabs,
  Cards
} from './styled';

const MyPage = () => {
  return (
    <MypageContainer>
      <MypageWrapper>
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
        <MyInfoBox>
          <MyInfoTabs>
            <button>나의 프로젝트</button>
            <button>후원한 프로젝트</button>
            <button>즐겨찾기</button>
            <button>내가 쓴 댓글</button>
          </MyInfoTabs>
          <Cards>
            <div>Card 1</div>
            <div>Card 2</div>
            <div>Card 3</div>
          </Cards>
        </MyInfoBox>
      </MypageWrapper>
    </MypageContainer>
  );
};

export default MyPage;
