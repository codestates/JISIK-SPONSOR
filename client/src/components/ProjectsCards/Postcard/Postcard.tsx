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
import { Row } from '../type';
import { REACT_APP_API_URL } from '../../../config';

interface Props {
  project: Row;
}

const Postcard = ({ project }: Props) => {
  const goal: string = Number(project.goal).toLocaleString();
  const percent: number =
    (Number(project.pledged) / Number(project.goal)) * 100;
  const projectLink: string = '/detailed-project/' + project.path;
  // 카테고리 배경
  const background: string = project.category.name;
  // D-day 계산
  const startDate = new Date(project.start_date);
  const endDate = new Date(project.end_date);
  const gap = endDate.getTime() - startDate.getTime();
  const dDay = Math.ceil(gap / (1000 * 60 * 60 * 24));

  return (
    <Li>
      <Link to={projectLink}>
        <article>
          <ImageWrap thumbnail={project.thumbnail_url} />
          <InfoWrap>
            <TopInfo background={background}>
              <span>{project.category.name}</span>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </TopInfo>
            <BottomInfo>
              <UserInfo>
                <img
                  src={
                    project.author.profile_url
                      ? REACT_APP_API_URL + project.author.profile_url
                      : usericon
                  }
                />
                <span>{project.author.name}</span>
              </UserInfo>
              <BudgetInfo percent={percent}>
                <span></span>
                <div>
                  <LeftWrap>
                    <big>{goal}원</big>
                    <small>
                      {project.goal && project.pledged
                        ? percent.toFixed()
                        : '0'}
                      %
                    </small>
                  </LeftWrap>
                  <RightWrap>
                    <img src={clock} />
                    <span>{dDay !== 0 ? dDay + ' days' : 'finished'}</span>
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
