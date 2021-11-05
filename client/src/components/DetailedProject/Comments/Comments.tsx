import React, { useState, useEffect } from 'react';
import {
  CommentWrapper,
  WriteContent,
  Button,
  CommentLists,
  CommentModiBox,
  CommentContent
} from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { REACT_APP_API_URL } from 'config';
import CommentIcon from '../../../images/project-comment.png';
import DotIcon from '../../../images/icons/dots.png';
import Person1 from '../../../images/people1.png';
import axios from 'axios';
import { RootState } from 'index';
import { Comment, CommentType } from '../type';
import { showLoginModal } from 'store/modal-slice';

const Comments = ({ project, setProject }: any) => {
  const [comment, setComment] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>('');
  const [modifyContent, setModifyContent] = useState<any>('');
  const [dotButton, setDotButton] = useState<boolean>(false);
  const [showBox, setShowBox] = useState<boolean>(false);

  const dispatch = useDispatch();

  const projectId = useSelector((state: RootState) => state.projectSt.id);
  const isLogin = useSelector((state: RootState) => state.login.isLogin);

  const url = `${REACT_APP_API_URL}/projects/${projectId}/comments`;
  const config = {
    withCredentials: true
  };

  const handleDotButton = () => {
    setDotButton(!dotButton);
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

        setProject({ ...project, comments: comment.length + 1 });

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

  // 댓글 수정 입력을 받아와 저장하는 함수
  const editCommentInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const editComment = e.target.value;
    setModifyContent(editComment);
  };

  // 해당 댓글을 수정하는 요청을 보내는 함수
  const modifyCommentReq = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const body = { content: modifyContent };
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

      setProject({ ...project, comments: comment.length - 1 });
      getComments();
    } catch (err) {
      console.log(err);
    }
  };

  // 최초 렌더링 시 모든 댓글을 불러오는 함수 한번 실행
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
          <CommentLists key={item.id}>
            <div>
              <div>
                <img src={Person1} alt="" />
                <span>{item.user.nickname}</span>
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
                <button
                  id={String(item.id)}
                  onClick={(e) => deleteCommentHandler(e)}
                >
                  삭제
                </button>
              </CommentModiBox>
            )}
            {/* <CommentBox
              content={item.content}
              created={item.created_at}
              setModifyContent={setModifyContent}
            /> */}

            <CommentContent>
              <p>{item.content}</p>
              <span>
                {new Date(item.created_at).toLocaleDateString('ko-KR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </CommentContent>

            {showBox && (
              <div>
                <input
                  type="text"
                  onChange={(e) => editCommentInput(e)}
                  value={item.content}
                />
                <button
                  id={String(item.id)}
                  onClick={(e) => modifyCommentReq(e)}
                >
                  수정
                </button>
                <button onClick={() => showModifyBoxHandler(false)}>
                  취소
                </button>
              </div>
            )}
          </CommentLists>
        );
      })}
    </CommentWrapper>
  );
};

export default Comments;
