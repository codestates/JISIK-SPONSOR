import React from 'react';
import { FaqUlWapper } from './styled';
import FaqItem from './FaqItem';
function FaqBody() {
  const questions = [
    {
      id: 0,
      question: 'Q1. 누가 연구자로 프로젝트를 시작할 수 있나요?',
      answer:
        '지식스폰서는 학력/나이/성별/배경 등에 상관없이 누구나 연구자로 참여할 수 있습니다. 다만 심사를 통과하여 프로젝트 승인을 받기위해서는 풍성한 지적호기심, 타당한 연구가설, 실현가능성 등을 적절하게 제시할 수 있어야 합니다.'
    },
    {
      id: 1,
      question: 'Q2. 좀 더 구체적인 프로젝트 심사기준 및 방법이 궁금합니다!',
      answer:
        '지식스폰서의 프로젝트의 심사기준은 타당한 연구가설 제시, 연구의 명료성, 그리고 실현가능성 등을 중심으로 평가합니다. 먼저 연구자가 작성한 연구 계획이 검토되고, 이후 필요하다면 연구자와 짧은 인터뷰를 진행한 후 최종검토하여 프로젝트를 승인합니다.'
    },
    {
      id: 2,
      question: 'Q3. 프로젝트 후원 기간은 얼마나 지속되나요?',
      answer:
        '연구자가 프로젝트에 응모하고 최종적으로 프로젝트가 승인되면, 통상 30-60일 정도의 지식스폰서의 참여 및 후원 기간이 진행됩니다.'
    },
    {
      id: 3,
      question: 'Q4. 만약 후원 달성 금액에 도달하지 못한다면 어떻게되나요?',
      answer:
        '원칙적으로 프로젝트는 후원목표금액을 달성해야만 프로젝트가 시작될 수 있습니다. 하지만 목표금액을 달성하지 못하더라도 다시 내용을 재검토하여 같은 주제의 프로젝트를 시작할 수 있습니다.'
    },
    {
      id: 4,
      question: 'Q5. 후원에 참여할 수 있는 최소 금액이 궁금합니다.',
      answer:
        '프로젝트에 참여할 수 있는 최소 금액은 1000원부터 시작되며, 상한선은 따로 정해져있지 않습니다.'
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
