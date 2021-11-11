import { useEffect, useState } from 'react';
import { CommentContainer } from './styled';
import { REACT_APP_API_URL } from 'config';
import axios from 'axios';

interface CommentProps {
  content: string;
  date: Date;
  projectId: number;
}

const MyComments = ({ content, date, projectId }: CommentProps) => {
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
    </CommentContainer>
  );
};

export default MyComments;
