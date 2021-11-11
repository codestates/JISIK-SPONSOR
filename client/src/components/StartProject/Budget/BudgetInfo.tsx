import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Container,
  ProjectBody,
  FocusMemo,
  TextareaCss,
  SaveButton,
  ErrorMessage
} from '../commonStyled';
import {
  ProjectBudgetList,
  BudgetListAdd,
  ProjectBudgetPlan,
  TotalAmount,
  BudgetListContainer
} from './styled';
import { REACT_APP_API_URL } from 'config';
import { RootState } from 'index';
import BudgetItems from './BudgetItems';
import BudgetAddItems from './BudgetAddItems';
interface BudgetMemoProps {
  planMemo: boolean;
}

interface BudgetContentProps {
  content: string;
  amount: string;
}

interface projectBudgetProps {
  id: number;
}

export interface BudgetListProps {
  id: number;
  amount: string;
  title: string;
}

interface BringListProps {
  amount: string;
  content: string;
}
function BudgetInfo() {
  const ulElement = useRef<HTMLUListElement>(null);
  const projectId = useSelector((state: RootState) => state.projectSt.id);
  const { projects } = useSelector((state: RootState) => state.project);

  // const [grossAmountArr, setGrossAmountArr] = useState<number[]>([]);
  const [grossAmount, setGrossAmount] = useState<number>(0);
  const [budgetId, setBudgetId] = useState<number[]>([]);
  const [bringList, setBringList] = useState<BudgetListProps[]>(
    projects.budget_items
  );

  const [budgetList, setBudgetList] = useState<BudgetContentProps[]>([]);
  const [showMemo, setShowMemo] = useState<BudgetMemoProps>({
    planMemo: false
  });
  const [budgetContent, setBudgetContent] = useState<BudgetContentProps>({
    content: '',
    amount: ''
  });

  const [budgetPlan, setBudgetPlan] = useState<string>('');
  const [isVaild, setIsVaild] = useState(false);

  useEffect(() => {
    let sum = 0;
    bringList.forEach(
      (list: BudgetListProps) => (sum = Number(list.amount) + sum)
    );
    setGrossAmount(sum);
    const { budget_synopsis } = projects;
    setBudgetPlan(budget_synopsis);
  }, []);

  const handleInput =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setBudgetContent({
        ...budgetContent,
        [key]: e.target.value
      });
    };

  const addBudgetList = async () => {
    const { content, amount } = budgetContent;
    if (!content || !amount) {
      setIsVaild(true);
      return;
    }

    setBudgetList([
      ...budgetList,
      {
        content: content,
        amount: amount
      }
    ]);
    const response = await axios.post<projectBudgetProps>(
      `${REACT_APP_API_URL}/projects/${projectId}/budgets`,
      {
        title: content,
        amount: amount
      },
      {
        withCredentials: true
      }
    );

    setBudgetId([...budgetId, response.data.id]);
    setBudgetContent({
      content: '',
      amount: ''
    });
    setGrossAmount(grossAmount + Number(amount));
  };

  const removeBudgetList = async (idx: number) => {
    setGrossAmount(grossAmount - Number(budgetList[idx].amount));
    const copyList = budgetList.slice();
    const copyId = budgetId.slice();
    copyList.splice(idx, 1);
    copyId.splice(idx, 1);
    setBudgetList(copyList);
    setBudgetId(copyId);
    let removeId = budgetId[idx];
    await axios.delete<projectBudgetProps>(
      `${REACT_APP_API_URL}/projects/${projectId}/budgets/${removeId}`,

      {
        withCredentials: true
      }
    );
  };

  const removeBringList = async (idx: number) => {
    const filter = bringList.filter((list: BudgetListProps) => list.id !== idx);
    const AmountFilter = bringList.filter(
      (list: BudgetListProps) => list.id === idx
    );
    setGrossAmount(grossAmount - Number(AmountFilter[0].amount));
    setBringList(filter);

    await axios.delete<projectBudgetProps>(
      `${REACT_APP_API_URL}/projects/${projectId}/budgets/${idx}`,

      {
        withCredentials: true
      }
    );
  };

  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBudgetPlan(e.target.value);
  };

  const handleSaveContent = async () => {
    await axios.patch(
      `${REACT_APP_API_URL}/projects/${projectId}`,
      {
        budgetSynopsis: budgetPlan,
        goalAmout: grossAmount
      },
      {
        withCredentials: true
      }
    );
  };
  return (
    <Container>
      <ProjectBody>
        <h2>프로젝트 예산 정보</h2>
        <p>예산에 대한 상세 내용을 작성합니다.</p>
        <ProjectBudgetList>
          <TotalAmount>
            <h2>펀딩 총액</h2>
            <span>{grossAmount}원</span>
          </TotalAmount>
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
            {/* 작성했었던 내용불러오기 */}
            {bringList.map((item: BudgetListProps) => (
              <BudgetItems
                key={item.id}
                id={item.id}
                item={item}
                handleInput={handleInput}
                removeBringList={removeBringList}
              />
            ))}
            {/* 예산 일정 지금추가한거 불러오기 */}
            {budgetList.map((list: BringListProps, idx) => (
              <BudgetAddItems
                key={idx}
                handleInput={handleInput}
                removeBudgetList={removeBudgetList}
                list={list}
                idx={idx}
              />
            ))}
            {/* 입력input */}
            <li>
              <div>
                <label>예산 내용</label>
                <input
                  type="text"
                  onChange={handleInput('content')}
                  value={budgetContent.content}
                  placeholder="예산 항목 추가를 누르셔야 항목이 반영됩니다."
                />
              </div>
              <div>
                <label>금액</label>
                <input
                  type="number"
                  onChange={handleInput('amount')}
                  value={budgetContent.amount}
                  placeholder="예산 항목 추가를 누르셔야 항목이 반영됩니다."
                />
              </div>
            </li>
          </BudgetListContainer>
          {isVaild && (
            <ErrorMessage>
              빈칸을 채워야 예산 항목을 추가하실 수 있습니다.
            </ErrorMessage>
          )}
          <BudgetListAdd onClick={addBudgetList}>예산 항목 추가</BudgetListAdd>
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
          <TextareaCss onChange={handleTextArea} value={budgetPlan || ''} />
          <FocusMemo>
            펀딩 예산이 어떤 식으로 사용 될지 상세 내용을 작성해 주세요.
          </FocusMemo>
        </ProjectBudgetPlan>

        <SaveButton onClick={handleSaveContent}>저장하고 계속하기</SaveButton>
      </ProjectBody>
    </Container>
  );
}

export default BudgetInfo;
