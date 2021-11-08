import React, { useState } from 'react';
import { CheckBoxConainter } from './styled';
import CheckItems from './CheckItems';
import { onPersonalModal, onConditionModal } from 'store/modal-slice';
import { useDispatch } from 'react-redux';
export interface CheckListProps {
  id: number;
  htmlFor: string;
  text: string;
}
function CheckBox({ setCheckState }: any) {
  const dispatch = useDispatch();

  const dataLists: CheckListProps[] = [
    { id: 0, htmlFor: 'personalInfo', text: '개인정보처리방침에 동의' },
    { id: 1, htmlFor: 'usingAgree', text: '이용약관에 동의' }
  ];
  const [checkedList, setCheckedLists] = useState<CheckListProps[]>([]);
  const handleAllChecked = (isChecked: boolean) => {
    if (isChecked) {
      const checkedArr: CheckListProps[] = [];
      dataLists.forEach((list: CheckListProps) => checkedArr.push(list));
      setCheckedLists(checkedArr);
      setCheckState(true);
    } else {
      setCheckedLists([]);
      setCheckState(false);
    }
  };

  const handleCheckElement = (isChecked: boolean, list: CheckListProps) => {
    const filter = checkedList.filter(
      (el: CheckListProps) => list.id === el.id
    );
    if (isChecked && filter.length === 0) {
      setCheckedLists([...checkedList, list]);
    } else {
      setCheckedLists(checkedList.filter((el) => el.id !== list.id));
    }
  };

  const handlePersonalInfo = () => {
    console.log('personal');
    dispatch(onPersonalModal());
  };
  const handleConditionInfo = () => {
    console.log('condition');
    dispatch(onConditionModal());
  };
  return (
    <CheckBoxConainter>
      <div>
        <input
          type="checkbox"
          id="checkAll"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleAllChecked(e.target.checked)
          }
          checked={
            checkedList.length === 0
              ? false
              : checkedList.length === dataLists.length
          }
        />
        <label htmlFor="checkAll">전체동의</label>
      </div>

      <CheckItems
        key={dataLists[0].id}
        htmlFor={dataLists[0].htmlFor}
        checkedList={checkedList}
        list={dataLists[0]}
        text={dataLists[0].text}
        handleCheckElement={handleCheckElement}
        handleModal={handlePersonalInfo}
      />
      <CheckItems
        key={dataLists[1].id}
        htmlFor={dataLists[1].htmlFor}
        checkedList={checkedList}
        list={dataLists[1]}
        text={dataLists[1].text}
        handleCheckElement={handleCheckElement}
        handleModal={handleConditionInfo}
      />
    </CheckBoxConainter>
  );
}

export default CheckBox;
