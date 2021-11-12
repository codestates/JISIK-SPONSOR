import {
  Section,
  ProfileWrapper,
  ProfileTitle,
  ProfileContent,
  ProjectTeamTitle,
  Team
} from './style';
import ProfileIcon from '../../../images/profile.png';
import UserIcon from '../../../images/user.png';
import Baksa from '../../../images/baksa.png';
import { ProjectTeam, ProjectTeamMember } from '../type';
import { useEffect, useState } from 'react';

interface ProjectProps {
  teams: ProjectTeam[];
  teamMember: ProjectTeamMember[];
  author: any;
}

const Profile = ({ teams, teamMember, author }: ProjectProps) => {
  const [profile, setProfile] = useState<any>(UserIcon);

  // 소셜로그인을 통해 로그인 한 경우 http로 이미지를 불러올 때 사용하는 함수
  useEffect(() => {
    if (author.profile_url) {
      const front = author.profile_url.slice(0, 4);
      if (front === 'http') {
        setProfile(author.profile_url);
      } else {
        setProfile('https://jisiksponsor.com' + author.profile_url);
      }
    }
  }, [author]);

  return (
    <Section>
      <ProfileWrapper>
        <ProfileTitle>
          <img src={ProfileIcon} alt="" />
          <span>프로필</span>
        </ProfileTitle>
        <ProfileContent>
          <div>
            <img src={profile} alt="" />
          </div>
          <div>
            <div>연구자 소개_{author.name}</div>
            <p>{author.bio}</p>
          </div>
        </ProfileContent>
        <ProjectTeamTitle>
          <img src={ProfileIcon} alt="" />
          <span>프로젝트 팀</span>
        </ProjectTeamTitle>
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
    </Section>
  );
};

export default Profile;
