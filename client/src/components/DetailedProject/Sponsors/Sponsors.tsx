import React from 'react';
import { SponsorsWrapper, SponsorTitle, SponsorsList } from './styled';
import HeartIcon from '../../../images/project-heart.png';
import User from '../../../images/user.png';

const Sponsors = () => {
  return (
    <SponsorsWrapper>
      <SponsorTitle>
        <div>
          <img src={HeartIcon} alt="" />
          <span>지식스폰서</span>
        </div>
        <span>12명 후원</span>
      </SponsorTitle>
      <SponsorsList>
        <img src={User} alt="" />
        <img src={User} alt="" />
        <img src={User} alt="" />
        <img src={User} alt="" />
        <img src={User} alt="" />
        <img src={User} alt="" />
        <img src={User} alt="" />
        <img src={User} alt="" />
        <img src={User} alt="" />
        <img src={User} alt="" />
        <img src={User} alt="" />
        <img src={User} alt="" />
      </SponsorsList>
    </SponsorsWrapper>
  );
};

export default Sponsors;
