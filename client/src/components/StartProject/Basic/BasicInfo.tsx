import React, { useEffect } from 'react';
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
  CustomSelect,
  ProjectSelectIma
} from './styled';

import Category from './Category';
import coverImg from 'images/icons/cover-image.png';
import { useState } from 'react';
import axios from 'axios';
import { REACT_APP_API_URL } from 'config';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'index';
import {
  setHashTagId,
  removeHashTagId,
  resetHashTagId
} from 'store/hashtag-slice';
import { projectHashTagProps, HashtagProps } from './type';

interface BasicMemoProps {
  titleMemo: boolean;
  periodMemo: boolean;
  infoMemo: boolean;
}

interface BasicInfoProps {
  title: string;
  simpleInpo: string;
}

interface termProps {
  value: string;
  label: string;
}

interface imageProms {
  thumbnail_url: string;
}
function BasicInfo() {
  const dispatch = useDispatch();
  const HashTagArr = useSelector((state: RootState) => state.hashtag.hashTag);
  const projectId = useSelector((state: RootState) => state.projectSt.id);
  const { projects } = useSelector((state: RootState) => state.project);
  console.log('projects', projects);
  const [tagInput, setTagInput] = useState<string>('');
  const [hashtag, setHashtag] = useState<string[]>([]);
  const [showMemo, setShowMemo] = useState<BasicMemoProps>({
    titleMemo: false,
    periodMemo: false,
    infoMemo: false
  });
  const [isVaild, setIsVaild] = useState<boolean>(false);
  const [basicInfo, setBasicInpo] = useState<BasicInfoProps>({
    title: '',
    simpleInpo: ''
  });
  const [periodValue, setPeriodValue] = useState<number>(0);
  const [defaultTerm, setDefaultTerm] = useState<termProps>();
  const [categoryValue, setCategoryValue] = useState<string>('');
  const [imgSrc, setImgSrc] = useState<string>(projects.thumbnail_url || '');

  useEffect(() => {
    // (기본정보) 제목,카테고리,기간,한줄소개 get;

    if (projects.category !== null && projects.category !== undefined) {
      setCategoryValue(projects.category.name);
    }

    //(기본정보) 해시태그 get

    axios
      .get<HashtagProps>(`${REACT_APP_API_URL}/projects/${projectId}/tags`, {
        withCredentials: true
      })
      .then((res) => {
        dispatch(resetHashTagId());
        const arr: string[] = [];
        res.data.tags.forEach((el) => {
          dispatch(setHashTagId(el.id));
          arr.push(el.name);
        });
        setHashtag(arr);
      });
  }, []);

  useEffect(() => {
    setBasicInpo({
      title: projects.title,
      simpleInpo: projects.description
    });
    const option = options.filter(
      (option) => Number(option.value) === projects.term
    );
    setDefaultTerm(option[0]);
  }, [projects]);

  const options = [
    { value: '7', label: '7일' },
    { value: '14', label: '14일' },
    { value: '21', label: '21일' },
    { value: '30', label: '30일' },
    { value: '45', label: '45일' }
  ];

  const addTags = async () => {
    if (hashtag.length >= 3) {
      setIsVaild(true);
      return;
    }
    const filtered = hashtag.filter((tag) => tag === tagInput);
    if (tagInput !== '' && filtered.length === 0) {
      setHashtag([...hashtag, tagInput]);
      const response = await axios.post<projectHashTagProps>(
        `${REACT_APP_API_URL}/projects/${projectId}/tags`,
        {
          tagName: tagInput
        },
        {
          withCredentials: true
        }
      );
      dispatch(setHashTagId(response.data.id));
      setTagInput('');
    }
  };

  const removeTags = (removeIdx: number) => {
    if (hashtag.length <= 3) {
      setIsVaild(false);
    }
    const selectRemove = HashTagArr[removeIdx];

    console.log('removeIdx', removeIdx);
    console.log('selectRemove', selectRemove);
    axios.delete(
      `${REACT_APP_API_URL}/projects/${projectId}/tags/${selectRemove}`,
      {
        withCredentials: true
      }
    );
    dispatch(removeHashTagId(removeIdx));
    const filter = hashtag.filter((_, idx) => idx !== removeIdx);
    setHashtag(filter);
  };

  const handleHashTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagInput(e.target.value);
  };

  const handleBasicInformation =
    (key: string) =>
    (e?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setBasicInpo({
        ...basicInfo,
        [key]: e?.target.value
      });
    };

  const handlePeriod = (option: any) => {
    setDefaultTerm(option);
    setPeriodValue(Number(option.value));
  };

  const handleSaveContent = async () => {
    const { title, simpleInpo } = basicInfo;
    console.log('periodValue', periodValue);
    const response = await axios.patch(
      `${REACT_APP_API_URL}/projects/${projectId}`,
      {
        title: title,
        categoryName: categoryValue,
        term: periodValue,
        description: simpleInpo
      },
      {
        withCredentials: true
      }
    );
    console.log('프로젝트저장', response);
  };
  const handleCoverIma = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const imageFile = e.target.files[0];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(imageFile);
      fileReader.onload = (e: any) => {
        setImgSrc(e.target.result);
      };

      const formData = new FormData();
      formData.append('image', imageFile);
      console.log('@@', formData.get('image'));
      axios
        .post<imageProms>(
          `${REACT_APP_API_URL}/projects/${projectId}/thumbnail`,
          formData,
          {
            withCredentials: true
          }
        )
        .then((res) => setImgSrc(res.data.thumbnail_url));
    }
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
          <input
            type="text"
            onChange={handleBasicInformation('title')}
            value={basicInfo.title || ''}
          />
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
          <Category
            setCategoryValue={setCategoryValue}
            categoryValue={categoryValue}
          />
        </ProjectCategory>

        <ProjectHashTag>
          <h3>해시태그</h3>
          <p>
            최대 3개의 해시태그를 설정 할 수 있습니다.해시태그는 검색 시 필터로
            사용되며, 프로젝트를 찾는데 도움이 될 수 있습니다.
          </p>
          <input type="text" onChange={handleHashTag} value={tagInput} />
          <AddButton onClick={() => addTags()}>해시태그 추가</AddButton>
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
            onChange={(option) => handlePeriod(option)}
            value={defaultTerm || ''}
          />
          <FocusMemo>대부분 30일을 선택합니다.</FocusMemo>
        </ProjectFundingPeriod>

        <ProjectSimpleInfo
          showMemo={showMemo.infoMemo}
          onFocus={() => setShowMemo({ ...showMemo, infoMemo: true })}
          onBlur={() => setShowMemo({ ...showMemo, infoMemo: false })}
        >
          <h3>프로젝트에 대한 한 줄 소개</h3>
          <TextareaCss
            onChange={handleBasicInformation('simpleInpo')}
            value={basicInfo.simpleInpo || ''}
          />
          <FocusMemo>프로젝트에 대한 간략한 요약을 위한 것입니다.</FocusMemo>
        </ProjectSimpleInfo>

        {imgSrc ? (
          <ProjectSelectIma>
            <h3>표지 이미지</h3>
            <label htmlFor="coverImage">
              <img src={`https://jisiksponsor.com${imgSrc}`} />
            </label>
            <input type="file" id="coverImage" onChange={handleCoverIma} />
          </ProjectSelectIma>
        ) : (
          <ProjectCoverIma>
            <h3>표지 이미지</h3>
            <label htmlFor="coverImage">
              <img src={coverImg} />
              <span>사진을 추가하려면 클릭하세요.</span>
              <span>JPG, PNG, GIF - 50MB 파일 제한</span>
            </label>
            <input type="file" id="coverImage" onChange={handleCoverIma} />
          </ProjectCoverIma>
        )}

        <SaveButton onClick={handleSaveContent}>저장하고 계속하기</SaveButton>
      </ProjectBody>
    </Container>
  );
}

export default BasicInfo;
