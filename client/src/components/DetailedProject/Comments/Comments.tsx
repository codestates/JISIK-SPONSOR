import React from 'react';
import { CommentWrapper, WriteContent, Button, CommentLists } from './styled';
import CommentIcon from '../../../images/project-comment.png';
import DotIcon from '../../../images/icons/dots.png';
import Person1 from '../../../images/people1.png';
import Person2 from '../../../images/people2.png';
import Person3 from '../../../images/people3.png';

const Comments = () => {
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
