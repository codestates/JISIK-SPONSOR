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
import { budget } from 'store/startPageBt-slice';
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
import { showMiniMoal, insertText } from 'store/modal-slice';
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

interface imageProps {
  thumbnail_url: string;
}
function BasicInfo() {
  const dispatch = useDispatch();
  const HashTagArr = useSelector((state: RootState) => state.hashtag.hashTag);
  const projectId = useSelector((state: RootState) => state.projectSt.id);
  const { projects } = useSelector((state: RootState) => state.project);
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
    // (????????????) ??????,????????????,??????,???????????? get;

    if (projects.category !== null && projects.category !== undefined) {
      setCategoryValue(projects.category.name);
    }

    //(????????????) ???????????? get

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
    if (!projects.thumbnail_url) setImgSrc('');
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
    { value: '7', label: '7???' },
    { value: '14', label: '14???' },
    { value: '21', label: '21???' },
    { value: '30', label: '30???' },
    { value: '45', label: '45???' }
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

    await axios.patch(
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
    dispatch(budget());
    dispatch(showMiniMoal(true));
    dispatch(insertText('?????????????????????.'));
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
      axios
        .post<imageProps>(
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
        <h2>???????????? ?????? ??????</h2>
        <p>???????????? ?????? ?????? ???????????????.</p>
        <ProjectTitle
          showMemo={showMemo.titleMemo}
          onFocus={() => setShowMemo({ ...showMemo, titleMemo: true })}
          onBlur={() => setShowMemo({ ...showMemo, titleMemo: false })}
        >
          <h3>???????????? ??????</h3>
          <input
            type="text"
            onChange={handleBasicInformation('title')}
            value={basicInfo.title || ''}
          />
          <FocusMemo>
            ????????? ???????????? ???????????? ?????????. ????????? ????????? ???????????? ????????? ??????
            ????????? ????????? ???????????????.
          </FocusMemo>
        </ProjectTitle>

        <ProjectCategory>
          <h3>????????????</h3>
          <p>
            ?????? 1?????? ??????????????? ?????? ??? ??? ????????????.??????????????? ?????? ??? ?????????
            ????????????, ??????????????? ????????? ????????? ??? ??? ????????????.
          </p>
          <Category
            setCategoryValue={setCategoryValue}
            categoryValue={categoryValue}
          />
        </ProjectCategory>

        <ProjectHashTag>
          <h3>????????????</h3>
          <p>
            ?????? 3?????? ??????????????? ?????? ??? ??? ????????????.??????????????? ?????? ??? ?????????
            ????????????, ??????????????? ????????? ????????? ??? ??? ????????????.
          </p>
          <input type="text" onChange={handleHashTag} value={tagInput} />
          <AddButton onClick={() => addTags()}>???????????? ??????</AddButton>
          {isVaild && (
            <ErrorMessage>??????????????? 3????????? ??????????????? ????????????.</ErrorMessage>
          )}
          <div>
            <ul>
              {hashtag.map((tag, idx) => (
                <li key={idx}>
                  <span>{tag}</span>
                  <span onClick={() => removeTags(idx)}>&times;</span>
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
          <h3>?????? ??????</h3>
          <CustomSelect
            classNamePrefix="Select"
            options={options}
            placeholder="?????? ??????"
            onChange={(option) => handlePeriod(option)}
            value={defaultTerm || ''}
          />
          <FocusMemo>????????? 30?????? ???????????????.</FocusMemo>
        </ProjectFundingPeriod>

        <ProjectSimpleInfo
          showMemo={showMemo.infoMemo}
          onFocus={() => setShowMemo({ ...showMemo, infoMemo: true })}
          onBlur={() => setShowMemo({ ...showMemo, infoMemo: false })}
        >
          <h3>??????????????? ?????? ??? ??? ??????</h3>
          <TextareaCss
            onChange={handleBasicInformation('simpleInpo')}
            value={basicInfo.simpleInpo || ''}
          />
          <FocusMemo>??????????????? ?????? ????????? ????????? ?????? ????????????.</FocusMemo>
        </ProjectSimpleInfo>

        {imgSrc ? (
          <ProjectSelectIma>
            <h3>?????? ?????????</h3>
            <label htmlFor="coverImage">
              <img src={`https://jisiksponsor.com${imgSrc}`} />
            </label>
            <input type="file" id="coverImage" onChange={handleCoverIma} />
          </ProjectSelectIma>
        ) : (
          <ProjectCoverIma>
            <h3>?????? ?????????</h3>
            <label htmlFor="coverImage">
              <img src={coverImg} />
              <span>????????? ??????????????? ???????????????.</span>
              <span>JPG, PNG, GIF - 50MB ?????? ??????</span>
            </label>
            <input type="file" id="coverImage" onChange={handleCoverIma} />
          </ProjectCoverIma>
        )}

        <SaveButton onClick={handleSaveContent}>???????????? ????????????</SaveButton>
      </ProjectBody>
    </Container>
  );
}

export default BasicInfo;
