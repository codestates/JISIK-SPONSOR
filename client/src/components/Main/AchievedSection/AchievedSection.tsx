/*eslint-disable*/
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Postcards from '../../ProjectsCards/Postcards/Postcards';
import { Section, Wrap, TitleWrap } from './styled';
import { Data, Row } from '../../ProjectsCards/type';

const AchievedSection = () => {
  // 변수 선언
  const [achievedProjects, setAchievedProjects] = useState<Array<Row>>([]);

  const getAchievedProjects = async () => {
    try {
      // get 요청
      const response = await axios.get<Data>(
        'http://localhost:4000/projects?status=achieved&limit=3',
        { withCredentials: true }
      );
      // 변수에 업데이트
      setAchievedProjects(response.data.projects.rows);
    } catch (err) {
      // 에러나면 여기서 콘솔 찍힌다.
      console.error(err);
    }
  };

  // 처음 랜더링 될 때 한 번 실행하는 함수 => get 요청 한 번 하겠다는 뜻
  useEffect(() => {
    getAchievedProjects();
  }, []);

  return (
    <Section>
      <Wrap>
        <TitleWrap>
          <h2>성사된 프로젝트</h2>
          <Link to="/">모두 보기</Link>
        </TitleWrap>
        {/* 카드에 projects 를 내려준다. */}
        <Postcards projects={achievedProjects}></Postcards>
      </Wrap>
    </Section>
  );
};

export default AchievedSection;
