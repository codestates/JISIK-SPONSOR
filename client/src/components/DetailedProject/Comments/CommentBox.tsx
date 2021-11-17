import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
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
import { REACT_APP_API_URL } from 'config';
import DotIcon from '../../../images/icons/dots.png';
import UserIcon from '../../../images/user.png';

interface CommentProps {
  id: number;
  userId: number;
  name: string;
  profileUrl: string;
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
  userId,
  name,
  profileUrl,
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
  const [profile, setProfile] = useState<string>('');

  const projectId = useSelector((state: RootState) => state.projectSt.id);
  const isLogin = useSelector((state: RootState) => state.login.isLogin);
  const userInfo = useSelector((state: RootState) => state.userInfo);

  const menuBox = useRef<HTMLInputElement>(null);
  const { id: userInfoId, role_id: roleId } = userInfo.userInfo;
  const { user_id: projectUserId } = project;

  const config = { withCredentials: true };

  //수정상자를 열고 닫는 버튼을 열고닫는 함수
  const handleDotButton = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    setCommentHandler(e);

    if (showBoxBool) {
      showBoxClear();
    }
  };

  // 수정 & 삭제박스를 보이게하는 함수
  const showModifyBoxHandler = (boolean: boolean) => {
    setShowBox(boolean);
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
      await axios.delete(url, config);
      setProject({ ...project, comments: project.comments - 1 });
      getComments();
    } catch (err) {
      console.log(err);
    }
  };

  // 메뉴박스 밖을 클릭했을 때 박스를 사라지게 만드는 함수
  const handleOutsideClick = (e: any) => {
    if (e.target !== menuBox.current && e.target.className !== 'dotIcon') {
      showBoxClear();
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    setShowBoxToggle(showBoxBool);
  }, [showBoxBool]);

  useEffect(() => {
    setnewContent(content);
  }, [content]);

  useEffect(() => {
    if (profileUrl) {
      const http = profileUrl.slice(0, 4);
      if (http === 'http') {
        setProfile(profileUrl);
      } else {
        setProfile('https://jisiksponsor.com' + profileUrl);
      }
    } else {
      setProfile(UserIcon);
    }
  }, [profileUrl]);

  return (
    <CommentLists key={id} id={String(identity)}>
      <div>
        <div>
          <img src={profile} alt="" />
          <span>{author ? author : name}</span>
        </div>
        {isLogin &&
          (userInfoId === userId ||
            userInfoId === projectUserId ||
            roleId === 1) && (
            <button>
              <img
                src={DotIcon}
                alt="dot-icon"
                onClick={(e) => handleDotButton(e)}
                className="dotIcon"
              />
            </button>
          )}
      </div>
      {showBoxToggle && (
        <CommentModiBox ref={menuBox}>
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
