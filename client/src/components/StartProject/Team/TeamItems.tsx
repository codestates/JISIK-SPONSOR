import React from 'react';
import { EditButton } from '../commonStyled';
function TeamItems({ handleInput, item, removeBringList }: any) {
  return (
    <li id={item.id}>
      <div>
        <label>이름</label>
        <input
          type="text"
          id={item.id}
          onChange={handleInput('content')}
          placeholder="팀원 이름"
          value={item.name}
          disabled
        />
      </div>
      <div>
        <label>간단 소개</label>
        <input
          type="text"
          id={item.id}
          onChange={handleInput('bio')}
          placeholder="팀원 추가를 누르셔야 작성하신 항목이 반영됩니다."
          value={item.bio}
          disabled
        />
      </div>
      <EditButton onClick={() => removeBringList(item.id)}>삭제</EditButton>
    </li>
  );
}
export default TeamItems;
