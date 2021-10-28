import { CategoryContainer } from './styled';
import React, { useState } from 'react';

function Category() {
  const [checkId, setCheckId] = useState<string>('');
  const [check, setCheck] = useState<boolean>(false);
  const checkOnlyOne = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 체크가 아무것도 안되 었을 떄 누르면 체크on, 해당 id저장
    if (!check) {
      setCheck(true);
      setCheckId(e.target.id);
    }
    // 체크on이면서 다른걸 누르게 되면 id가 같지않아서 체크취소
    else if (check && checkId !== e.target.id) {
      e.target.checked = false;
    }
    // 체크on되있는걸 한번더 누를때 off시키고 id도초기화
    else if (check && checkId === e.target.id) {
      setCheckId('');
      setCheck(false);
    }
  };

  return (
    <CategoryContainer>
      <div>
        <input
          type="checkbox"
          id="humanities"
          onChange={checkOnlyOne}
          name="category"
        />
        <label htmlFor="humanities">인문학</label>
        <input
          type="checkbox"
          id="SocialScience"
          name="category"
          onChange={checkOnlyOne}
        />
        <label htmlFor="Social science">사회과학</label>
        <input
          type="checkbox"
          id="naturalScience"
          name="category"
          onChange={checkOnlyOne}
        />
        <label htmlFor="natural science">자연과학</label>
        <input
          type="checkbox"
          id="Engineering"
          name="category"
          onChange={checkOnlyOne}
        />
        <label htmlFor="Engineering">공학</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="Medicine"
          name="category"
          onChange={checkOnlyOne}
        />
        <label htmlFor="Medicine">의약학</label>
        <input
          type="checkbox"
          id="Agricultural"
          name="category"
          onChange={checkOnlyOne}
        />
        <label htmlFor="Agricultural">농수해양학</label>
        <input
          type="checkbox"
          id="Art"
          name="category"
          onChange={checkOnlyOne}
        />
        <label htmlFor="Art">예술체육학</label>
        <input
          type="checkbox"
          id="CombinationStudies"
          name="category"
          onChange={checkOnlyOne}
        />
        <label htmlFor="CombinationStudies">복합학</label>
      </div>
    </CategoryContainer>
  );
}

export default Category;
