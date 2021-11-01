import React from 'react';
import {
  Container,
  ProjectBody,
  FocusMemo,
  TextareaCss,
  SaveButton,
  AddButton,
  ErrorMessage
} from '../commonStyled';
import {
  ProjectTitle,
  ProjectCategory,
  ProjectHashTag,
  ProjectFundingPeriod,
  ProjectSimpleInfo,
  ProjectCoverIma,
  CustomSelect
} from './styled';

import Category from './Category';
import coverImg from 'images/icons/cover-image.png';
import { useState } from 'react';

interface BasicMemoProps {
  titleMemo: boolean;
  periodMemo: boolean;
  infoMemo: boolean;
}

function BasicInfo() {
  const [tagInput, setTagInput] = useState<string>('');
  const [hashtag, setHashtag] = useState<string[]>([]);
  const [showMemo, setShowMemo] = useState<BasicMemoProps>({
    titleMemo: false,
    periodMemo: false,
    infoMemo: false
  });
  const [isVaild, setIsVaild] = useState(false);

  const options = [
    { value: '7일', label: '7일' },
    { value: '14일', label: '14일' },
    { value: '21일', label: '21일' },
    { value: '30일', label: '30일' },
    { value: '45일', label: '45일' }
  ];

  const addTags = (value: string) => {
    if (hashtag.length >= 3) {
      setIsVaild(true);
      return;
    }
    const filtered = hashtag.filter((tag) => tag === value);
    if (value !== '' && filtered.length === 0) {
      setHashtag([...hashtag, value]);
      setTagInput('');
    }
  };

  const removeTags = (removeIdx: number) => {
    if (hashtag.length <= 3) {
      setIsVaild(false);
    }
    const filter = hashtag.filter((_, idx) => idx !== removeIdx);
    setHashtag(filter);
  };

  const handleHashTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagInput(e.target.value);
  };

  return (
    <Container>
      <ProjectBody>
        <h2>프로젝트 기본 정보</h2>
        <p>전체적인 기본 틀을 작성합니다.</p>
        <ProjectTitle
          showMemo={showMemo.titleMemo}
          onFocus={() => setShowMemo({ ...showMemo, titleMemo: true })}
          onBlur={() => setShowMemo({ ...showMemo, titleMemo: false })}
        >
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
          <AddButton onClick={() => addTags(tagInput)}>해시태그 추가</AddButton>
          {isVaild && (
            <ErrorMessage>해시태그는 3개이상 추가하실수 없습니다.</ErrorMessage>
          )}
          <div>
            <ul>
              {hashtag.map((tag, idx) => (
                <li key={idx} className="tag">
                  <span className="tag-title">{tag}</span>
                  <span
                    className="tag-close-icon"
                    onClick={() => removeTags(idx)}
                  >
                    &times;
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </ProjectHashTag>

        <ProjectFundingPeriod
          showMemo={showMemo.periodMemo}
          onFocus={() => setShowMemo({ ...showMemo, periodMemo: true })}
          onBlur={() => setShowMemo({ ...showMemo, periodMemo: false })}
        >
          <h3>펀딩 기간</h3>
          <CustomSelect
            classNamePrefix="Select"
            options={options}
            placeholder="날짜 선택"
          />
          <FocusMemo>대부분 30일을 선택합니다.</FocusMemo>
        </ProjectFundingPeriod>

        <ProjectSimpleInfo
          showMemo={showMemo.infoMemo}
          onFocus={() => setShowMemo({ ...showMemo, infoMemo: true })}
          onBlur={() => setShowMemo({ ...showMemo, infoMemo: false })}
        >
          <h3>프로젝트에 대한 한 줄 소개</h3>
          <TextareaCss />
          <FocusMemo>프로젝트에 대한 간략한 요약을 위한 것입니다.</FocusMemo>
        </ProjectSimpleInfo>

        <ProjectCoverIma>
          <h3>표지 이미지</h3>
          <label htmlFor="coverImage">
            <img src={coverImg} />
            <span>사진을 추가하려면 클릭하세요.</span>
            <span>JPG, PNG, GIF - 50MB 파일 제한</span>
          </label>
          <input type="file" id="coverImage" />
        </ProjectCoverIma>

        <SaveButton>저장하고 계속하기</SaveButton>
      </ProjectBody>
    </Container>
  );
}

export default BasicInfo;
