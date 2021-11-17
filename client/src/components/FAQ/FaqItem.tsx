import React, { useState } from 'react';
import { FaqLiWapper, Answer } from './styled';
import showArrow from 'images/rightArrow.png';
import hiedArrow from 'images/underArrow.png';
interface faqProps {
  question: string;
  answer: string;
}
function FaqItem({ question, answer }: faqProps) {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  return (
    <FaqLiWapper showAnswer={showAnswer}>
      <div onClick={() => setShowAnswer(!showAnswer)}>
        <h3>{question}</h3>
        <img src={!showAnswer ? showArrow : hiedArrow} alt="질문온오프" />
      </div>
      <Answer showAnswer={showAnswer}>{answer}</Answer>
    </FaqLiWapper>
  );
}

export default FaqItem;
