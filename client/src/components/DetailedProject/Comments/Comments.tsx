import React, { useEffect } from 'react';
import { CommentWrapper, WriteContent, Button, CommentLists } from './styled';
import { REACT_APP_API_URL } from 'config';
import CommentIcon from '../../../images/project-comment.png';
import DotIcon from '../../../images/icons/dots.png';
import Person1 from '../../../images/people1.png';
import Person2 from '../../../images/people2.png';
import Person3 from '../../../images/people3.png';
import axios from 'axios';

interface User {
  nickname: string;
  profile_url: string;
}

interface Comment {
  id: number;
  project_id: number;
  content: string;
  created_at: Date;
  updated_at: Date;
  user: User;
}

interface CommentType {
  comments: Comment[];
}

interface PathProps {
  projectId: number;
}

const Comments = ({ projectId }: PathProps) => {
  // const [comment, setComment] = useState<any>([]);
  // console.log(comment);
  console.log(projectId);

  //특정 프로젝트의 모든 댓글을 불러오는 함수
  const getComments = async () => {
    const url = `${REACT_APP_API_URL}/projects/${projectId}/comments`;
    const config = {
      withCredentials: true
    };
    const response = await axios.get<CommentType>(url, config);
    console.log(response);

    const { comments } = response.data;

    console.log(comments);

    // setComment(comments);
  };

  //최초 렌더링 시 특정 프로젝트의 댓글을 불러오는 함수 실행
  useEffect(() => {
    getComments();
  }, []);

  return (
    <CommentWrapper>
      <WriteContent>
        <div>
          <img src={CommentIcon} alt="comment-icon" />
          <span>댓글</span>
        </div>
        <div>
          <textarea placeholder="댓글을 입력하세요."></textarea>
        </div>
        <div>
          <Button>댓글 쓰기</Button>
        </div>
      </WriteContent>
      {/* {comment &&
        comment.map((comment: any) => (
          <CommentLists key={comment.id}>
            <div>
              <div>
                <img src={Person1} alt="" />
                <span>{comment.user}</span>
              </div>
              <img src={DotIcon} alt="" />
            </div>
            <div>
              <p>{comment.content}</p>
              <span>{comment.created_at}</span>
            </div>
          </CommentLists>
        ))} */}
      <CommentLists>
        <div>
          <div>
            <img src={Person1} alt="" />
            <span>Hana Park</span>
          </div>
          <img src={DotIcon} alt="" />
        </div>
        <div>
          <p>정말 좋은 연구를 하고 계시네요! 항상 응원합니다!!</p>
          <span>2021.10.21</span>
        </div>
      </CommentLists>
      <CommentLists>
        <div>
          <div>
            <img src={Person2} alt="" />
            <span>Donghyun Cho</span>
          </div>
          <img src={DotIcon} alt="" />
        </div>
        <div>
          <p>정말 좋은 연구를 하고 계시네요! 항상 응원합니다!!</p>
          <span>2021.10.21</span>
        </div>
      </CommentLists>
      <CommentLists>
        <div>
          <div>
            <img src={Person3} alt="" />
            <span>Taewoong Na</span>
          </div>
          <img src={DotIcon} alt="" />
        </div>
        <div>
          <p>정말 좋은 연구를 하고 계시네요! 항상 응원합니다!!</p>
          <span>2021.10.21</span>
        </div>
      </CommentLists>
    </CommentWrapper>
  );
};

export default Comments;
