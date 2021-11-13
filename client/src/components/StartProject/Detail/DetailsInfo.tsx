import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import { REACT_APP_API_URL } from 'config';
import { RootState } from 'index';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  ProjectBody,
  FocusMemo,
  TextareaCss,
  SaveButton,
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
import { team } from 'store/startPageBt-slice';
import DetailAddItems from './DetailAddItems';
import DetailItems from './DetailItems';
import { showMiniMoal, insertText } from 'store/modal-slice';
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
  options?: string;
  timeLineDes: string;
}

interface TimelineListProps {
  id: number;
  title: string;
  goal_date: string;
}

interface projectDetailProps {
  id: number;
}
function DetailsInfo() {
  const dispatch = useDispatch();
  const ulElement = useRef<HTMLUListElement>(null);
  const projectId = useSelector((state: RootState) => state.projectSt.id);
  const { projects } = useSelector((state: RootState) => state.project);
  const [timelineList, setTimeLineList] = useState<TimeLineContentProps[]>([]);
  const [timeLineId, setTimeLineId] = useState<number[]>([]);
  const [bringList, setBringList] = useState<TimelineListProps[]>(
    projects.project_milestones
  );
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

  useEffect(() => {
    window.scrollTo(0, 0);
    const {
      project_background,
      project_goals,
      project_progress,
      milestone_description
    } = projects;
    setDetailContent({
      motive: project_background || '',
      progress: project_progress || '',
      goal: project_goals || '',
      timeLineDes: milestone_description || ''
    });
  }, []);
  const addTimeLineList = async () => {
    const { content, date } = timelineContent;
    if (!content || !date) {
      setIsVaild(true);
      return;
    }
    setTimeLineList([
      ...timelineList,
      {
        content: content,
        date: date
      }
    ]);

    const response = await axios.post<projectDetailProps>(
      `${REACT_APP_API_URL}/projects/${projectId}/milestones`,
      {
        title: content,
        goalDate: date
      },
      {
        withCredentials: true
      }
    );
    setTimeLineId([...timeLineId, response.data.id]);
    setTimeLineContent({
      content: '',
      date: ''
    });
    setIsVaild(false);
  };

  const removeTimelineList = async (idx: number) => {
    const copyList = timelineList.slice();
    const copyId = timeLineId.slice();
    copyList.splice(idx, 1);
    copyId.splice(idx, 1);
    setTimeLineList(copyList);
    setTimeLineId(copyId);
    let removeId = timeLineId[idx];
    await axios.delete<projectDetailProps>(
      `${REACT_APP_API_URL}/projects/${projectId}/milestones/${removeId}`,
      {
        withCredentials: true
      }
    );
  };

  const removeBringTimeLine = async (idx: number) => {
    const filter = bringList.filter(
      (list: TimelineListProps) => list.id !== idx
    );
    setBringList(filter);

    await axios.delete<projectDetailProps>(
      `${REACT_APP_API_URL}/projects/${projectId}/milestones/${idx}`,
      {
        withCredentials: true
      }
    );
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

  const handleSaveContent = async () => {
    const { motive, progress, goal, timeLineDes } = detailContent;
    await axios.patch(
      `${REACT_APP_API_URL}/projects/${projectId}`,
      {
        background: motive,
        progress: progress,
        goals: goal,
        // project_description: options,
        milestoneDescription: timeLineDes
      },
      {
        withCredentials: true
      }
    );
    dispatch(team());
    dispatch(showMiniMoal(true));
    dispatch(insertText('저장되었습니다.'));
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
          <TextareaCss
            onChange={handleTextArea('motive')}
            value={detailContent.motive}
          />
          <FocusMemo>이 프로젝트르 진행하게 된 계기를 작성해주세요.</FocusMemo>
        </ProjectMotive>

        <ProjectProgress
          showMemo={showMemo.progressMemo}
          onFocus={() => setShowMemo({ ...showMemo, progressMemo: true })}
          onBlur={() => setShowMemo({ ...showMemo, progressMemo: false })}
        >
          <h3>연구의 중요성</h3>
          <TextareaCss
            onChange={handleTextArea('progress')}
            value={detailContent.progress}
          />
          <FocusMemo>프로젝트의 중요성을 후원자들에게 알려주세요.</FocusMemo>
        </ProjectProgress>

        <ProjectGoal
          showMemo={showMemo.goalMemo}
          onFocus={() => setShowMemo({ ...showMemo, goalMemo: true })}
          onBlur={() => setShowMemo({ ...showMemo, goalMemo: false })}
        >
          <h3>프로젝트 목표</h3>
          <TextareaCss
            onChange={handleTextArea('goal')}
            value={detailContent.goal}
          />
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
            {/* 작성했었던 내용불러오기 */}
            {bringList.map((item: TimelineListProps) => (
              <DetailItems
                key={item.id}
                id={item.id}
                item={item}
                handleInput={handleInput}
                removeBringTimeLine={removeBringTimeLine}
              />
            ))}
            {/* 일정 항목 지금 추가한거 불러오기 */}
            {timelineList.map((list: TimeLineContentProps, idx) => (
              <DetailAddItems
                key={idx}
                handleInput={handleInput}
                list={list}
                idx={idx}
                removeTimelineList={removeTimelineList}
              />
            ))}

            {/* 입력 input */}

            <li>
              <div>
                <label>일정 내용</label>
                <input
                  type="text"
                  onChange={handleInput('content')}
                  placeholder="일정 항목 추가를 누르셔야 작성하신 항목이 반영됩니다"
                  value={timelineContent.content}
                />
              </div>
              <div>
                <span>목표 날짜</span>
                <input
                  type="date"
                  onChange={handleInput('date')}
                  value={timelineContent.date}
                />
              </div>
            </li>

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
          <TextareaCss
            onChange={handleTextArea('timeLineDes')}
            value={detailContent.timeLineDes}
          />
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
