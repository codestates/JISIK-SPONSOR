import { useState, useEffect } from 'react';
import { RootState } from 'index';
import { SponsorsWrapper, SponsorTitle, SponsorsList } from './styled';
import { useSelector } from 'react-redux';
import { REACT_APP_API_URL } from 'config';
import axios from 'axios';
import { RootObject } from './type';
import HeartIcon from '../../../images/project-heart.png';
import Sponsor from './Sponsor';

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

  // 모든 스폰서 목록과 수를 불러오는 함수
  const getSponsors = async () => {
    try {
      const response = await axios.get<RootObject>(url, config);

      setCount(response.data.sponsors.count);
      setSponsors(response.data.sponsors.rows);
    } catch (err) {
      console.log(err);
    }
  };

  //최초 렌더링시 스폰서 목록과 수를 불러옴
  useEffect(() => {
    getSponsors();
  }, []);

  //스폰서ID가 변경되면 setState함수를 재실행
  useEffect(() => {
    setSponsorIds(sponsorUserId);
  }, [sponsorUserId]);

  //스폰서의 정보에서 유저 아이디만 추출해서 setState함수에 할당
  useEffect(() => {
    setSponsorUserId(sponsors.map((el: any) => el.user_id));
  }, [sponsors]);

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
          return <Sponsor key={sponsor.id} sponsor={sponsor} />;
        })}
      </SponsorsList>
    </SponsorsWrapper>
  );
};

export default Sponsors;
