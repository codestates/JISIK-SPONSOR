import React, { useState } from 'react';
import {
  Container,
  ProjectBody,
  FocusMemo,
  TextareaCss,
  SaveButton
} from '../commonStyled';
import {
  ProjectTeamMember,
  AddTeamMember,
  AddTeamMemberButton,
  ProjectTeamInfo,
  ProjectTeamImg,
  ProjectLastSentence
} from './styled';
import coverImg from 'images/icons/cover-image.png';

interface TeamMemoProps {
  memberMemo: boolean;
  teamMemo: boolean;
  sentenceMemo: boolean;
}

function TeamInfo() {
  const [memberList, setMemberList] = useState<number[]>([0]);
  const [showMemo, setShowMemo] = useState<TeamMemoProps>({
    memberMemo: false,
    teamMemo: false,
    sentenceMemo: false
  });
  const addMemberList = () => {
    setMemberList([...memberList, memberList[memberList.length - 1] + 1]);
  };
  return (
    <Container>
      <ProjectBody>
        <h2>프로젝트 팀 소개</h2>
        <p>팀에 대한 소개를 작성합니다.</p>

        <ProjectTeamMember
          showMemo={showMemo.memberMemo}
          onFocus={() => setShowMemo({ ...showMemo, memberMemo: true })}
          onBlur={() => setShowMemo({ ...showMemo, memberMemo: false })}
        >
          <h3>프로젝트 팀원 소개</h3>
          <AddTeamMember>
            {memberList.map((el) => (
              <li key={el}>
                <div>
                  <label>이름</label>
                  <input type="text" />
                </div>
                <div>
                  <label>간단 소개</label>
                  <input type="text" />
                </div>
              </li>
            ))}
            <AddTeamMemberButton onClick={addMemberList}>
              팀원 추가
            </AddTeamMemberButton>
          </AddTeamMember>
          <FocusMemo>
            프로젝트 팀원과 팀원에 대한 간략한 소개를 작성해주세요.
          </FocusMemo>
        </ProjectTeamMember>

        <ProjectTeamInfo
          showMemo={showMemo.teamMemo}
          onFocus={() => setShowMemo({ ...showMemo, teamMemo: true })}
          onBlur={() => setShowMemo({ ...showMemo, teamMemo: false })}
        >
          <h3>프로젝트 팀 소개</h3>
          <TextareaCss />
          <FocusMemo>
            프로젝트를 진행하는 팀 또는 개인을 알려주세요. 이전 프로젝트, 기타
            활동 내용 등을 공개해보세요.
          </FocusMemo>
        </ProjectTeamInfo>

        <ProjectTeamImg>
          <h3>팀 또는 개인 대표 이미지</h3>
          <label htmlFor="TeamImg">
            <img src={coverImg} />
            <span>사진을 추가하려면 클릭하세요.</span>
            <span>JPG, PNG, GIF - 50MB 파일 제한</span>
          </label>
          <input type="file" id="TeamImg" />
        </ProjectTeamImg>

        <ProjectLastSentence
          showMemo={showMemo.sentenceMemo}
          onFocus={() => setShowMemo({ ...showMemo, sentenceMemo: true })}
          onBlur={() => setShowMemo({ ...showMemo, sentenceMemo: false })}
        >
          <h3>연구자의 한 마디</h3>
          <TextareaCss />
          <FocusMemo>
            후원자들에게 어필 할 수 있는 강력한 한 마디를 작성해주세요.
          </FocusMemo>
        </ProjectLastSentence>

        <SaveButton>저장하고 계속하기</SaveButton>
      </ProjectBody>
    </Container>
  );
}

export default TeamInfo;
