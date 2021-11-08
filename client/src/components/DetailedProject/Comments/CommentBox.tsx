import React, { useState, useEffect } from 'react';
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
  getComments: () => void;
  setCommentHandler: (e: any) => void;
  project: any;
  identity: number;
  showBoxBool: boolean;
  showBoxClear: () => void;
}

const CommentBox = ({
  id,
  author,
  date,
  content,
  setComment,
  setProject,
  getComments,
  project,
  setCommentHandler,
  identity,
  showBoxBool,
  showBoxClear
}: CommentProps) => {
  const [showBox, setShowBox] = useState<boolean>(false);
  const [newContent, setnewContent] = useState<string>('');
  const [showBoxToggle, setShowBoxToggle] = useState<boolean>(false);
  const projectId = useSelector((state: RootState) => state.projectSt.id);
  const isLogin = useSelector((state: RootState) => state.login.isLogin);

  useEffect(() => {
    setShowBoxToggle(showBoxBool);
  }, [showBoxBool]);

  useEffect(() => {
    setnewContent(content);
  }, [content]);

  const config = {
    withCredentials: true
  };

  const handleDotButton = (e: any) => {
    // console.log(modiBox.current);

    //   setShowBoxToggle(false);
    // } else {
    setCommentHandler(e);
  };

  // 수정 & 삭제박스를 보이게하는 함수
  const showModifyBoxHandler = (boolean: boolean) => {
    setShowBox(boolean);
    setShowBoxToggle(!showBoxToggle);
  };

  // 댓글 수정 입력을 받아와 저장하는 함수
  const editCommentInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const editComment = e.target.value;
    setnewContent(editComment);
  };

  // 해당 댓글을 수정하는 요청을 보내는 함수
  const modifyCommentReq = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const body = { content: newContent };
    const commentId = e.currentTarget.id;
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

  return (
    <CommentLists key={id} id={String(identity)}>
      <div>
        <div>
          <img src={Person1} alt="" />
          <span>{author}</span>
        </div>
        {isLogin && (
          <button onClick={(e) => handleDotButton(e)}>
            <img src={DotIcon} alt="dot-icon" />
          </button>
        )}
      </div>
      {showBoxToggle && (
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
              value={newContent}
            />
          </ModiBox>
          <ModiButtonGroup>
            <ModiButton id={String(id)} onClick={(e) => modifyCommentReq(e)}>
              수정
            </ModiButton>
            <ModiButton
              onClick={() => {
                showBoxClear();
                setShowBox(false);
              }}
            >
              취소
            </ModiButton>
          </ModiButtonGroup>
        </>
      )}
    </CommentLists>
  );
};

export default CommentBox;
