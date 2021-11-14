import React, { useState, useEffect } from 'react';
import {
  Section,
  ProjectWrapper,
  MainContent,
  ProjectTitle,
  LeftWrap,
  RightWrap,
  SubContent,
  Funding,
  FundInput,
  Notice,
  GrayButton
} from './styled';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { REACT_APP_API_URL } from 'config';
import axios from 'axios';
import PaymentButton from './Payments';
import { Data, Tags, Tag } from '../type';
import { Line } from 'rc-progress';
import { RootState } from 'index';
import IntroTitle from './IntroTitle';
import IntroTag from './IntroTag';
import Temp from '../../../images/temp.png';

interface Props {
  setIsUserSponsor: any;
}

const IntroNotYet = ({ setIsUserSponsor }: Props) => {
  const [startDay, setStartDay] = useState<any>('');
  const [projectId, setProjectId] = useState<number | null>(null);
  const [title, setTitle] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [goal, setGoal] = useState<number>(0);
  const [pledged, setPledged] = useState<number>(0);
  const [tags, setTags] = useState<Tag[]>([]);
  const [dDay, setdDay] = useState<number>(0);
  const [enteredFund, setEnteredFund] = useState<string>('');
  const [enteredPhoneNum, setEnteredPhoneNum] = useState<string>('');
  const [enteredFundTouched, setEnteredFundTouched] = useState<boolean>(false);
  const [enteredNumTouched, setEnteredNumTouched] = useState<boolean>(false);
  const [phoneNumChecked, setPhoneNumChecked] = useState<boolean>(false);
  const [categoryId, setCategoryId] = useState<number>(0);
  const [category, setCategory] = useState<string>('');

  const history = useHistory();
  const isLogin = useSelector((state: RootState) => state.login.isLogin);

  let percentage = Number((pledged / goal).toFixed(2)) * 100;
  if (isNaN(percentage)) percentage = 0;

  // 후원 시 금액 및 전화번호 유효성 검사
  const enteredFundIsValid = enteredFund.trim() !== '';
  const fundIsEmpty = !enteredFundIsValid && enteredFundTouched;
  const enteredNumIsValid = enteredPhoneNum.trim() !== '';
  const phoneNumIsEmpty = !enteredNumIsValid && enteredNumTouched;
  const phoneNumInvalid = !phoneNumChecked && enteredNumTouched;

  //금액 숫자에 3단위로 콤마를 추가해주는 함수
  const numWithCommas = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  //단위가 나뉘어진 숫자
  const goalWithCommas = numWithCommas(goal);
  const pledgedWithCommas = numWithCommas(pledged);

  // 특정 프로젝트 인트로 섹션에 대한 정보를 불러오는 함수
  const getProjects = async () => {
    try {
      const url = window.location.pathname.slice(18);
      const response = await axios.get<Data>(
        `${REACT_APP_API_URL}/projects/single?slug=${url}`,
        { withCredentials: true }
      );

      const {
        id,
        title,
        status,
        thumbnail_url,
        description,
        category,
        goal,
        category_id,
        pledged,
        start_date,
        end_date
      } = response.data.projects;

      const { name } = category;

      // 디데이 계산
      let today = new Date();
      let endDate = new Date(end_date);
      let gap = endDate.getTime() - today.getTime();
      let dDay = Math.ceil(gap / (1000 * 60 * 60 * 24));
      if (dDay <= 0) dDay = 0;

      setStartDay(start_date);
      setProjectId(id);
      setTitle(title);
      setStatus(status);
      setImage(thumbnail_url);
      setDescription(description);
      setCategory(name);
      setGoal(Number(goal));
      setCategoryId(category_id);
      setPledged(Number(pledged));
      setdDay(dDay);
    } catch (err) {
      console.log(err);
      history.push('/404');
    }
  };

  // 특정 프로젝트의 모든 태그를 조회하는 함수
  const getTags = async () => {
    try {
      const response = await axios.get<Tags>(
        `${REACT_APP_API_URL}/projects/${projectId}/tags`,
        { withCredentials: true }
      );
      const tagGroup = response.data.tags;
      setTags(tagGroup);
    } catch (err) {
      console.log(err);
    }
  };

  // 후원금액의 인풋을 받아오는 함수
  const handleFundInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredFund(e.currentTarget.value);
  };

  //후원시 전화번호 인풋을 받아오는 함수
  const handlePhoneNumInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phoneNum = e.currentTarget.value;

    const firstThree = phoneNum.slice(0, 3);
    const nextFour = phoneNum.slice(3, 7);
    const lastFour = phoneNum.slice(7);
    const revisedPhone = `${firstThree}-${nextFour}-${lastFour}`;

    setEnteredPhoneNum(revisedPhone);
    const phoneNumChecked = phoneNumChecking(revisedPhone);
    setPhoneNumChecked(phoneNumChecked);
  };

  // 전화번호 유효성 검사 함수
  const phoneNumChecking = (phoneNum: string): boolean => {
    const regExp =
      /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
    let str = phoneNum;

    if (regExp.test(str)) {
      return true;
    }
    return false;
  };

  // 후원금액 인풋창을 건드렸는지 여부 판단
  const fundBlurHandler = () => {
    setEnteredFundTouched(true);
  };

  // 전화번호 인풋창을 건드렸는지 여부 판단
  const numBlurHandler = () => {
    setEnteredNumTouched(true);
  };

  // 최초 렌더링 시 즐겨찾기, 태그, 그리고 전체 프로젝트 데이터를 실행
  useEffect(() => {
    getProjects();
  }, []);

  useEffect(() => {
    if (projectId) getTags();
  }, [projectId]);

  return (
    <Section>
      <ProjectWrapper>
        {projectId && (
          <IntroTitle
            isLogin={isLogin}
            projectId={projectId}
            categoryId={categoryId}
            category={category}
          />
        )}
        <ProjectTitle>
          <h1>{title}</h1>
          <span>{description}</span>
        </ProjectTitle>
        <MainContent>
          <LeftWrap>
            <span>
              <img src={image ? 'https://jisiksponsor.com' + image : Temp} />
            </span>
            <IntroTag tags={tags} />
          </LeftWrap>
          <RightWrap>
            <SubContent>
              <p>{pledgedWithCommas}원</p>
              <p>달성금액</p>
              <Line
                percent={percentage}
                strokeWidth={4}
                trailWidth={4}
                strokeColor="#0CBD7E"
              />
              <Funding>
                <p>
                  <span>{percentage}%</span>
                  <span>{goalWithCommas}원</span>
                  <span>{dDay}일</span>
                </p>
                <p>
                  <span>완료율</span>
                  <span>목표액</span>
                  <span>남은기간</span>
                </p>
              </Funding>
              {status === 'inprogress' && (
                <>
                  <FundInput>
                    <div>
                      <span>후원금액</span>
                      <input
                        type="number"
                        placeholder="후원금액을 입력해주세요."
                        onChange={handleFundInput}
                        onBlur={fundBlurHandler}
                      />
                    </div>
                    <div>
                      <span>전화번호</span>
                      <input
                        type="number"
                        placeholder="'-'를 제외하고 입력해주세요."
                        onChange={handlePhoneNumInput}
                        onBlur={numBlurHandler}
                      />
                    </div>
                    {fundIsEmpty && <p>후원 금액을 입력해주세요.</p>}
                    {(phoneNumInvalid || phoneNumIsEmpty) && (
                      <p>
                        전화번호를 입력하지 않았거나 유효하지 않은 전화번호
                        형식입니다.
                      </p>
                    )}
                  </FundInput>
                  {projectId && (
                    <PaymentButton
                      projectId={projectId}
                      title={title}
                      enteredFund={enteredFund}
                      enteredPhoneNum={enteredPhoneNum}
                      setIsUserSponsor={setIsUserSponsor}
                    />
                  )}
                </>
              )}
              {status === 'draft' && <GrayButton>프로젝트 작성중</GrayButton>}
              {status === 'submitted' && (
                <GrayButton>프로젝트 제출완료</GrayButton>
              )}
              {status === 'approved' && (
                <GrayButton>프로젝트 펀딩 대기중</GrayButton>
              )}
            </SubContent>
            <Notice noDisplay={false}>
              {status === 'inprogress' &&
                '* 본 프로젝트 후원하기 기능은 개발자 모드로써 결제하신 금액은 다음날 환불처리 됩니다.'}
              {status === 'approved' &&
                '* 본 프로젝트 펀딩은 ' +
                  new Date(startDay).toLocaleDateString('ko-KR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  }) +
                  '부터 시작됩니다.'}
              {status === 'draft' &&
                '현재 프로젝트 작성중입니다. 제출 이후에는 수정하거나 삭제하실 수 없습니다.'}
              {status === 'submitted' &&
                '현재 프로젝트 제출하셨습니다. 제출 이후에는 수정하거나 삭제하실 수 없습니다.'}
            </Notice>
          </RightWrap>
        </MainContent>
      </ProjectWrapper>
    </Section>
  );
};

export default IntroNotYet;
