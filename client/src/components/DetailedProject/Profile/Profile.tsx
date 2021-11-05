import React from 'react';
import {
  ProfileWrapper,
  ProfileTitle,
  ProfileContent,
  ProjectTeamTitle,
  Team
} from './style';
import ProfileIcon from '../../../images/profile.png';
import Baksa from '../../../images/baksa.png';
import TeamImg from '../../../images/teamImg.png';
import { ProjectTeam, ProjectTeamMember } from '../type';

interface ProjectProps {
  teams: ProjectTeam[];
  teamMember: ProjectTeamMember[];
}

const Profile = ({ teams, teamMember }: ProjectProps) => {
  return (
    <ProfileWrapper>
      <ProfileTitle>
        <img src={ProfileIcon} alt="" />
        <span>프로필</span>
      </ProfileTitle>
      <ProfileContent>
        <div>
          <img src={Baksa} alt="" />
          <div>
            <span>나박사</span>
            <span>공학과학 박사</span>
            <a href="#">상세 프로필 보기</a>
          </div>
        </div>
        <div>
          <span>연구자 소개</span>
          <p>
            안녕하세요. <br />
            저는 외계인을 좋아하는 공상과학자 나박사입니다.
          </p>
        </div>
      </ProfileContent>
      <ProjectTeamTitle>프로젝트 팀</ProjectTeamTitle>
      <Team>
        <img src={TeamImg} alt="" />
        <div>
          <span>팀 소개</span>
          {teams[0] && <p>팀명: {teams[0].team_name}</p>}
          {teams[0] && <p>{teams[0].team_description}</p>}
        </div>
        <div>
          <span>팀원 소개</span>
          {teamMember.map((member) => {
            return (
              <p key={member.id}>
                <strong>{member.name}</strong>: {member.bio}
              </p>
            );
          })}
        </div>
      </Team>
    </ProfileWrapper>
  );
};

export default Profile;
