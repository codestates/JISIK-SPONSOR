import React, { useState } from 'react';
import {
  CommentContent,
  CommentLists,
  CommentModiBox,
  ModiButton,
  ModiInput,
  ModiBox,
  ModiButtonGroup
} from './styled';
import { RootState } from 'index';
import { CommentType, Comment } from '../type';
import { useSelector } from 'react-redux';
import { REACT_APP_API_URL } from 'config';
import DotIcon from '../../../images/icons/dots.png';
import Person1 from '../../../images/people1.png';

import axios from 'axios';

interface CommentProps {
  id: number;
  author: string;
  date: Date;
  content: string;
  setComment: (data: Comment[]) => void;
  setProject: (data: any) => void;
  project: any;
  modifyContent: string;
  setModifyContent: (data: string) => void;
}

const CommentBox = ({
  id,
  author,
  date,
  content,
  setComment,
  setProject,
  project,
  modifyContent,
  setModifyContent
}: CommentProps) => {
  const [dotButton, setDotButton] = useState<boolean>(false);
  const [showBox, setShowBox] = useState<boolean>(false);

  const projectId = useSelector((state: RootState) => state.projectSt.id);
  const isLogin = useSelector((state: RootState) => state.login.isLogin);

  const url = `${REACT_APP_API_URL}/projects/${projectId}/comments`;
  const config = {
    withCredentials: true
  };

  const handleDotButton = () => {
    setDotButton(!dotButton);
  };

  // 수정 & 삭제박스를 보이게하는 함수
  const showModifyBoxHandler = (boolean: boolean) => {
    setShowBox(boolean);
    setDotButton(false);
  };

  // 특정 프로젝트의 모든 댓글을 불러오는 함수
  const getComments = async () => {
    try {
      const response = await axios.get<CommentType>(url, config);
      const commentArr = response.data.comments;
      console.log(commentArr);
      setComment(commentArr);
    } catch (err) {
      console.log(err);
    }
  };

  // 해당 댓글을 수정하는 요청을 보내는 함수
  const modifyCommentReq = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const body = { content: modifyContent };
    const commentId = e.currentTarget.id;
    console.log(commentId);
    const url = `${REACT_APP_API_URL}/projects/${projectId}/comments/${commentId}`;

    try {
      const updatedComments = await axios.patch<CommentType>(url, body, config);

      if (updatedComments.data.comments) {
        const newlyCreatedComments = await axios.get<CommentType>(
          `${REACT_APP_API_URL}/projects/${projectId}/comments`
        );
        setComment(newlyCreatedComments.data.comments);
        setShowBox(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // 해당 댓글을 삭제하는 함수
  const deleteCommentHandler = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const commentId = e.currentTarget.id;
    const url = `${REACT_APP_API_URL}/projects/${projectId}/comments/${commentId}`;

    try {
      const deletedCommentId: { data: { id: number } } = await axios.delete(
        url,
        config
      );
      console.log(deletedCommentId);
      // console.log(setProject);

      setProject({ ...project, comments: project.comments - 1 });
      getComments();
    } catch (err) {
      console.log(err);
    }
  };

  // 댓글 수정 입력을 받아와 저장하는 함수
  const editCommentInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const editComment = e.target.value;
    setModifyContent(editComment);
  };

  return (
    <CommentLists key={id}>
      <div>
        <div>
          <img src={Person1} alt="" />
          <span>{author}</span>
        </div>
        {isLogin && (
          <button onClick={() => handleDotButton()}>
            <img src={DotIcon} alt="dot-icon" />
          </button>
        )}
      </div>
      {dotButton && (
        <CommentModiBox>
          <button onClick={() => showModifyBoxHandler(true)}>수정</button>
          <button id={String(id)} onClick={(e) => deleteCommentHandler(e)}>
            삭제
          </button>
        </CommentModiBox>
      )}
      <CommentContent>
        <p>{content}</p>
        <span>
          {new Date(date).toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </span>
      </CommentContent>
      {showBox && (
        <>
          <ModiBox>
            <ModiInput
              type="text"
              onChange={(e) => editCommentInput(e)}
              value={modifyContent}
            />
          </ModiBox>
          <ModiButtonGroup>
            <ModiButton id={String(id)} onClick={(e) => modifyCommentReq(e)}>
              수정
            </ModiButton>
            <ModiButton onClick={() => showModifyBoxHandler(false)}>
              취소
            </ModiButton>
          </ModiButtonGroup>
        </>
      )}
    </CommentLists>
  );
};

export default CommentBox;
