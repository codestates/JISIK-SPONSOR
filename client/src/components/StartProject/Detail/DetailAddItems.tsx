import React from 'react';
import { EditButton } from '../commonStyled';
function DetailAddItems({ handleInput, removeTimelineList, list, idx }: any) {
  return (
    <li id={idx}>
      <div>
        <label>일정 내용</label>
        <input
          type="text"
          id={String(idx)}
          onChange={handleInput('content')}
          placeholder="일정 항목 추가를 누르셔야 작성하신 항목이 반영됩니다"
          value={list.content}
          disabled
        />
      </div>
      <div>
        <span>목표 날짜</span>
        <input
          type="date"
          onChange={handleInput('date')}
          value={list.date}
          disabled
        />
      </div>

      <EditButton onClick={() => removeTimelineList(idx)}>삭제</EditButton>
    </li>
  );
}

export default DetailAddItems;
