import React, { useState, useEffect } from 'react';
import { RootState } from 'index';
import { SponsorsWrapper, SponsorTitle, SponsorsList } from './styled';
import { useSelector } from 'react-redux';
import { REACT_APP_API_URL } from 'config';
import axios from 'axios';
import { RootObject, Row } from './type';

import HeartIcon from '../../../images/project-heart.png';

interface SponsorsProps {
  setSponsorIds: any;
  sponsorIds: any;
}

const Sponsors = ({ setSponsorIds, sponsorIds }: SponsorsProps) => {
  const [sponsors, setSponsors] = useState<Row[]>([]);
  const [count, setCount] = useState<number>(0);

  const projectId = useSelector((state: RootState) => state.projectSt.id);

  const url = `${REACT_APP_API_URL}/projects/${projectId}/sponsors`;
  const config = { withCredentials: true };
  const sponsorUserId = sponsors.map((el) => el.user_id);

  console.log(sponsorUserId);

  const getSponsors = async () => {
    try {
      const response = await axios.get<RootObject>(url, config);

      setCount(response.data.sponsors.count);
      setSponsors(response.data.sponsors.rows);
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   getSponsors();

  //   setSponsorIds(sponsorUserId);
  // }, []);

  return (
    <SponsorsWrapper>
      <SponsorTitle>
        <div>
          <img src={HeartIcon} alt="" />
          <span>지식스폰서</span>
        </div>
        <span>{count}명 후원</span>
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
      </SponsorsList>
    </SponsorsWrapper>
  );
};

export default Sponsors;
