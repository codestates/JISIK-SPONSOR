import React, { useState, useEffect } from 'react';
import IntroNotYet from '../../components/DetailedProject/IntroSection/IntroNotYet';
import ProjectContent from 'components/DetailedProject/ProjectContent/ProjectContent';
import Profile from 'components/DetailedProject/Profile/Profile';
import Comments from 'components/DetailedProject/Comments/Comments';
import Sponsors from 'components/DetailedProject/Sponsors/Sponsors';
import TabButton from 'components/DetailedProject/TabButton/TabButton';
import TopButton from '../../images/icons/gotop-icon.png';
import { GoTopButton, ProjectContainer, Wrapper } from './styled';
import { getProjectId } from 'store/projectState-slice';
import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from 'index';
import { UserInfoProps } from 'store/userInfo-slice';
import { getUserInfo } from 'store/userInfo-slice';

import { REACT_APP_API_URL } from 'config';
import { useHistory } from 'react-router';
import { RootState } from 'index';
import { Data, ProjectTeam, ProjectTeamMember } from './type';
import axios from 'axios';
import IntroFinished from 'components/DetailedProject/IntroSection/IntroFinished';
import IntroAlready from 'components/DetailedProject/IntroSection/IntroAlready';

const DetailedProject = () => {
  const [project, setProject] = useState<any>({});
  const [teams, setTeams] = useState<ProjectTeam[]>([]);
  const [sponsorIds, setSponsorIds] = useState<number[]>([]);
  const [teamMember, setTeamMember] = useState<ProjectTeamMember[]>([]);
  const [isUserSponsor, setIsUserSponsor] = useState<boolean>(false);
  const [achieved, setAchieved] = useState<string>('');

  const isLogin = useSelector((state: RootState) => state.login.isLogin);
  const userInfo = useSelector((state: RootState) => state.userInfo);
  const { id } = userInfo.userInfo;

  const detailTab = useSelector((state: RootState) => state.detailPage);
  const history = useHistory();
  const dispatch = useDispatch();

  //최초 렌더링 시 특정 프로젝트의 데이터를 불러오는 함수 실행
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchUserInfo();
    getProjects();
  }, []);

  // 지식스폰서 명단에 유저가 포함되어있는지 여부를 확인
  useEffect(() => {
    if (id && sponsorIds.includes(id)) {
      setIsUserSponsor(true);
    }
  }, [id, sponsorIds]);

  // 특정 프로젝트에 데이터를 불러오는 함수
  const getProjects = async () => {
    try {
      const url = window.location.pathname.slice(18);
      const response = await axios.get<Data>(
        `${REACT_APP_API_URL}/projects/single?slug=${url}`,
        {
          withCredentials: true
        }
      );
      const { projects } = response.data;
      const { id, status } = response.data.projects;
      setProject(projects);
      setAchieved(status);
      setTeams(projects.project_teams);
      setTeamMember(projects.project_team_members);
      dispatch(getProjectId(id));
    } catch (err) {
      console.log(err);
      history.push('/404');
    }
  };

  // 로그인한 유저의 정보를 받아오는 함수
  const fetchUserInfo = async () => {
    try {
      const url = `${REACT_APP_API_URL}/users/me`;
      const config = { withCredentials: true };
      const response = await axios.get<UserInfoProps>(url, config);
      dispatch(getUserInfo(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ProjectContainer>
      {(!isLogin || (isLogin && !isUserSponsor)) &&
        achieved === 'inprogress' && <IntroNotYet />}
      {achieved === 'achieved' && <IntroFinished />}
      {isLogin && isUserSponsor && achieved === 'inprogress' && (
        <IntroAlready />
      )}
      <TabButton />
      {detailTab.overview && (
        <>
          <ProjectContent project={project} />
          {teams && <Profile teams={teams} teamMember={teamMember} />}
          <Comments project={project} setProject={setProject} />
          <Sponsors setSponsorIds={setSponsorIds} sponsorIds={sponsorIds} />
          <GoTopButton href="#">
            <img src={TopButton} alt="Top-button" />
          </GoTopButton>
        </>
      )}
      {detailTab.labnote && (
        <Wrapper>추후 랩 노트를 위한 페이지입니다.</Wrapper>
      )}
    </ProjectContainer>
  );
};

export default DetailedProject;
