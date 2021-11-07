import { RootState } from 'index';
import { useDispatch, useSelector } from 'react-redux';
import { REACT_APP_API_URL } from 'config';
import { UserInfoProps } from 'store/userInfo-slice';
import { getUserInfo } from 'store/userInfo-slice';
import { useState, useEffect } from 'react';
import {
  MyInfoWrapper,
  MyInfoTabs,
  Cards,
  TabBtn,
  SeeMore,
  MyInfoDetail
} from './styled';
import { PostcardsWrap, Ul } from '../ProjectsCards/Postcards/styled';
import { Row, Data, CommentProps, Comment } from './type';
import Postcards from '../ProjectsCards/Postcards/Postcards';
import MyComments from './MyComments';

import {
  myProject,
  backedProject,
  favorites,
  myComments
} from 'store/mypage-slice';
import axios from 'axios';

const MyInfoBox = () => {
  const [projects, setProjects] = useState<Row[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  // const [commentLimit, setCommentLimit] = useState<number>(5);
  // const [optionQuerys, setOptionQuerys] = useState({
  //   author: '',
  //   limit: commentLimit
  // });

  const myPageTab = useSelector((state: RootState) => state.myPage);
  const userInfo = useSelector((state: RootState) => state.userInfo);

  const dispatch = useDispatch();
  const config = { withCredentials: true };

  console.log(comments);

  //최초 렌더링 시 로그인한 유저의 정보를 받아오고, 나의 프로젝트탭이 보여지게 세팅
  useEffect(() => {
    dispatch(myProject());
    fetchUserInfo();
    getMyProject();
    getMycomment();
  }, []);

  //나의 프로젝트를 받아오는 함수
  const getMyProject = async () => {
    try {
      const url = `${REACT_APP_API_URL}/projects?author=${id}`;
      const response = await axios.get<Data>(url, config);
      setProjects(response.data.projects.rows);
    } catch (err) {
      console.log(err);
    }
  };

  // const getBackedProject = async () => {
  //   try {
  //     const url = `${REACT_APP_API_URL}/projects?author=${id}`;
  //     const response = await axios.get<Data>(url, config);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  //나의 댓글을 불러오는 함수
  const getMycomment = async () => {
    try {
      const url = `${REACT_APP_API_URL}/projects/comments?author=${id}`;
      const response = await axios.get<CommentProps>(url, config);
      setComments(response.data.comments);
    } catch (err) {
      console.log(err);
    }
  };

  // 로그인한 유저의 정보를 받아오는 함수
  const fetchUserInfo = async () => {
    try {
      const url = `${REACT_APP_API_URL}/users/me`;
      const config = { withCredentials: true };
      const response = await axios.get<UserInfoProps>(url, config);
      dispatch(getUserInfo(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  const { id } = userInfo.userInfo;

  return (
    <MyInfoWrapper>
      <MyInfoTabs>
        <TabBtn
          myProject={myPageTab.myProject}
          onClick={() => dispatch(myProject())}
        >
          나의 프로젝트
        </TabBtn>
        <TabBtn
          backedProject={myPageTab.backedProject}
          onClick={() => dispatch(backedProject())}
        >
          후원한 프로젝트
        </TabBtn>
        <TabBtn
          favorites={myPageTab.favorites}
          onClick={() => dispatch(favorites())}
        >
          즐겨찾기
        </TabBtn>
        <TabBtn
          myComments={myPageTab.myComments}
          onClick={() => dispatch(myComments())}
        >
          내가 쓴 댓글
        </TabBtn>
      </MyInfoTabs>
      <MyInfoDetail>
        {myPageTab.myProject && (
          <PostcardsWrap>
            <Ul>
              <Postcards projects={projects} />
            </Ul>
          </PostcardsWrap>
        )}
        {myPageTab.backedProject && (
          <Cards>
            <div>Card 1</div>
          </Cards>
        )}
        {myPageTab.favorites && (
          <Cards>
            <div>Card 1</div>
            <div>Card 2</div>
          </Cards>
        )}
        {myPageTab.myComments &&
          comments.map((comment) => {
            return (
              <MyComments
                key={comment.id}
                content={comment.content}
                date={comment.created_at}
                projectId={comment.project_id}
              />
            );
          })}
        {myPageTab.myComments && <SeeMore>더보기</SeeMore>}
      </MyInfoDetail>
    </MyInfoWrapper>
  );
};

export default MyInfoBox;
