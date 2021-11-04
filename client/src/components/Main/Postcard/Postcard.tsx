/*eslint-disable*/
import { Link } from 'react-router-dom';
import usericon from '../../../images/user-icon.png';
import clock from '../../../images/clock.png';
import {
  Li,
  ImageWrap,
  InfoWrap,
  TopInfo,
  BottomInfo,
  UserInfo,
  BudgetInfo,
  LeftWrap,
  RightWrap
} from './styled';
import { Row } from '../AchievedSection/type';

interface Props {
  project: Row;
}

const Postcard = ({ project }: Props) => {
  // console.log(new Date(project.start_date).getFullYear());
  const goal: string = Number(project.goal).toLocaleString();
  const percent: number = (Number(project.pledged) / Number(project.goal)) * 10;
  const projectLink: string = '/detailed-project/' + project.path;

  return (
    <Li>
      <Link to={projectLink}>
        <article>
          {/* project.thumbnail_url 던져주면 css안에 들어갈 수 있게 */}
          <ImageWrap />
          <InfoWrap>
            <TopInfo>
              <span>{project.category.name}</span>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </TopInfo>
            <BottomInfo>
              <UserInfo>
                <img
                  src={
                    project.author.profile_url
                      ? 'https://jisiksponsor.com' + project.author.profile_url // config.js 로 바꿔주세요.
                      : usericon
                  }
                />
                <span>{project.author.name}</span>
              </UserInfo>
              <BudgetInfo>
                <span></span>
                <div>
                  <LeftWrap>
                    {/* 돈이라서 콤바 필요 */}
                    <big>{goal}원</big>
                    <small>
                      {project.goal && project.pledged
                        ? percent.toFixed(2)
                        : '0'}
                      %
                    </small>
                  </LeftWrap>
                  <RightWrap>
                    <img src={clock} />
                    <span>finished</span>
                  </RightWrap>
                </div>
              </BudgetInfo>
            </BottomInfo>
          </InfoWrap>
        </article>
      </Link>
    </Li>
  );
};

export default Postcard;
