import React from 'react';
import { FaqHeaderWapper } from './styled';
function FaqHeader() {
  return (
    <FaqHeaderWapper>
      <h2>FAQ</h2>
      <p>
        지식스폰서를 방문하시는 분들이 자주하시는 질문들을 모아 답변드린
        내용입니다.
      </p>
    </FaqHeaderWapper>
  );
}

export default FaqHeader;
