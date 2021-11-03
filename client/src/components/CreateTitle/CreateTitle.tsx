import React from 'react';
import { Wrapper, Section1, Section2 } from './styled';
import { Link } from 'react-router-dom';
function CreateTitle() {
  return (
    <>
      <Wrapper>
        <Section1>
          <h1>당신의 프로젝트를 알려주세요!</h1>
          <p>프로젝트 제목을 알려서 새로운 실험을 시작하세요.</p>
        </Section1>
        <Section2>
          <div>
            <input
              type="text"
              id="title"
              placeholder="프로젝트의 제목을 작성해주세요!"
            />
            <Link to="/start-project">
              <span>계속</span>
            </Link>
          </div>
        </Section2>
      </Wrapper>
    </>
  );
}

export default CreateTitle;
