import { useState, useEffect } from 'react';
import {
  Category,
  MainContent,
  ProjectTitle,
  ProjectWrapper,
  SubContent,
  Funding,
  FundInput,
  HashTag,
  HashTagContainer
} from './styled';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { REACT_APP_API_URL } from 'config';
import axios from 'axios';
import CategoryIcon1 from '../../../images/icons/category-icon-1.png';
import CategoryIcon2 from '../../../images/icons/category-icon-2.png';
import CategoryIcon3 from '../../../images/icons/category-icon-3.png';
import CategoryIcon4 from '../../../images/icons/category-icon-4.png';
import CategoryIcon5 from '../../../images/icons/category-icon-5.png';
import CategoryIcon6 from '../../../images/icons/category-icon-6.png';
import CategoryIcon7 from '../../../images/icons/category-icon-7.png';
import CategoryIcon8 from '../../../images/icons/category-icon-8.png';
import YellowStar from '../../../images/star-yellow.png';
import WhiteStar from '../../../images/star-white.png';
import Wormhole from '../../../images/wormhole.jpg';
import Payment from './Payments';
// import Gauge from '../../../images/gauge.png';
import { Data, FavState, Tags, Tag } from '../type';
import { Line } from 'rc-progress';
import { RootState } from 'index';

const IntroSection = () => {
  const [favorite, setFavorite] = useState<boolean>(false);
  const [projectId, setProjectId] = useState<number>(1);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [goal, setGoal] = useState<number>(0);
  const [categoryId, setCategoryId] = useState<number>(0);
  const [pledged, setPledged] = useState<number>(0);
  const [tags, setTags] = useState<Tag[]>([]);
  const [dDay, setdDay] = useState<number>(0);

  const history = useHistory();
  const WishesUrl = `${REACT_APP_API_URL}/projects/${projectId}/wishes`;
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

  // 즐겨찾기의 상태를 불러오는 함수
  const getFavoriteState = async () => {
    try {
      const response = await axios.get<FavState>(WishesUrl, config);
      const state = response.data.state;
      setFavorite(state);
    } catch (err) {
      console.log(err);
    }
  };

  // 즐겨찾기의 상태를 변경하는 함수
  const FavoriteHandler = async () => {
    try {
      if (!favorite) {
        const favored = await axios.post(WishesUrl, {}, config);
        console.log(favored);
        setFavorite(true);
      } else {
        const unfavored = await axios.delete(WishesUrl, config);
        console.log(unfavored);
        setFavorite(false);
      }
    } catch (err) {
      console.log(err);
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
    getFavoriteState();
    getProjects();
    getTags();
  }, []);

  return (
    <ProjectWrapper>
      <Category>
        <div>
          {categoryId === 1 && <img src={CategoryIcon1} alt="category-icon" />}
          {categoryId === 2 && <img src={CategoryIcon2} alt="category-icon" />}
          {categoryId === 3 && <img src={CategoryIcon3} alt="category-icon" />}
          {categoryId === 4 && <img src={CategoryIcon4} alt="category-icon" />}
          {categoryId === 5 && <img src={CategoryIcon5} alt="category-icon" />}
          {categoryId === 6 && <img src={CategoryIcon6} alt="category-icon" />}
          {categoryId === 7 && <img src={CategoryIcon7} alt="category-icon" />}
          {categoryId === 8 && <img src={CategoryIcon8} alt="category-icon" />}
          <span>{category}</span>
        </div>
        {isLogin && favorite ? (
          <button onClick={FavoriteHandler}>
            <img src={YellowStar} alt="yellow-star" />
          </button>
        ) : (
          <button onClick={FavoriteHandler}>
            <img src={WhiteStar} alt="yellow-star" />
          </button>
        )}
      </Category>
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
              <input type="number" placeholder="후원금액을 입력해주세요." />
            </div>
            <div>
              <span>전화번호</span>
              <input type="number" placeholder="'-'를 제외하고 입력해주세요." />
            </div>
          </FundInput>
          <Payment />
        </SubContent>
      </MainContent>
      <HashTagContainer>
        {tags.map((tag) => (
          <HashTag key={tag.id}>{tag.name}</HashTag>
        ))}
      </HashTagContainer>
    </ProjectWrapper>
  );
};

export default IntroSection;
