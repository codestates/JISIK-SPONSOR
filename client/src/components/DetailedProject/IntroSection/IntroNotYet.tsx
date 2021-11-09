import React, { useState, useEffect } from 'react';
import {
  MainContent,
  ProjectTitle,
  ProjectWrapper,
  SubContent,
  Funding,
  FundInput
} from './styled';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { REACT_APP_API_URL } from 'config';
import axios from 'axios';
import Wormhole from '../../../images/wormhole.jpg';
import PaymentButton from './Payments';
import { Data, Tags, Tag } from '../type';
import { Line } from 'rc-progress';
import { RootState } from 'index';
import IntroTitle from './IntroTitle';
import IntroTag from './IntroTag';

const IntroNotYet = () => {
  const [projectId, setProjectId] = useState<number>(1);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [goal, setGoal] = useState<number>(0);
  const [pledged, setPledged] = useState<number>(0);
  const [tags, setTags] = useState<Tag[]>([]);
  const [dDay, setdDay] = useState<number>(0);
  const [enteredFund, setEnteredFund] = useState<string>('');
  const [enteredPhoneNum, setEnteredPhoneNum] = useState<string>('');
  const [categoryId, setCategoryId] = useState<number>(0);
  const [category, setCategory] = useState<string>('');

  const history = useHistory();
  const TagsUrl = `${REACT_APP_API_URL}/projects/${projectId}/tags`;
  const config = { withCredentials: true };

  const isLogin = useSelector((state: RootState) => state.login.isLogin);

  const percentage = Number((pledged / goal).toFixed(2)) * 100;

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
        description,
        category,
        goal,
        category_id,
        pledged,
        end_date
      } = response.data.projects;

      const { name } = category;

      console.log(response);

      // 디데이 계산
      let today = new Date();
      let endDate = new Date(end_date);
      let gap = endDate.getTime() - today.getTime();
      let dDay = Math.ceil(gap / (1000 * 60 * 60 * 24));

      setTitle(title);
      setDescription(description);
      setProjectId(id);
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
      const response = await axios.get<Tags>(TagsUrl, config);
      // console.log(response);
      const tagGroup = response.data.tags;
      // console.log(tagGroup);
      setTags(tagGroup);
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(getTags);

  // 최초 렌더링 시 즐겨찾기, 태그, 그리고 전체 프로젝트 데이터를 실행
  useEffect(() => {
    getProjects();
    getTags();
  }, []);

  const handleFundInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredFund(e.currentTarget.value);
  };

  const handlePhoneNumInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phoneNum = e.currentTarget.value;

    const firstThree = phoneNum.slice(0, 3);
    const nextFour = phoneNum.slice(3, 7);
    const lastFour = phoneNum.slice(7);
    const revisedPhone = `${firstThree}-${nextFour}-${lastFour}`;

    setEnteredPhoneNum(revisedPhone);
  };

  return (
    <ProjectWrapper>
      <IntroTitle
        isLogin={isLogin}
        projectId={projectId}
        categoryId={categoryId}
        category={category}
      />
      <ProjectTitle>
        <h1>{title}</h1>
        <span>{description}</span>
      </ProjectTitle>
      <MainContent>
        <img src={Wormhole} alt="wormhole" />
        <SubContent>
          <p>{pledgedWithCommas}원</p>
          <p>달성금액</p>
          {/* <img src={Gauge} alt="" /> */}
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
          <FundInput>
            <div>
              <span>후원금액</span>
              <input
                type="number"
                placeholder="후원금액을 입력해주세요."
                onChange={handleFundInput}
              />
            </div>
            <div>
              <span>전화번호</span>
              <input
                type="number"
                placeholder="'-'를 제외하고 입력해주세요."
                onChange={handlePhoneNumInput}
              />
            </div>
          </FundInput>
          <PaymentButton
            enteredFund={enteredFund}
            enteredPhoneNum={enteredPhoneNum}
          />
        </SubContent>
      </MainContent>
      <IntroTag tags={tags} />
    </ProjectWrapper>
  );
};

export default IntroNotYet;
