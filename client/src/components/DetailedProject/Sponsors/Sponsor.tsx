import { useEffect, useState } from 'react';
import UserIcon from '../../../images/user.png';
interface Props {
  sponsor: any;
}

const Sponsor = ({ sponsor }: Props) => {
  const [profile, setProfile] = useState<string>('');

  //소셜 로그인시 http주소값으로 이미지를 불러오는 경우의 수를 추가하는 함수
  useEffect(() => {
    if (sponsor.user) {
      if (sponsor.user.profile_url) {
        const http = sponsor.user.profile_url.slice(0, 4);
        if (http === 'http') {
          setProfile(sponsor.user.profile_url);
        } else {
          setProfile('https://jisiksponsor.com' + sponsor.user.profile_url);
        }
      } else {
        setProfile(UserIcon);
      }
    }
  }, [sponsor]);

  return (
    <li>
      <img src={profile} />
    </li>
  );
};

export default Sponsor;
