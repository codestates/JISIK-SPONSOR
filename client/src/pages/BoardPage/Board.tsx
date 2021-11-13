/*eslint-disable*/
import axios from 'axios';
import CategorySection from '../../components/Board/CategorySection/CategorySection';
import SearchSection from '../../components/Board/SearchSection/SearchSection';
import PostcardSection from '../../components/Board/PostcardSection/PostcardSection';
import MoreBtnSection from '../../components/Board/MoreBtnSection/MoreBtnSection';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { notUsed } from '../../store/headerSearch-slice';
import { useHistory } from 'react-router-dom';
import { Data, Row } from '../../components/ProjectsCards/type';
import { REACT_APP_API_URL } from '../../config';
import { GoTopButton } from './styled';
import TopButton from '../../images/icons/gotop-icon.png';

const Board = () => {
  const history: any = useHistory();
  const dispatch = useDispatch();

  const searchContent = useSelector(
    (state: any) => state.searchContent.content
  );

  const [btnMessage, setBtnMessage] = useState<string>(''); // 경고 메세지
  const [projectTotal, setProjectTotal] = useState<number>(0); // 데이터베이스에 있는 프로젝트의 토탈
  const [btnClick, setBtnClick] = useState<boolean>(false); // 더보기 버튼 클릭 여부 => 스크롤과 경고 메세지와 연관
  const [allProjects, setAllProjects] = useState<Array<Row>>([]); // 실제 받아온 프로젝트 내용물
  const [projectLimit, setProjectLimit] = useState<number>(9); // 몇 개의  프로젝트를 가져올 수 있는지
  const [optionQuerys, setOptionQuerys] = useState({
    author: '',
    categoryName: '전체',
    offset: '1',
    limit: projectLimit, // 21 토탈 : 15
    order: '',
    sort: '',
    search: ''
  });

  // GET AJAX (초기 한 번 실행 전체 포스트 조회)
  const getAllProjects = async () => {
    try {
      const url = REACT_APP_API_URL + '/projects';
      const response = await axios.get<Data>(url, {
        withCredentials: true
      });
      setAllProjects(response.data.projects.rows);
      setProjectTotal(response.data.projects.count);
    } catch (err) {
      console.error(err);
    }
  };

  // GET + 쿼리 AJAX (optionQuerys 변화 있을 시 실행)
  const getQueryProjects = async () => {
    try {
      // 객체를 문자열로 변환
      const keys: any[] = Object.keys(optionQuerys);
      const values: any[] = Object.values(optionQuerys);
      const str = keys.reduce((acc: string, cur: string, idx: number) => {
        if (idx !== keys.length - 1) return acc + cur + '=' + values[idx] + '&';
        return acc + cur + '=' + values[idx];
      }, '');

      // AJAX 한다.
      const url = REACT_APP_API_URL + '/projects?' + str;
      const response = await axios.get<Data>(url, {
        withCredentials: true
      });

      // 상태 초기화 (프로젝트의 데이터와 토탈)
      setAllProjects(response.data.projects.rows);
      setProjectTotal(response.data.projects.count);

      // 스크롤 이벤트
      if (btnClick) {
        setBtnClick(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // 카테고리 선택 헨들러
  const categoryQueryFn = (category: string) => {
    // console.dir(category);
    setBtnMessage(''); // 초기화
    setProjectLimit(9); // 초기화
    setOptionQuerys({
      ...optionQuerys,
      limit: 9, // 초기화
      search: '', // 초기화
      categoryName: category
    });
  };

  // 필터 선택 헨들러
  const filterQueryFn = (e: any) => {
    // console.dir(e.target.value);
    setBtnMessage(''); // 초기화
    setProjectLimit(9); // 초기화
    setOptionQuerys({
      ...optionQuerys,
      limit: 9, // 초기화
      order: e.target.value
    });
  };

  // 검색 헨들러
  const seachQueryFn = (e: any, search: string) => {
    if (e.key === 'Enter' || e.target.localName === 'button') {
      console.log(optionQuerys);
      setBtnMessage(''); // 초기화
      setProjectLimit(9); // 초기화
      setOptionQuerys({
        ...optionQuerys,
        categoryName: '전체', // 초기화
        order: '', // 초기화
        limit: 9, // 초기화
        search: search
      });
    }
  };

  // 프로젝트 더 불러오기
  const moreGetProjects = () => {
    // 그런데 요청한 것이 토달보다 크면 안된다. 크면 => 리렌더링 X 경고문 O
    if (projectLimit < projectTotal) {
      // 초기화 : 상태를 맞춰주는 것이다.
      setProjectLimit(projectLimit + 3);
      // 쿼리문 변화 => 리렌더링
      setOptionQuerys({
        ...optionQuerys,
        limit: projectLimit + 3
      });
      // 스크롤 이벤트
      setBtnClick(true);
    } else {
      setBtnMessage('더이상 불러올 수 없습니다.');
    }
  };

  // 초기 한 번만 리렌더링
  useEffect(() => {
    window.scrollTo(0, 0);
    getAllProjects();
  }, []);

  // optionQuerys 변화 있을 시 리렌더링
  useEffect(() => {
    getQueryProjects();
  }, [optionQuerys]);

  // 헤더 서치 변경 있을 시 리렌더링
  useEffect(() => {
    if (history.location.state === undefined) {
      dispatch(notUsed());
    } else {
      if (searchContent) {
        setOptionQuerys({
          ...optionQuerys,
          categoryName: '전체',
          search: searchContent
        });
      }
    }
  }, [searchContent]);

  useEffect(() => {
    if (history.location.state !== undefined) {
      const { search, category } = history.location.state;
      if (search && category) {
        setOptionQuerys({
          ...optionQuerys,
          search,
          categoryName: category
        });
      } else if (category) {
        setOptionQuerys({
          ...optionQuerys,
          search: '',
          categoryName: category
        });
      }
    }
  }, [history.location]);

  // window.addEventListener('scroll', () => {
  //   const top = document.documentElement.scrollTop;
  //   const scroller: any = document.querySelector('#scroller');
  //   console.log(top);
  //   console.log(scroller.offsetTop);
  //   if (top + 300 > scroller.offsetTop) {
  //     moreGetProjects();
  //   }
  //   return;
  // });

  return (
    <>
      <div>
        <CategorySection categoryQueryFn={categoryQueryFn} />
        <SearchSection
          seachQueryFn={seachQueryFn}
          filterQueryFn={filterQueryFn}
        />
        <PostcardSection projects={allProjects} />
        <MoreBtnSection
          moreGetProjects={moreGetProjects}
          btnMessage={btnMessage}
        />
      </div>
      <div id="scroller">
        <GoTopButton href="#">
          <img src={TopButton} alt="Top-button" />
        </GoTopButton>
      </div>
    </>
  );
};

export default Board;
