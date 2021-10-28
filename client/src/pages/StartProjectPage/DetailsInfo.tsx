import React from 'react';
import {
  ProjectBody,
  ProjectMotive,
  TextareaCss,
  FocusMemo,
  ProjectProgress,
  ProjectGoal,
  ProjectAddOptions,
  ProjectTimeLine,
  ProjectTimeLineDetail,
  AddList,
  AddTimeLineButton,
  SaveButton
} from './styled';
function DetailsInfo() {
  return (
    <ProjectBody>
      <h2>프로젝트 상세 내용</h2>
      <p>프로젝트에 대한 내용을 후원자에게 상세하게 작성합니다.</p>

      <ProjectMotive>
        <h3>프로젝트 배경</h3>
        <TextareaCss />
        <FocusMemo>이 프로젝트르 진행하게 된 계기를 작성해주세요.</FocusMemo>
      </ProjectMotive>

      <ProjectProgress>
        <h3>프로젝트 진행 상황</h3>
        <TextareaCss />
        <FocusMemo>
          현재 프로젝트의 진행상황이 어디까지 진행되었는지 후원자들에게
          알려주세요.
        </FocusMemo>
      </ProjectProgress>

      <ProjectGoal>
        <h3>프로젝트 목표</h3>
        <TextareaCss />
        <FocusMemo>이 프로젝트가 하고자하는 것, 목표를 작성해주세요.</FocusMemo>
      </ProjectGoal>

      <ProjectAddOptions>
        <h3>추가 정보(OPTIONS)</h3>
        <TextareaCss />
        <FocusMemo>
          위 질문이외에 추가로 후원자들에게 알려주고 싶은 것들을 작성해주세요.
        </FocusMemo>
      </ProjectAddOptions>

      <ProjectTimeLine>
        <h3>프로젝트 타임라인</h3>
        <AddList>
          <div>
            <label>일정 내용</label>
            <input type="text" />
          </div>
          <div>
            <label>목표 날짜</label>
            <input type="text" />
          </div>
        </AddList>
        <FocusMemo>
          후원자가 일정을 보면서, 어떤 작업이 진행될 수 있을지 알 수 있도록
          작성해주세요.
        </FocusMemo>
        <AddTimeLineButton>일정 항목 추가</AddTimeLineButton>
      </ProjectTimeLine>

      <ProjectTimeLineDetail>
        <h3>프로젝트 타임라인 설명</h3>
        <TextareaCss />
      </ProjectTimeLineDetail>
      <SaveButton></SaveButton>
    </ProjectBody>
  );
}

export default DetailsInfo;
