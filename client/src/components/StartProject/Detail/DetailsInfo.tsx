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
    dispatch(insertText('?????????????????????.'));
  };

  return (
    <Container>
      <ProjectBody>
        <h2>???????????? ?????? ??????</h2>
        <p>??????????????? ?????? ????????? ??????????????? ???????????? ???????????????.</p>

        <ProjectMotive
          showMemo={showMemo.motiveMemo}
          onFocus={() => setShowMemo({ ...showMemo, motiveMemo: true })}
          onBlur={() => setShowMemo({ ...showMemo, motiveMemo: false })}
        >
          <h3>???????????? ??????</h3>
          <TextareaCss
            onChange={handleTextArea('motive')}
            value={detailContent.motive}
          />
          <FocusMemo>??? ??????????????? ???????????? ??? ????????? ??????????????????.</FocusMemo>
        </ProjectMotive>

        <ProjectProgress
          showMemo={showMemo.progressMemo}
          onFocus={() => setShowMemo({ ...showMemo, progressMemo: true })}
          onBlur={() => setShowMemo({ ...showMemo, progressMemo: false })}
        >
          <h3>????????? ?????????</h3>
          <TextareaCss
            onChange={handleTextArea('progress')}
            value={detailContent.progress}
          />
          <FocusMemo>??????????????? ???????????? ?????????????????? ???????????????.</FocusMemo>
        </ProjectProgress>

        <ProjectGoal
          showMemo={showMemo.goalMemo}
          onFocus={() => setShowMemo({ ...showMemo, goalMemo: true })}
          onBlur={() => setShowMemo({ ...showMemo, goalMemo: false })}
        >
          <h3>???????????? ??????</h3>
          <TextareaCss
            onChange={handleTextArea('goal')}
            value={detailContent.goal}
          />
          <FocusMemo>
            ??? ??????????????? ??????????????? ???, ????????? ??????????????????.
          </FocusMemo>
        </ProjectGoal>

        {/* <ProjectAddOptions
          showMemo={showMemo.optionsMemo}
          onFocus={() => setShowMemo({ ...showMemo, optionsMemo: true })}
          onBlur={() => setShowMemo({ ...showMemo, optionsMemo: false })}
        >
          <h3>?????? ??????(OPTIONS)</h3>
          <TextareaCss onChange={handleTextArea('options')} />
          <FocusMemo>
            ??? ??????????????? ????????? ?????????????????? ???????????? ?????? ????????? ??????????????????.
          </FocusMemo>
        </ProjectAddOptions> */}

        <ProjectTimeLine
          showMemo={showMemo.timelineMemo}
          onFocus={() => setShowMemo({ ...showMemo, timelineMemo: true })}
          onBlur={() => setShowMemo({ ...showMemo, timelineMemo: false })}
        >
          <h3>???????????? ????????????</h3>
          <TimeLineListContainer ref={ulElement}>
            {/* ??????????????? ?????????????????? */}
            {bringList.map((item: TimelineListProps) => (
              <DetailItems
                key={item.id}
                id={item.id}
                item={item}
                handleInput={handleInput}
                removeBringTimeLine={removeBringTimeLine}
              />
            ))}
            {/* ?????? ?????? ?????? ???????????? ???????????? */}
            {timelineList.map((list: TimeLineContentProps, idx) => (
              <DetailAddItems
                key={idx}
                handleInput={handleInput}
                list={list}
                idx={idx}
                removeTimelineList={removeTimelineList}
              />
            ))}

            {/* ?????? input */}

            <li>
              <div>
                <label>?????? ??????</label>
                <input
                  type="text"
                  onChange={handleInput('content')}
                  placeholder="?????? ?????? ????????? ???????????? ???????????? ????????? ???????????????"
                  value={timelineContent.content}
                />
              </div>
              <div>
                <span>?????? ??????</span>
                <input
                  type="date"
                  onChange={handleInput('date')}
                  value={timelineContent.date}
                />
              </div>
            </li>

            <FocusMemo>
              ??????????????? ????????? ???????????? ?????? ????????? ???????????? ??????????????????.
            </FocusMemo>
          </TimeLineListContainer>
          {isVaild && (
            <ErrorMessage>
              ????????? ????????? ?????? ????????? ???????????? ??? ????????????.
            </ErrorMessage>
          )}

          <AddTimeLineButton onClick={addTimeLineList}>
            ?????? ?????? ??????
          </AddTimeLineButton>
        </ProjectTimeLine>

        <ProjectTimeLineDetail
          showMemo={showMemo.detailMemo}
          onFocus={() => setShowMemo({ ...showMemo, detailMemo: true })}
          onBlur={() => setShowMemo({ ...showMemo, detailMemo: false })}
        >
          <h3>???????????? ???????????? ??????</h3>
          <TextareaCss
            onChange={handleTextArea('timeLineDes')}
            value={detailContent.timeLineDes}
          />
          <FocusMemo>
            ???????????? ????????? ?????????, ?????? ????????? ????????? ??? ????????? ??? ??? ?????????
            ??????????????????.
          </FocusMemo>
        </ProjectTimeLineDetail>
        <SaveButton onClick={handleSaveContent}>???????????? ????????????</SaveButton>
      </ProjectBody>
    </Container>
  );
}

export default DetailsInfo;
