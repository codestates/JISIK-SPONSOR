import React from 'react';
import { EditButton } from '../commonStyled';

function TeamAddItems({ handleInput, removeTeamList, list, idx }: any) {
  return (
    <li id={idx}>
      <div>
        <label>이름</label>
        <input
          type="text"
          id={String(idx)}
          onChange={handleInput('name')}
          placeholder="팀원 이름"
          value={list.name}
          disabled
        />
      </div>
      <div>
        <label>간단 소개</label>
        <input
          type="text"
          id={String(idx)}
          onChange={handleInput('bio')}
          placeholder="팀원 추가를 누르셔야 작성하신 항목이 반영됩니다."
          value={list.bio}
          disabled
        />
      </div>
      <EditButton onClick={() => removeTeamList(idx)}>삭제</EditButton>
    </li>
  );
}

export default TeamAddItems;
