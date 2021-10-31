import React, { useState } from 'react';
import {
  Container,
  ProjectBody,
  FocusMemo,
  TextareaCss,
  SaveButton
} from '../commonStyled';
import {
  ProjectMotive,
  ProjectProgress,
  ProjectGoal,
  ProjectAddOptions,
  ProjectTimeLine,
  ProjectTimeLineDetail,
  AddTimeLineButton,
  TimeLineListContainer,
  DateInput
} from './styled';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';

interface DetailMemoProps {
  motiveMemo: boolean;
  progressMemo: boolean;
  goalMemo: boolean;
  optionsMemo: boolean;
  timelineMemo: boolean;
  detailMemo: boolean;
}

function DetailsInfo() {
  const [timelineList, setTimeLineList] = useState<number[]>([0]);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [showMemo, setShowMemo] = useState<DetailMemoProps>({
    motiveMemo: false,
    progressMemo: false,
    goalMemo: false,
    optionsMemo: false,
    timelineMemo: false,
    detailMemo: false
  });

  const addTimeLineList = () => {
    setTimeLineList([
      ...timelineList,
      timelineList[timelineList.length - 1] + 1
    ]);
  };
  return (
    <Container>
      <ProjectBody>
        <h2>프로젝트 상세 내용</h2>
        <p>프로젝트에 대한 내용을 후원자에게 상세하게 작성합니다.</p>

        <ProjectMotive
          showMemo={showMemo.motiveMemo}
          onFocus={() => setShowMemo({ ...showMemo, motiveMemo: true })}
          onBlur={() => setShowMemo({ ...showMemo, motiveMemo: false })}
        >
          <h3>프로젝트 배경</h3>
          <TextareaCss />
          <FocusMemo>이 프로젝트르 진행하게 된 계기를 작성해주세요.</FocusMemo>
        </ProjectMotive>

        <ProjectProgress
          showMemo={showMemo.progressMemo}
          onFocus={() => setShowMemo({ ...showMemo, progressMemo: true })}
          onBlur={() => setShowMemo({ ...showMemo, progressMemo: false })}
        >
          <h3>프로젝트 진행 상황</h3>
          <TextareaCss />
          <FocusMemo>
            현재 프로젝트의 진행상황이 어디까지 진행되었는지 후원자들에게
            알려주세요.
          </FocusMemo>
        </ProjectProgress>

        <ProjectGoal
          showMemo={showMemo.goalMemo}
          onFocus={() => setShowMemo({ ...showMemo, goalMemo: true })}
          onBlur={() => setShowMemo({ ...showMemo, goalMemo: false })}
        >
          <h3>프로젝트 목표</h3>
          <TextareaCss />
          <FocusMemo>
            이 프로젝트가 하고자하는 것, 목표를 작성해주세요.
          </FocusMemo>
        </ProjectGoal>

        <ProjectAddOptions
          showMemo={showMemo.optionsMemo}
          onFocus={() => setShowMemo({ ...showMemo, optionsMemo: true })}
          onBlur={() => setShowMemo({ ...showMemo, optionsMemo: false })}
        >
          <h3>추가 정보(OPTIONS)</h3>
          <TextareaCss />
          <FocusMemo>
            위 질문이외에 추가로 후원자들에게 알려주고 싶은 것들을 작성해주세요.
          </FocusMemo>
        </ProjectAddOptions>

        <ProjectTimeLine
          showMemo={showMemo.timelineMemo}
          onFocus={() => setShowMemo({ ...showMemo, timelineMemo: true })}
          onBlur={() => setShowMemo({ ...showMemo, timelineMemo: false })}
        >
          <h3>프로젝트 타임라인</h3>
          <TimeLineListContainer>
            {timelineList.map((el) => (
              <li key={el}>
                <div>
                  <label>일정 내용</label>
                  <input type="text" />
                </div>
                <div>
                  <span>목표 날짜</span>
                  <DateInput
                    selected={startDate}
                    onChange={(date: Date | null) => setStartDate(date)}
                    locale={ko}
                    dateFormat="yyyy년 MM월 dd일"
                    minDate={new Date()}
                  />
                </div>
              </li>
            ))}
            <FocusMemo>
              프로젝트가 어떻게 진행할지 일정 계획을 간단하게 작성해주세요.
            </FocusMemo>
          </TimeLineListContainer>
          <AddTimeLineButton onClick={addTimeLineList}>
            일정 항목 추가
          </AddTimeLineButton>
        </ProjectTimeLine>

        <ProjectTimeLineDetail
          showMemo={showMemo.detailMemo}
          onFocus={() => setShowMemo({ ...showMemo, detailMemo: true })}
          onBlur={() => setShowMemo({ ...showMemo, detailMemo: false })}
        >
          <h3>프로젝트 타임라인 설명</h3>
          <TextareaCss />
          <FocusMemo>
            후원자가 일정을 보면서, 어떤 작업이 진행될 수 있을지 알 수 있도록
            작성해주세요.
          </FocusMemo>
        </ProjectTimeLineDetail>
        <SaveButton>저장하고 계속하기</SaveButton>
      </ProjectBody>
    </Container>
  );
}

export default DetailsInfo;
