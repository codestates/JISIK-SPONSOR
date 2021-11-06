import React from 'react';
import { EditButton } from '../commonStyled';
function BudgetAddItems({ handleInput, removeBudgetList, list, idx }: any) {
  return (
    <li id={idx}>
      <div>
        <label>예산 내용</label>
        <input
          type="text"
          id={String(idx)}
          onChange={handleInput('content')}
          value={list.content}
          disabled
        />
      </div>
      <div>
        <label>금액</label>
        <input
          type="number"
          id={String(idx)}
          onChange={handleInput('amount')}
          value={list.amount}
          disabled
        />
      </div>

      <EditButton onClick={() => removeBudgetList(idx)}>삭제</EditButton>
    </li>
  );
}

export default BudgetAddItems;
