/*eslint-disable*/
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
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import usericon from '../../../images/user-icon.png';
import clock from '../../../images/clock.png';
import { Row } from '../type';

interface Props {
  project: Row;
}

const Postcard = ({ project }: Props) => {
  const [image, setImage] = useState<string>(usericon);
  const goal: string = Number(project.goal).toLocaleString();
  const percent: number =
    (Number(project.pledged) / Number(project.goal)) * 100;
  const projectLink: string = '/detailed-project/' + project.path;
  // 카테고리 배경
  const background: string = project.category.name;
  // D-day 계산
  // const startDate = new Date(project.start_date);
  const toDate = new Date();
  const endDate = new Date(project.end_date);
  const gap = endDate.getTime() - toDate.getTime();
  let dDay = Math.ceil(gap / (1000 * 60 * 60 * 24));
  if (endDate.getTime() - toDate.getTime() <= 0) dDay = 0;

  useEffect(() => {
    if (project.author.profile_url) {
      const http = project.author.profile_url.slice(0, 4);
      if (http === 'http') {
        setImage(project.author.profile_url);
      } else {
        setImage('https://jisiksponsor.com' + project.author.profile_url);
      }
    }
  }, []);

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
                <img src={image} />
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
                    <span>
                      {project.status === 'draft' && '작성중'}
                      {project.status === 'submitted' && '제출완료'}
                      {project.status === 'approve' && '승인완료 펀딩대기'}
                      {project.status === 'inprogress' && dDay + ' days'}
                      {project.status === 'achieved' && 'finished'}
                      {project.status === 'canceled' && '펀딩실패'}
                    </span>
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
