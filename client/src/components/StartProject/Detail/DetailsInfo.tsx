import axios from 'axios';
import React, { useState, useRef } from 'react';
import { REACT_APP_API_URL } from 'config';
import { RootState } from 'index';
import { useSelector } from 'react-redux';
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
  ProjectMotive,
  ProjectProgress,
  ProjectGoal,
  // ProjectAddOptions,
  ProjectTimeLine,
  ProjectTimeLineDetail,
  AddTimeLineButton,
  TimeLineListContainer
} from './styled';

interface DetailMemoProps {
  motiveMemo: boolean;
  progressMemo: boolean;
  goalMemo: boolean;
  optionsMemo: boolean;
  timelineMemo: boolean;
  detailMemo: boolean;
}
interface TimeLineContentProps {
  content: string;
  date: string;
}

interface DetailContentProps {
  motive: string;
  progress: string;
  goal: string;
  options: string;
  timeLineDes: string;
}
function DetailsInfo() {
  const ulElement = useRef<HTMLUListElement>(null);
  const projectId = useSelector((state: RootState) => state.projectSt.id);
  const [timelineList, setTimeLineList] = useState<number[]>([0]);
  const [showMemo, setShowMemo] = useState<DetailMemoProps>({
    motiveMemo: false,
    progressMemo: false,
    goalMemo: false,
    optionsMemo: false,
    timelineMemo: false,
    detailMemo: false
  });
  const [timelineContent, setTimeLineContent] = useState<TimeLineContentProps>({
    content: '',
    date: ''
  });

  const [detailContent, setDetailContent] = useState<DetailContentProps>({
    motive: '',
    progress: '',
    goal: '',
    options: '',
    timeLineDes: ''
  });

  const [isVaild, setIsVaild] = useState<boolean>(false);

  const addTimeLineList = async () => {
    const { content, date } = timelineContent;
    if (!content || !date) {
      setIsVaild(true);
      return;
    }
    setTimeLineList([
      ...timelineList,
      timelineList[timelineList.length - 1] + 1
    ]);
    handleDisable();
    const response = await axios.post(
      `${REACT_APP_API_URL}/projects/${projectId}/milestones`,
      {
        title: content,
        goalDate: date
      },
      {
        withCredentials: true
      }
    );
    console.log(response);
    setTimeLineContent({
      content: '',
      date: ''
    });
    setIsVaild(false);
  };

  const removeTimelineList = (idx: number) => {
    if (timelineList.length === 1) return;
    const filter = timelineList.filter((list) => list !== idx);
    setTimeLineList(filter);
  };

  const handleInput =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setTimeLineContent({
        ...timelineContent,
        [key]: e.target.value
      });
    };

  const handleTextArea =
    (key: string) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setDetailContent({
        ...detailContent,
        [key]: e.target.value
      });
    };

  const editButton = (idx: number, e: React.MouseEvent<HTMLButtonElement>) => {
    // textContent === '수정'이라면 disable해제 후 textContent를 '완료'로 변경
    if (e.currentTarget.textContent === '수정') {
      let length = ulElement.current?.children.length;
      if (!length) return;
      for (let i = 0; i < length; i++) {
        let content = ulElement.current?.children[i].children[0].children[1];
        let date = ulElement.current?.children[i].children[1].children[1];
        if (!content || !date) return;
        if (Number(content.getAttribute('id')) === idx) {
          content.removeAttribute('disabled');
          date.removeAttribute('disabled');
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
    for (let i = 0; i < length - 1; i++) {
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

  const handleSaveContent = async () => {
    const { motive, progress, goal, options, timeLineDes } = detailContent;
    const response = await axios.patch(
      `${REACT_APP_API_URL}/projects/${projectId}`,
      {
        project_background: motive,
        project_progress: progress,
        project_goals: goal,
        project_description: options,
        milestone_description: timeLineDes
      },
      {
        withCredentials: true
      }
    );
    console.log('프로젝트저장', response);
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
          <TextareaCss onChange={handleTextArea('motive')} />
          <FocusMemo>이 프로젝트르 진행하게 된 계기를 작성해주세요.</FocusMemo>
        </ProjectMotive>

        <ProjectProgress
          showMemo={showMemo.progressMemo}
          onFocus={() => setShowMemo({ ...showMemo, progressMemo: true })}
          onBlur={() => setShowMemo({ ...showMemo, progressMemo: false })}
        >
          <h3>프로젝트 진행 상황</h3>
          <TextareaCss onChange={handleTextArea('progress')} />
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
          <TextareaCss onChange={handleTextArea('goal')} />
          <FocusMemo>
            이 프로젝트가 하고자하는 것, 목표를 작성해주세요.
          </FocusMemo>
        </ProjectGoal>

        {/* <ProjectAddOptions
          showMemo={showMemo.optionsMemo}
          onFocus={() => setShowMemo({ ...showMemo, optionsMemo: true })}
          onBlur={() => setShowMemo({ ...showMemo, optionsMemo: false })}
        >
          <h3>추가 정보(OPTIONS)</h3>
          <TextareaCss onChange={handleTextArea('options')} />
          <FocusMemo>
            위 질문이외에 추가로 후원자들에게 알려주고 싶은 것들을 작성해주세요.
          </FocusMemo>
        </ProjectAddOptions> */}

        <ProjectTimeLine
          showMemo={showMemo.timelineMemo}
          onFocus={() => setShowMemo({ ...showMemo, timelineMemo: true })}
          onBlur={() => setShowMemo({ ...showMemo, timelineMemo: false })}
        >
          <h3>프로젝트 타임라인</h3>
          <TimeLineListContainer ref={ulElement}>
            {timelineList.map((el) => (
              <li key={el}>
                <div>
                  <label>일정 내용</label>
                  <input
                    type="text"
                    id={String(el)}
                    onChange={handleInput('content')}
                    placeholder="일정 항목 추가를 누르셔야 작성하신 항목이 반영됩니다"
                  />
                </div>
                <div>
                  <span>목표 날짜</span>
                  <input type="date" onChange={handleInput('date')} />
                </div>
                <EditButton onClick={(e) => editButton(el, e)}>수정</EditButton>
                <EditButton onClick={() => removeTimelineList(el)}>
                  삭제
                </EditButton>
              </li>
            ))}
            <FocusMemo>
              프로젝트가 어떻게 진행할지 일정 계획을 간단하게 작성해주세요.
            </FocusMemo>
          </TimeLineListContainer>
          {isVaild && (
            <ErrorMessage>
              빈칸을 채워야 일정 항목을 추가하실 수 있습니다.
            </ErrorMessage>
          )}

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
          <TextareaCss onChange={handleTextArea('timeLineDes')} />
          <FocusMemo>
            후원자가 일정을 보면서, 어떤 작업이 진행될 수 있을지 알 수 있도록
            작성해주세요.
          </FocusMemo>
        </ProjectTimeLineDetail>
        <SaveButton onClick={handleSaveContent}>저장하고 계속하기</SaveButton>
      </ProjectBody>
    </Container>
  );
}

export default DetailsInfo;
