/*eslint-disable*/
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Section, Wrap, TitleWrap } from './styled';
import Postcards from '../Postcards/Postcards';
import { Data, Row } from './type';

const InProgressSection = () => {
  const [inProgressProjects, setInProgressProjects] = useState<Array<Row>>([]);

  const getInProgressProjects = async () => {
    try {
      const response = await axios.get<Data>(
        'http://localhost:4000/projects?sort=asc&limit=6',
        { withCredentials: true }
      );
      setInProgressProjects(response.data.projects.rows);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getInProgressProjects();
  }, []);

  return (
    <Section>
      <Wrap>
        <TitleWrap>
          <h2>진행중인 프로젝트</h2>
          <Link to="/">모두 보기</Link>
        </TitleWrap>
        <Postcards projects={inProgressProjects} />
      </Wrap>
    </Section>
  );
};

export default InProgressSection;
