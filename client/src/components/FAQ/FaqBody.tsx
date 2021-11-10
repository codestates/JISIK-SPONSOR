import React from 'react';
import { FaqUlWapper } from './styled';
import FaqItem from './FaqItem';
function FaqBody() {
  const questions = [
    {
      id: 0,
      question: '0번 질문입니다.',
      answer: '0번 답변입니다.'
    },
    {
      id: 1,
      question: '1번 질문입니다.',
      answer: '1번 답변입니다.'
    },
    {
      id: 2,
      question: '2번 질문입니다.',
      answer: '2번 답변입니다.'
    },
    {
      id: 3,
      question: '3번 질문입니다.',
      answer: '3번 답변입니다.'
    },
    {
      id: 4,
      question: '4번 질문입니다.',
      answer: '4번 답변입니다.'
    }
  ];
  return (
    <FaqUlWapper>
      {questions.map((question) => (
        <FaqItem
          key={question.id}
          question={question.question}
          answer={question.answer}
        />
      ))}
    </FaqUlWapper>
  );
}

export default FaqBody;
