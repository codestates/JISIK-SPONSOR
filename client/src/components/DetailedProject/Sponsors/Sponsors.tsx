import React, { useState, useEffect } from 'react';
import { RootState } from 'index';
import { SponsorsWrapper, SponsorTitle, SponsorsList } from './styled';
import { useSelector } from 'react-redux';
import { REACT_APP_API_URL } from 'config';
import axios from 'axios';
import { RootObject, Row } from './type';

import HeartIcon from '../../../images/project-heart.png';

const Sponsors = () => {
  const [sponsors, setSponsors] = useState<Row[]>([]);
  const [nickname, setNickname] = useState<string>('');

  console.log(nickname);
  // console.log(sponsors);

  const projectId = useSelector((state: RootState) => state.projectSt.id);

  const url = `${REACT_APP_API_URL}/projects/${projectId}/sponsors`;
  const config = { withCredentials: true };

  const getSponsors = async () => {
    try {
      const response = await axios.get<RootObject>(url, config);

      setSponsors(response.data.sponsors.rows);
      setNickname(response.data.sponsors.rows[0].user.nickname);
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
        {sponsors.map((sponsor) => {
          return (
            <li key={sponsor.id}>
              <img
                src={`https://jisiksponsor.com${sponsor.user.profile_url}`}
                alt={sponsor.user.nickname}
              />
            </li>
          );
        })}

        {/* <li>
          <img src={User} alt="" />
        </li>
        <li>
          <img src={User} alt="" />
        </li>
        <li>
          <img src={User} alt="" />
        </li> */}
      </SponsorsList>
    </SponsorsWrapper>
  );
};

export default Sponsors;
