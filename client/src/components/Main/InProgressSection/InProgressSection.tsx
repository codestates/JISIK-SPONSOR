/*eslint-disable*/
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Section, Wrap, TitleWrap } from './styled';
import Postcards from '../../ProjectsCards/Postcards/Postcards';
import { Data, Row } from './type';
import { REACT_APP_API_URL } from '../../../config';

const InProgressSection = () => {
  const [inProgressProjects, setInProgressProjects] = useState<Array<Row>>([]);

  const getInProgressProjects = async () => {
    try {
      const url = REACT_APP_API_URL + '/projects?status=inprogress&limit=6';
      const response = await axios.get<Data>(url, { withCredentials: true });
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
          <Link to="/board">모두 보기</Link>
        </TitleWrap>
        <Postcards projects={inProgressProjects} />
      </Wrap>
    </Section>
  );
};

export default InProgressSection;
