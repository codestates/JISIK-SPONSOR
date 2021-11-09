import React, { useState, useEffect } from 'react';
import { RootState } from 'index';
import { SponsorsWrapper, SponsorTitle, SponsorsList } from './styled';
import { useSelector } from 'react-redux';
import { REACT_APP_API_URL } from 'config';
import axios from 'axios';
import { RootObject } from './type';

import HeartIcon from '../../../images/project-heart.png';

interface SponsorsProps {
  setSponsorIds: any;
  sponsorIds: any;
}

const Sponsors = ({ setSponsorIds }: SponsorsProps) => {
  const [sponsors, setSponsors] = useState<any>([]);
  const [count, setCount] = useState<number>(0);
  const [sponsorUserId, setSponsorUserId] = useState([]);

  const projectId = useSelector((state: RootState) => state.projectSt.id);

  const url = `${REACT_APP_API_URL}/projects/${projectId}/sponsors`;
  const config = { withCredentials: true };

  const getSponsors = async () => {
    try {
      const response = await axios.get<RootObject>(url, config);

      setCount(response.data.sponsors.count);
      setSponsors(response.data.sponsors.rows);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setSponsorIds(sponsorUserId);
  }, [sponsorUserId]);

  useEffect(() => {
    setSponsorUserId(sponsors.map((el: any) => el.user_id));
  }, [sponsors]);

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
        <span>{count}명 후원</span>
      </SponsorTitle>
      <SponsorsList>
        {sponsors.map((sponsor: any) => {
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
