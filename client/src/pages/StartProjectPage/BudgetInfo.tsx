import React from 'react';
import {
  ProjectBody,
  ProjectBudgetList,
  AddList,
  BudgetListAdd,
  ProjectBudgetPlan,
  TextareaCss,
  SaveButton,
  FocusMemo,
  TotalAmount
} from './styled';
function BudgetInfo() {
  return (
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
        <AddList>
          <div>
            <label>예산 내용</label>
            <input type="text" />
          </div>
          <div>
            <label>금액</label>
            <input type="text" />
          </div>
        </AddList>
        <BudgetListAdd>예산 항목 추가</BudgetListAdd>
        <TotalAmount>
          <h2>펀딩 총액</h2>
          <span>0원</span>
        </TotalAmount>
      </ProjectBudgetList>

      <ProjectBudgetPlan>
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
  );
}

export default BudgetInfo;
