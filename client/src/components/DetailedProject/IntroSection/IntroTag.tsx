import React from 'react';
import { HashTag, HashTagContainer, NoticeContainer, Notice } from './styled';
import { Tag } from '../type';

interface IntroTagProps {
  tags: Tag[];
  noDisplay?: boolean;
}

const IntroTag = ({ tags, noDisplay }: IntroTagProps) => {
  return (
    <NoticeContainer>
      <HashTagContainer>
        {tags.map((tag) => (
          <HashTag key={tag.id}>{tag.name}</HashTag>
        ))}
      </HashTagContainer>
      <Notice noDisplay={noDisplay}>
        * 본 프로젝트 후원하기 기능은 개발자 모드로써 &nbsp;&nbsp;결제하신
        금액은 다음날 환불처리 됩니다.
      </Notice>
    </NoticeContainer>
  );
};

export default IntroTag;
