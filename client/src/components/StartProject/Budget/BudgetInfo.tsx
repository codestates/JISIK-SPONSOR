import React, { useState, useRef } from 'react';
import {
  Container,
  ProjectBody,
  FocusMemo,
  TextareaCss,
  SaveButton,
  EditButton,
  ErrorMessage
} from '../commonStyled';
import {
  ProjectBudgetList,
  BudgetListAdd,
  ProjectBudgetPlan,
  TotalAmount,
  BudgetListContainer
} from './styled';

interface BudgetMemoProps {
  planMemo: boolean;
}

interface BudgetContentProps {
  content: string;
  amount: string;
}

function BudgetInfo() {
  const ulElement = useRef<HTMLUListElement>(null);
  const [budgetList, setBudgetList] = useState<number[]>([0]);
  const [showMemo, setShowMemo] = useState<BudgetMemoProps>({
    planMemo: false
  });
  const [budgetContent, setBudgetContent] = useState<BudgetContentProps>({
    content: '',
    amount: ''
  });
  const [isVaild, setIsVaild] = useState(false);

  const handleInput =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setBudgetContent({
        ...budgetContent,
        [key]: e.target.value
      });
    };

  const handleDisable = (idx?: number) => {
    // 버튼이 '완료'일때 누르면 input창을 다시 disable상태로 변경

    if (idx || idx === 0) {
      ulElement.current?.children[idx].children[0].children[1].setAttribute(
        'disabled',
        ''
      );
      ulElement.current?.children[idx].children[1].children[1].setAttribute(
        'disabled',
        ''
      );
      return;
    }

    // 항목을 추가 했을 때 추가한걸 제외한 나머지 input을 disable로 변경
    let length = ulElement.current?.children.length;
    if (!length) return;
    for (let i = 0; i < length; i++) {
      ulElement.current?.children[i].children[0].children[1].setAttribute(
        'disabled',
        ''
      );
      ulElement.current?.children[i].children[1].children[1].setAttribute(
        'disabled',
        ''
      );
    }
  };

  const editButton = (idx: number, e: React.MouseEvent<HTMLButtonElement>) => {
    // textContent === '수정'이라면 disable해제 후 textContent를 '완료'로 변경
    if (e.currentTarget.textContent === '수정') {
      let length = ulElement.current?.children.length;
      if (!length) return;
      for (let i = 0; i < length; i++) {
        let content = ulElement.current?.children[i].children[0].children[1];
        let amount = ulElement.current?.children[i].children[1].children[1];
        if (!content || !amount) return;
        if (Number(content.getAttribute('id')) === idx) {
          content.removeAttribute('disabled');
          amount.removeAttribute('disabled');
          e.currentTarget.textContent = '완료';
          return;
        }
      }
    } else {
      // textContent === '완료'라면 textContent를 '수정'로 변경 하고 disable할함수실행
      e.currentTarget.textContent = '수정';
      handleDisable(idx);
    }
  };

  const addBudgetList = () => {
    const { content, amount } = budgetContent;
    if (!content || !amount) {
      setIsVaild(true);
      return;
    }
    setBudgetList([...budgetList, budgetList[budgetList.length - 1] + 1]);
    handleDisable();
    setBudgetContent({
      content: '',
      amount: ''
    });
    setIsVaild(false);
  };

  const removeBudgetList = (idx: number) => {
    if (budgetList.length === 1) return;
    const filter = budgetList.filter((list) => list !== idx);
    setBudgetList(filter);
  };
  return (
    <Container>
      <ProjectBody>
        <h2>프로젝트 예산 정보</h2>
        <p>예산에 대한 상세 내용을 작성합니다.</p>
        <ProjectBudgetList>
          <h3>예산 항목</h3>
          <p>
            예산 항목을 열거할 때 가능한 한 투명하도록 하십시오.
            <br />
            프로젝트의 자금 조달 목표는 모든 예산 비용의 합계로 자동 계산됩니다.
            <br />
            (평균적으로 성공적으로 자금을 지원받은 프로젝트들을 50만원 미만의
            예산으로 시작합니다.)
            <br />
          </p>
          <BudgetListContainer ref={ulElement}>
            {budgetList.map((el) => (
              <li key={el}>
                <div>
                  <label>예산 내용</label>
                  <input
                    type="text"
                    id={String(el)}
                    onChange={handleInput('content')}
                  />
                </div>
                <div>
                  <label>금액</label>
                  <input
                    type="number"
                    id={String(el)}
                    onChange={handleInput('amount')}
                  />
                </div>
                <EditButton onClick={(e) => editButton(el, e)}>수정</EditButton>

                <EditButton onClick={() => removeBudgetList(el)}>
                  삭제
                </EditButton>
              </li>
            ))}
          </BudgetListContainer>
          {isVaild && (
            <ErrorMessage>
              빈칸을 채워야 예산 항목을 추가하실 수 있습니다.
            </ErrorMessage>
          )}
          <BudgetListAdd onClick={addBudgetList}>예산 항목 추가</BudgetListAdd>
          <TotalAmount>
            <h2>펀딩 총액</h2>
            <span>0원</span>
          </TotalAmount>
        </ProjectBudgetList>

        <ProjectBudgetPlan
          showMemo={showMemo.planMemo}
          onFocus={() => setShowMemo({ ...showMemo, planMemo: true })}
          onBlur={() => setShowMemo({ ...showMemo, planMemo: false })}
        >
          <h3>예산 사용 계획</h3>
          <p>
            프로젝트에 쓰일 예산 항목을 적는 항목입니다. 자세하게 작성해주세요.
          </p>
          <TextareaCss />
          <FocusMemo>
            펀딩 예산이 어떤 식으로 사용 될지 상세 내용을 작성해 주세요.
          </FocusMemo>
        </ProjectBudgetPlan>

        <SaveButton>저장하고 계속하기</SaveButton>
      </ProjectBody>
    </Container>
  );
}

export default BudgetInfo;
