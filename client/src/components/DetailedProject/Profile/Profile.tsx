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
import { ProjectTeam, ProjectTeamMember } from '../type';
import { useEffect, useState } from 'react';

interface ProjectProps {
  teams: ProjectTeam;
  teamMember: ProjectTeamMember[];
  author: any;
}

const Profile = ({ teams, teamMember, author }: ProjectProps) => {
  const [profile, setProfile] = useState<any>(UserIcon);
  const [teamProfile, setTeamProfile] = useState<any>(UserIcon);

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

  useEffect(() => {
    if (teams.profile_url) {
      setTeamProfile('https://jisiksponsor.com' + teams.profile_url);
    }
  }, [teams]);

  return (
    <Section>
      <ProfileWrapper>
        <div>
          <ProfileTitle>
            <img src={ProfileIcon} alt="" />
            <span>프로필</span>
          </ProfileTitle>
          <ProfileContent>
            <div>
              <img src={profile} alt="" />
            </div>
            <div>
              <div>연구자 소개</div>
              <h4>대표 연구자명: {author.name}</h4>
              <p>{author.bio}</p>
            </div>
          </ProfileContent>
        </div>
        {teams.team_name && (
          <div>
            <ProjectTeamTitle>
              <img src={ProfileIcon} alt="" />
              <span>프로젝트 팀</span>
            </ProjectTeamTitle>
            <Team>
              <img src={teamProfile} alt="" />
              <div>
                <div>
                  <span>팀 소개</span>
                  <h4>팀명: {teams.team_name}</h4>
                  {teams && <p>{teams.team_description}</p>}
                </div>
                <div>
                  <span>팀원 소개</span>
                  {teamMember.map((member) => {
                    return (
                      <p key={member.id}>
                        <strong>{member.name}</strong> {member.bio}
                      </p>
                    );
                  })}
                </div>
              </div>
            </Team>
          </div>
        )}
      </ProfileWrapper>
    </Section>
  );
};

export default Profile;
