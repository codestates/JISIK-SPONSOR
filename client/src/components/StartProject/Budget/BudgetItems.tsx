import React from 'react';
import { EditButton } from '../commonStyled';

function BudgetItems({ handleInput, item, removeBringList }: any) {
  return (
    <li id={item.id}>
      <div>
        <label>예산 내용</label>
        <input
          type="text"
          id={item.id}
          onChange={handleInput('content')}
          value={item.title}
          disabled
        />
      </div>
      <div>
        <label>금액</label>
        <input
          type="number"
          id={item.id}
          onChange={handleInput('amount')}
          value={Math.floor(item.amount)}
          disabled
        />
      </div>

      <EditButton onClick={() => removeBringList(item.id)}>삭제</EditButton>
    </li>
  );
}

export default BudgetItems;
