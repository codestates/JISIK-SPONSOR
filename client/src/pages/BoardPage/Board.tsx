/*eslint-disable*/
import axios from 'axios';
import { useEffect, useState } from 'react';
import CategorySection from '../../components/Board/CategorySection/CategorySection';
import SearchSection from '../../components/Board/SearchSection/SearchSection';
import PostcardSection from '../../components/Board/PostcardSection/PostcardSection';
import MoreBtnSection from '../../components/Board/MoreBtnSection/MoreBtnSection';
import { Data, Row } from '../../components/ProjectsCards/type';
import { REACT_APP_API_URL } from '../../config';

const Board = () => {
  const [btnMessage, setBtnMessage] = useState<string>(''); // 경고 메세지
  const [projectTotal, setProjectTotal] = useState<number>(0); // 데이터베이스에 있는 프로젝트의 토탈
  const [btnClick, setBtnClick] = useState<boolean>(false); // 더보기 버튼 클릭 여부 => 스크롤과 경고 메세지와 연관
  const [allProjects, setAllProjects] = useState<Array<Row>>([]); // 실제 받아온 프로젝트 내용물
  const [projectLimit, setProjectLimit] = useState<number>(9); // 몇 개의  프로젝트를 가져올 수 있는지
  const [optionQuerys, setOptionQuerys] = useState({
    // 프로젝트를 가져오기 위한 쿼리문 객체
    author: '',
    categoryName: '전체',
    offset: '1',
    limit: projectLimit,
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
      const keys: any[] = Object.keys(optionQuerys);
      const values: any[] = Object.values(optionQuerys);

      const str = keys.reduce((acc: string, cur: string, idx: number) => {
        if (idx !== keys.length - 1) return acc + cur + '=' + values[idx] + '&';
        return acc + cur + '=' + values[idx];
      }, '');

      const url = REACT_APP_API_URL + '/projects?' + str;
      // console.log(url);

      const response = await axios.get<Data>(url, {
        withCredentials: true
      });
      // console.log(response.data.projects);

      setAllProjects(response.data.projects.rows);
      setProjectTotal(response.data.projects.count);

      if (btnClick) {
        // console.dir(document.body);
        scrollFn(document.body.clientHeight - 1200);
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
  const seachQueryFn = (search: string) => {
    // console.log(search);
    setBtnMessage(''); // 초기화
    setProjectLimit(9); // 초기화
    setOptionQuerys({
      ...optionQuerys,
      categoryName: '전체', // 초기화
      order: '', // 초기화
      limit: 9, // 초기화
      search: search
    });
  };

  // 프로젝트 더 불러오기
  const moreGetProjects = () => {
    setOptionQuerys({
      ...optionQuerys,
      limit: projectLimit + 1
    });
    if (projectLimit < projectTotal) {
      setProjectLimit(projectLimit + 9);
      setBtnClick(true);
    } else {
      // console.log('불러올 프로젝트가 더이상 없습니다.');
      setBtnMessage('불러올 프로젝트가 더이상 없습니다.');
    }
  };

  // 윈도우 높이 조정
  const scrollFn = (top: number) => {
    window.scrollTo({ top });
  };

  // 초기 한 번만 실행
  useEffect(() => {
    window.scrollTo(0, 0);
    getAllProjects();
  }, []);

  // optionQuerys 변화 있을 시 실행
  useEffect(() => {
    getQueryProjects();
  }, [optionQuerys]);

  return (
    <div>
      <CategorySection
        categoryQueryFn={categoryQueryFn}
        filterQueryFn={filterQueryFn}
      />
      <h2 style={{ fontSize: '40px' }}>
        카테고리: {optionQuerys.categoryName}
      </h2>
      <h2 style={{ fontSize: '40px' }}>필터: {optionQuerys.order}</h2>
      <h2 style={{ fontSize: '40px' }}>검색: {optionQuerys.search}</h2>
      <h2 style={{ fontSize: '40px' }}>카드 개수 {projectLimit}</h2>
      <SearchSection seachQueryFn={seachQueryFn} />
      <PostcardSection projects={allProjects} />
      <MoreBtnSection
        moreGetProjects={moreGetProjects}
        btnMessage={btnMessage}
      />
    </div>
  );
};

export default Board;
