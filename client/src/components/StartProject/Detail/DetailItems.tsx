import React, { useEffect, useState } from 'react';
import { EditButton } from '../commonStyled';
function DetailItems({ handleInput, removeBringTimeLine, item }: any) {
  const [localDate, setLocalDate] = useState<string>('');

  useEffect(() => {
    let date = item.goal_date.split('-');
    let year = date[0];
    let month = date[1];
    let day = date[2][0] + date[2][1];
    setLocalDate(`${year}-${month}-${day}`);
  }, []);
  return (
    <li id={item.id}>
      <div>
        <label>일정 내용</label>
        <input
          type="text"
          id={item.id}
          onChange={handleInput('content')}
          placeholder="일정 항목 추가를 누르셔야 작성하신 항목이 반영됩니다"
          value={item.title}
          disabled
        />
      </div>
      <div>
        <span>목표 날짜</span>
        <input
          type="date"
          onChange={handleInput('date')}
          value={localDate}
          disabled
        />
      </div>

      <EditButton onClick={() => removeBringTimeLine(item.id)}>삭제</EditButton>
    </li>
  );
}

export default DetailItems;
