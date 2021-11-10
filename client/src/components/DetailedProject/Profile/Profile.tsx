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
import { ProjectTeam, ProjectTeamMember } from '../type';

interface ProjectProps {
  teams: ProjectTeam[];
  teamMember: ProjectTeamMember[];
  author: any;
}

const Profile = ({ teams, teamMember, author }: ProjectProps) => {
  console.log(author);
  return (
    <ProfileWrapper>
      <ProfileTitle>
        <img src={ProfileIcon} alt="" />
        <span>프로필</span>
      </ProfileTitle>
      <ProfileContent>
        <div>
          <img
            src={`https://www.jisiksponsor.com${author.profile_url}`}
            alt=""
          />
        </div>
        <div>
          <div>연구자 소개_{author.name}</div>
          <p>{author.bio}</p>
        </div>
      </ProfileContent>
      <ProjectTeamTitle>프로젝트 팀</ProjectTeamTitle>
      <Team>
        <img src={Baksa} alt="" />
        <div>
          <div>
            <span>팀 소개_{teams[0] && teams[0].team_name}</span>
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
        </div>
      </Team>
    </ProfileWrapper>
  );
};

export default Profile;
