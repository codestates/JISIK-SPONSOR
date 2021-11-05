import React, { useEffect } from 'react';
import { RootState } from 'index';
import { SponsorsWrapper, SponsorTitle, SponsorsList } from './styled';
import { useSelector } from 'react-redux';
import { REACT_APP_API_URL } from 'config';
import axios from 'axios';

import HeartIcon from '../../../images/project-heart.png';
import User from '../../../images/user.png';

const Sponsors = () => {
  const projectId = useSelector((state: RootState) => state.projectSt.id);

  const url = `${REACT_APP_API_URL}/projects/${projectId}/sponsors`;
  const config = { withCredentials: true };

  const getSponsors = async () => {
    try {
      const response = await axios.get(url, config);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSponsors();
  }, []);

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
