/*eslint-disable*/
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Postcards from '../Postcards/Postcards';
import { Section, Wrap, TitleWrap } from './styled';
import { Data, Row } from './type';

const AchievedSection = () => {
  const [achievedProjects, setAchievedProjects] = useState<Array<Row>>([]);

  const getAchievedProjects = async () => {
    try {
      const response = await axios.get<Data>(
        'http://localhost:4000/projects?status=canceled&limit=3',
        { withCredentials: true }
      );
      setAchievedProjects(response.data.projects.rows);
    } catch (err) {
      console.error(err);
    }
  };

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
        <Postcards projects={achievedProjects}></Postcards>
      </Wrap>
    </Section>
  );
};

export default AchievedSection;
