import {
  SponsorsWrapper,
  SponsorTitle,
  SponsorsList,
  EmptyBox
} from './styled';
import HeartIcon from '../../../images/project-heart.png';
import Sponsor from './Sponsor';

interface SponsorsProps {
  sponsors: any;
  count: number;
}

const Sponsors = ({ sponsors, count }: SponsorsProps) => {
  return (
    <SponsorsWrapper>
      <SponsorTitle>
        <div>
          <img src={HeartIcon} alt="" />
          <span>지식스폰서</span>
        </div>
        <span>{count}명 후원</span>
      </SponsorTitle>
      {sponsors.length ? (
        <SponsorsList>
          {sponsors.map((sponsor: any) => {
            return <Sponsor key={sponsor.id} sponsor={sponsor} />;
          })}
        </SponsorsList>
      ) : (
        <EmptyBox>
          <p>프로젝트의 첫 번 째 후원자가 되어주세요.</p>
        </EmptyBox>
      )}
    </SponsorsWrapper>
  );
};

export default Sponsors;
