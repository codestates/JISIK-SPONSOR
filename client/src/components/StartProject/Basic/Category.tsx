import { CategoryContainer } from './styled';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { REACT_APP_API_URL } from 'config';
import { useSelector } from 'react-redux';
import { BasicObject } from './type';
import { RootState } from 'index';
interface ParentsProps {
  setCategoryValue: any;
  categoryValue?: string;
}
function Category({ setCategoryValue }: ParentsProps) {
  const projectId = useSelector((state: RootState) => state.projectSt.id);
  const [checkName, setCheckName] = useState<string>('');
  const [check, setCheck] = useState<boolean>(false);
  useEffect(() => {
    axios
      .get<BasicObject>(`${REACT_APP_API_URL}/projects/${projectId}`, {
        withCredentials: true
      })
      .then((res) => {
        const {
          category: { name }
        } = res.data.projects;
        let select = document.querySelector(`#${name}`);
        select?.setAttribute('checked', '');
        setCheck(true);
        setCheckName(name);
        setCategoryValue(name);
      });
  }, []);
  const checkOnlyOne = (e: React.MouseEvent<HTMLInputElement>) => {
    // 체크가 아무것도 안되 었을 떄 누르면 체크on, 해당 id저장
    if (!check) {
      setCheck(true);
      setCheckName(e.currentTarget.id);
      setCategoryValue(e.currentTarget.id);
    }
    // 체크on이면서 다른걸 누르게 되면 id가 같지않아서 체크취소
    else if (check && checkName !== e.currentTarget.id) {
      e.currentTarget.checked = false;
    }
    // 체크on되있는걸 한번더 누를때 off시키고 id도초기화
    else if (check && checkName === e.currentTarget.id) {
      setCheckName('');
      setCheck(false);
      setCategoryValue('');
    }
  };

  return (
    <CategoryContainer>
      <div>
        <input type="checkbox" id="인문학" onClick={(e) => checkOnlyOne(e)} />
        <label htmlFor="인문학">인문학</label>
        <input type="checkbox" id="사회과학" onClick={(e) => checkOnlyOne(e)} />
        <label htmlFor="사회과학">사회과학</label>
        <input type="checkbox" id="자연과학" onClick={(e) => checkOnlyOne(e)} />
        <label htmlFor="자연과학">자연과학</label>
        <input type="checkbox" id="공학" onClick={(e) => checkOnlyOne(e)} />
        <label htmlFor="공학">공학</label>
      </div>
      <div>
        <input type="checkbox" id="의약학" onClick={(e) => checkOnlyOne(e)} />
        <label htmlFor="의약학">의약학</label>
        <input
          type="checkbox"
          id="농수해양학"
          onClick={(e) => checkOnlyOne(e)}
        />
        <label htmlFor="농수해양학">농수해양학</label>
        <input
          type="checkbox"
          id="예술체육학"
          onClick={(e) => checkOnlyOne(e)}
        />
        <label htmlFor="예술체육학">예술체육학</label>
        <input type="checkbox" id="복합학" onClick={(e) => checkOnlyOne(e)} />
        <label htmlFor="복합학">복합학</label>
      </div>
    </CategoryContainer>
  );
}

export default Category;
