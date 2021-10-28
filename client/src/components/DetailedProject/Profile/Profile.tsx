import React from 'react';
import { ProfileWrapper, ProfileTitle, ProfileContent } from './style';
import ProfileIcon from '../../../images/profile.png';
import Baksa from '../../../images/baksa.png';

const Profile = () => {
  return (
    <ProfileWrapper>
      <ProfileTitle>
        <img src={ProfileIcon} alt="" />
        <span>프로필</span>
      </ProfileTitle>
      <ProfileContent>
        <div>
          <img src={Baksa} alt="" />
          <div>
            <span>나박사</span>
            <span>공학과학 박사</span>
            <a href="#">상세 프로필 보기</a>
          </div>
        </div>
        <div>
          <span>연구자 소개</span>
          <p>
            안녕하세요. <br />
            저는 외계인을 좋아하는 공상과학자 나박사입니다.
          </p>
        </div>
        <div>
          <span>연구자 약력</span>
          <p>
            제 관심 분야는 외계인이며, 외계인 대학교에서 외계인 학과를
            전공하였고 제19회 외계인 프로젝트에 참가해 금상을 수상하였습니다.
            <br />
            또한 현재는 외계인의 식습관에 대한 연구를 진행하고 있습니다.
          </p>
        </div>
      </ProfileContent>
    </ProfileWrapper>
  );
};

export default Profile;
