import { useState, useEffect } from 'react';
import {
  Section,
  ProjectWrapper,
  ProjectTitle,
  MainContent,
  LeftWrap,
  RightWrap,
  Funding,
  AlreadyButton,
  SubContentAlready,
  Notice
} from './styled';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { REACT_APP_API_URL } from 'config';
import axios from 'axios';
import { Data, Tags, Tag } from '../type';
import { Line } from 'rc-progress';
import { RootState } from 'index';
import IntroTitle from './IntroTitle';
import IntroTag from './IntroTag';

const IntroAlready = () => {
  const history = useHistory();

  const [projectId, setProjectId] = useState<number | null>(null);
  const [title, setTitle] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [goal, setGoal] = useState<number>(0);
  const [pledged, setPledged] = useState<number>(0);
  const [tags, setTags] = useState<Tag[]>([]);
  const [dDay, setdDay] = useState<number>(0);
  const [categoryId, setCategoryId] = useState<number>(0);
  const [category, setCategory] = useState<string>('');

  const isLogin = useSelector((state: RootState) => state.login.isLogin);
  const percentage = Number((pledged / goal).toFixed(2)) * 100;

  //금액 숫자에 3단위로 콤마를 추가해주는 함수
  const numWithCommas = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  //단위가 나뉘어진 숫자
  const goalWithCommas = numWithCommas(goal);
  const pledgedWithCommas = numWithCommas(pledged);

  // 특정 프로젝트 인트로 섹션에 대한 정보를 불러오는 함수
  const getProjects = async () => {
    try {
      const url = window.location.pathname.slice(18);
      const response = await axios.get<Data>(
        `${REACT_APP_API_URL}/projects/single?slug=${url}`,
        { withCredentials: true }
      );

      const {
        id,
        title,
        thumbnail_url,
        description,
        category,
        goal,
        category_id,
        pledged,
        end_date
      } = response.data.projects;

      const { name } = category;

      // 디데이 계산
      let today = new Date();
      let endDate = new Date(end_date);
      let gap = endDate.getTime() - today.getTime();
      let dDay = Math.ceil(gap / (1000 * 60 * 60 * 24));
      if (dDay <= 0) dDay = 0;

      setProjectId(id);
      setTitle(title);
      setImage(thumbnail_url);
      setDescription(description);
      setCategory(name);
      setGoal(Number(goal));
      setCategoryId(category_id);
      setPledged(Number(pledged));
      setdDay(dDay);
    } catch (err) {
      console.log(err);
      history.push('/404');
    }
  };

  // 특정 프로젝트의 모든 태그를 조회하는 함수
  const getTags = async () => {
    try {
      const response = await axios.get<Tags>(
        `${REACT_APP_API_URL}/projects/${projectId}/tags`,
        { withCredentials: true }
      );
      const tagGroup = response.data.tags;
      setTags(tagGroup);
    } catch (err) {
      console.log(err);
    }
  };

  // 최초 렌더링 시 즐겨찾기, 태그, 그리고 전체 프로젝트 데이터를 실행
  useEffect(() => {
    getProjects();
  }, []);

  useEffect(() => {
    if (projectId) getTags();
  }, [projectId]);

  return (
    <Section>
      <ProjectWrapper>
        {projectId && (
          <IntroTitle
            isLogin={isLogin}
            projectId={projectId}
            categoryId={categoryId}
            category={category}
          />
        )}
        <ProjectTitle>
          <h1>{title}</h1>
          <span>{description}</span>
        </ProjectTitle>
        <MainContent>
          <LeftWrap>
            <span>
              <img src={'https://jisiksponsor.com' + image} />
            </span>
            <IntroTag tags={tags} />
          </LeftWrap>
          <RightWrap>
            <SubContentAlready>
              <p>{pledgedWithCommas}원</p>
              <p>달성금액</p>
              <Line
                percent={percentage}
                strokeWidth={4}
                trailWidth={4}
                strokeColor="#0CBD7E"
              />
              <Funding>
                <p>
                  <span>{percentage}%</span>
                  <span>{goalWithCommas}원</span>
                  <span>{dDay}일</span>
                </p>
                <p>
                  <span>완료율</span>
                  <span>목표액</span>
                  <span>남은기간</span>
                </p>
              </Funding>
              <AlreadyButton>프로젝트 후원완료</AlreadyButton>
            </SubContentAlready>
            <Notice noDisplay={false}>
              * 본 프로젝트 후원하기 기능은 개발자 모드로써 결제하신 금액은
              다음날 환불처리 됩니다.
            </Notice>
          </RightWrap>
        </MainContent>
      </ProjectWrapper>
    </Section>
  );
};

export default IntroAlready;
