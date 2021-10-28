import React from 'react';
import {
  ProjectBody,
  ProjectTitle,
  FocusMemo,
  ProjectCategory,
  ProjectHashTag,
  ProjectFundingPeriod,
  ProjectSimpleInfo,
  ProjectCoverImage,
  SaveButton,
  AddHashTagButton,
  TextareaCss
} from './styled';
import Category from './Category';
import Select from 'react-select';
import coverImg from '../../images/icons/cover-image.png';
import { useState } from 'react';

function BasicInfo() {
  const [tagInput, setTagInput] = useState<string>('');
  const options = [
    { value: '7일', label: '7일' },
    { value: '14일', label: '14일' },
    { value: '21일', label: '21일' },
    { value: '30일', label: '30일' },
    { value: '45일', label: '45일' }
  ];

  const handleHashTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagInput(e.target.value);
  };

  const createHashTag = () => {
    const ul = document.querySelector('ul');
    if (ul === null) return;
    if (ul.children.length >= 3) {
      alert('3개이상안되용');
    }
    const li = document.createElement('li');
    // const span = document.createElement('span');
    // span.textContent = 'x';
    li.textContent = tagInput;
    if (ul !== null) {
      ul.append(li);
    }
    setTagInput('');
  };
  return (
    <ProjectBody>
      <h2>프로젝트 기본 정보</h2>
      <p>전체적인 기본 틀을 작성합니다.</p>
      <ProjectTitle>
        <h3>프로젝트 제목</h3>
        <input type="text" />
        <FocusMemo>
          제목은 간단하고 간결해야 합니다. 훌륭한 제목은 독자에게 연구에 대한
          명확한 이해를 제공합니다.
        </FocusMemo>
      </ProjectTitle>

      <ProjectCategory>
        <h3>카테고리</h3>
        <p>
          최대 1개의 카테고리를 설정 할 수 있습니다.카테고리는 검색 시 필터로
          사용되며, 프로젝트를 찾는데 도움이 될 수 있습니다.
        </p>
        <Category />
      </ProjectCategory>

      <ProjectHashTag>
        <h3>해시태그</h3>
        <p>
          최대 3개의 해시태그를 설정 할 수 있습니다.해시태그는 검색 시 필터로
          사용되며, 프로젝트를 찾는데 도움이 될 수 있습니다.
        </p>
        <input type="text" onChange={handleHashTag} value={tagInput} />
        <AddHashTagButton onClick={createHashTag}>
          해시태그 추가
        </AddHashTagButton>
        <div>
          <ul></ul>
        </div>
      </ProjectHashTag>

      <ProjectFundingPeriod>
        <h3>펀딩 기간</h3>
        <Select options={options} placeholder="날짜 선택" />
        <FocusMemo>대부분 30일을 선택합니다.</FocusMemo>
      </ProjectFundingPeriod>

      <ProjectSimpleInfo>
        <h3>프로젝트에 대한 한 줄 소개</h3>
        <TextareaCss />
        <FocusMemo>프로젝트에 대한 간략한 요약을 위한 것입니다.</FocusMemo>
      </ProjectSimpleInfo>

      <ProjectCoverImage>
        <h3>표지 이미지</h3>
        <label htmlFor="coverImage">
          <img src={coverImg} />
          <span>사진을 추가하려면 클릭하세요.</span>
          <span>JPG, PNG, GIF - 50MB 파일 제한</span>
        </label>
        <input type="file" id="coverImage" />
      </ProjectCoverImage>

      <SaveButton>저장하고 계속하기</SaveButton>
    </ProjectBody>
  );
}

export default BasicInfo;
