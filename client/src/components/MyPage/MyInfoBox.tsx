import React from 'react';
import { RootState } from 'index';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { MyInfoWrapper, MyInfoTabs, Cards, TabBtn } from './styled';

import {
  myProject,
  backedProject,
  favorites,
  myComments
} from 'store/mypage-slice';

const MyInfoBox = () => {
  const myPageTab = useSelector((state: RootState) => state.myPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(myProject());
  }, []);

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
      {myPageTab.myProject && (
        <Cards>
          <div>Card 1</div>
          <div>Card 2</div>
          <div>Card 3</div>
        </Cards>
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
      {myPageTab.myComments && (
        <>
          <div>Comment 1</div>
          <div>Comment 2</div>
          <div>Comment 3</div>
        </>
      )}
    </MyInfoWrapper>
  );
};

export default MyInfoBox;
