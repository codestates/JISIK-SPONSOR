import React, { useState, useEffect } from 'react';
import { CommentWrapper, WriteContent, Button } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { REACT_APP_API_URL } from 'config';
import CommentIcon from '../../../images/project-comment.png';
import axios from 'axios';
import { RootState } from 'index';
import { Comment, CommentType } from '../type';
import { showLoginModal } from 'store/modal-slice';
import CommentBox from './CommentBox';

const Comments = ({ project, setProject }: any) => {
  const [comment, setComment] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>('');

  const dispatch = useDispatch();

  const projectId = useSelector((state: RootState) => state.projectSt.id);
  const isLogin = useSelector((state: RootState) => state.login.isLogin);

  const url = `${REACT_APP_API_URL}/projects/${projectId}/comments`;
  const config = {
    withCredentials: true
  };

  // 최초 렌더링 시 모든 댓글을 불러오는 함수 한번 실행
  useEffect(() => {
    getComments();
  }, []);

  // 특정 프로젝트의 모든 댓글을 불러오는 함수
  const getComments = async () => {
    try {
      const response = await axios.get<CommentType>(url, config);
      const commentArr = response.data.comments;
      setComment(commentArr);
    } catch (err) {
      console.log(err);
    }
  };

  // 새로운 댓글을 추가하는 함수
  const addNewComment = async () => {
    try {
      if (!isLogin) {
        dispatch(showLoginModal(true));
      }

      if (isLogin && newComment) {
        const newCommentId = await axios.post<CommentType>(
          url,
          { content: newComment },
          config
        );
        console.log(newCommentId);

        setProject({ ...project, comments: project.comments + 1 });

        if (newCommentId) {
          const newlyCreatedComments = await axios.get<CommentType>(
            `${REACT_APP_API_URL}/projects/${projectId}/comments`
          );
          console.log(newlyCreatedComments);
          setComment(newlyCreatedComments.data.comments);
        }
      }
      setNewComment('');
    } catch (err) {
      console.log(err);
    }
  };

  // 댓글 인풋을 받아오는 함수
  const handleInputValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(e.currentTarget.value);
  };

  return (
    <CommentWrapper>
      <WriteContent>
        <div>
          <img src={CommentIcon} alt="comment-icon" />
          <span>댓글</span>
        </div>
        <div>
          <textarea
            placeholder="댓글을 입력하세요."
            onChange={(e) => {
              handleInputValue(e);
            }}
            value={newComment}
          ></textarea>
        </div>
        <div>
          <Button type="submit" onClick={addNewComment}>
            댓글 쓰기
          </Button>
        </div>
      </WriteContent>
      {comment.map((item) => {
        return (
          <CommentBox
            key={item.id}
            id={item.id}
            author={item.user.nickname}
            date={item.created_at}
            content={item.content}
            setComment={setComment}
            setProject={setProject}
            project={project}
            getComments={getComments}
          />
        );
      })}
    </CommentWrapper>
  );
};

export default Comments;
