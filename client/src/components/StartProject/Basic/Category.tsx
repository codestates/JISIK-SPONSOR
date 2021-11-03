import { CategoryContainer } from './styled';
import React, { useState } from 'react';

function Category({ setCategoryValue }: any) {
  const [checkName, setCheckName] = useState<string>('');
  const [check, setCheck] = useState<boolean>(false);
  const checkOnlyOne = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 체크가 아무것도 안되 었을 떄 누르면 체크on, 해당 id저장
    if (!check) {
      setCheck(true);
      setCheckName(e.target.id);
      setCategoryValue(e.target.id);
    }
    // 체크on이면서 다른걸 누르게 되면 id가 같지않아서 체크취소
    else if (check && checkName !== e.target.id) {
      e.target.checked = false;
    }
    // 체크on되있는걸 한번더 누를때 off시키고 id도초기화
    else if (check && checkName === e.target.id) {
      setCheckName('');
      setCheck(false);
      setCategoryValue('');
    }
  };

  return (
    <CategoryContainer>
      <div>
        <input type="checkbox" id="인문학" onChange={checkOnlyOne} />
        <label htmlFor="인문학">인문학</label>
        <input type="checkbox" id="사회과학" onChange={checkOnlyOne} />
        <label htmlFor="사회과학">사회과학</label>
        <input type="checkbox" id="자연과학" onChange={checkOnlyOne} />
        <label htmlFor="자연과학">자연과학</label>
        <input type="checkbox" id="공학" onChange={checkOnlyOne} />
        <label htmlFor="공학">공학</label>
      </div>
      <div>
        <input type="checkbox" id="의약학" onChange={checkOnlyOne} />
        <label htmlFor="의약학">의약학</label>
        <input type="checkbox" id="농수해양학" onChange={checkOnlyOne} />
        <label htmlFor="농수해양학">농수해양학</label>
        <input type="checkbox" id="예술체육학" onChange={checkOnlyOne} />
        <label htmlFor="예술체육학">예술체육학</label>
        <input type="checkbox" id="복합학" onChange={checkOnlyOne} />
        <label htmlFor="복합학">복합학</label>
      </div>
    </CategoryContainer>
  );
}

export default Category;
