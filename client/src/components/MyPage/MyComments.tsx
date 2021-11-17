import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CommentContainer } from './styled';
import { REACT_APP_API_URL } from 'config';
import axios from 'axios';

interface CommentProps {
  content: string;
  date: Date;
  projectId: number;
  projectPath: string;
}

const MyComments = ({
  content,
  date,
  projectId,
  projectPath
}: CommentProps) => {
  const [projectTitle, setProjectTitle] = useState('');
  const config = { withCredentials: true };

  useEffect(() => {
    getTitle();
  }, []);

  const getTitle = async () => {
    const url = `${REACT_APP_API_URL}/projects/${projectId}`;
    const response = await axios.get<any>(url, config);
    setProjectTitle(response.data.projects.title);
  };

  return (
    <CommentContainer>
      <Link to={'/detailed-project/' + projectPath}>
        <div>{content}</div>
        <div>
          <span>
            {new Date(date).toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
          <span>{projectTitle}</span>
        </div>
      </Link>
    </CommentContainer>
  );
};

export default MyComments;
