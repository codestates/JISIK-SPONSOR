import React from 'react';
import {
  ProjectBody,
  ProjectTeamMember,
  AddTeamMember,
  AddTeamMemberButton,
  ProjectTeamInfo,
  TextareaCss,
  ProjectTeamImg,
  ProjectLastSentence,
  SaveButton,
  FocusMemo
} from './styled';
import coverImg from '../../images/icons/cover-image.png';

function TeamInfo() {
  return (
    <ProjectBody>
      <h2>프로젝트 팀 소개</h2>
      <p>팀에 대한 소개를 작성합니다.</p>

      <ProjectTeamMember>
        <h3>프로젝트 팀원 소개</h3>
        <AddTeamMember>
          <div>
            <label>이름</label>
            <input type="text" />
          </div>
          <div>
            <label>간단 소개</label>
            <input type="text" />
          </div>
          <AddTeamMemberButton>팀원 추가</AddTeamMemberButton>
        </AddTeamMember>
        <FocusMemo>프로젝트 팀원 또는 개인의 SNS를 등록해주세요.</FocusMemo>
      </ProjectTeamMember>

      <ProjectTeamInfo>
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
        <FocusMemo>팀을 대표할 수 있는 이미지를선정해주세요.</FocusMemo>
      </ProjectTeamImg>

      <ProjectLastSentence>
        <h3>연구자의 한 마디</h3>
        <TextareaCss />
        <FocusMemo>
          후원자들에게 어필 할 수 있는 강력한 한 마디를 작성해주세요.
        </FocusMemo>
      </ProjectLastSentence>

      <SaveButton>저장하고 계속하기</SaveButton>
    </ProjectBody>
  );
}

export default TeamInfo;
