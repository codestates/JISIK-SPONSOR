import React from 'react';
import { CheckListProps } from './CheckBox';
function CheckItems({
  htmlFor,
  text,
  handleCheckElement,
  list,
  checkedList,
  handleModal
}: any) {
  const filter = checkedList.filter((el: CheckListProps) => list.id === el.id);
  return (
    <>
      <div>
        <input
          type="checkbox"
          id={htmlFor}
          onChange={(e) => handleCheckElement(e.target.checked, list)}
          checked={filter.length !== 0 ? true : false}
        />
        <label htmlFor={htmlFor}>
          {text} <a onClick={handleModal}>[자세히 보기]</a>
        </label>
      </div>
    </>
  );
}

export default CheckItems;
