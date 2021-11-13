import React, { useState, useRef, useEffect } from 'react';
import {
  Container,
  ProjectBody,
  FocusMemo,
  TextareaCss,
  SaveButton,
  ErrorMessage
} from '../commonStyled';
import {
  ProjectTeamMember,
  AddTeamMember,
  AddTeamMemberButton,
  ProjectTeamInfo,
  ProjectTeamImg,
  ProjectLastSentence,
  ProjectTeamName,
  ProjectSelectIma
} from './styled';
import coverImg from 'images/icons/cover-image.png';
import axios from 'axios';
import { REACT_APP_API_URL } from 'config';
import { RootState } from 'index';
import { useSelector } from 'react-redux';
import TeamItems from './TeamItems';
import TeamAddItems from './TeamAddItems';
interface TeamMemoProps {
  memberMemo: boolean;
  teamMemo: boolean;
  sentenceMemo: boolean;
  teamNameMemo: boolean;
}

interface TeamContentProps {
  name: string;
  bio: string;
}
interface TeamTextProps {
  teamName: string;
  teamIntro: string;
  researchWord: string;
}

// interface TeamMemberProps {
//   id: number;
//   name: string;
//   bio: string;
// }

interface projectTeamProps {
  id: number;
}

interface imageProps {
  profile_url: string;
}
function TeamInfo() {
  const ulElement = useRef<HTMLUListElement>(null);
  const projectId = useSelector((state: RootState) => state.projectSt.id);
  const { projects } = useSelector((state: RootState) => state.project);
  const teamId = useSelector((state: RootState) => state.projectSt.teamId);
  const [memberList, setMemberList] = useState<TeamContentProps[]>([]);
  const [memberId, setMemberId] = useState<number[]>([]);
  const [bringList, setBringList] = useState<any>(
    projects.project_team_members
  );
  const [imgSrc, setImgSrc] = useState<any>(
    projects.project_teams[0].profile_url || ''
  );
  const [showMemo, setShowMemo] = useState<TeamMemoProps>({
    memberMemo: false,
    teamMemo: false,
    sentenceMemo: false,
    teamNameMemo: false
  });
  const [teamContent, setTeamContent] = useState<TeamContentProps>({
    name: '',
    bio: ''
  });
  const [teamText, setTeamText] = useState<TeamTextProps>({
    teamName: '',
    teamIntro: '',
    researchWord: ''
  });

  const [isVaild, setIsVaild] = useState(false);

  useEffect(() => {
    setTeamText({
      teamName: projects.project_teams[0].team_name || '',
      teamIntro: projects.project_teams[0].team_description || '',
      researchWord: projects.researcher_word || ''
    });
  }, []);

  useEffect(() => {
    setImgSrc(projects.project_teams[0].profile_url);
  }, [projects]);
  const handleInput =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setTeamContent({
        ...teamContent,
        [key]: e.target.value
      });
    };

  const handleTextArea =
    (key: string) =>
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      setTeamText({
        ...teamText,
        [key]: e.target.value
      });
    };
  const addMemberList = async () => {
    const { name, bio } = teamContent;
    if (!name || !bio) {
      setIsVaild(true);
      return;
    }

    setMemberList([
      ...memberList,
      {
        name: name,
        bio: bio
      }
    ]);

    const response = await axios.post<projectTeamProps>(
      `${REACT_APP_API_URL}/projects/${projectId}/teams/${teamId}/members`,
      {
        name: name,
        bio: bio
      },
      {
        withCredentials: true
      }
    );
    setMemberId([...memberId, response.data.id]);
    setTeamContent({
      name: '',
      bio: ''
    });
    setIsVaild(false);
  };

  const removeTeamList = async (idx: number) => {
    const copyList = memberList.slice();
    const copyId = memberId.slice();
    copyList.splice(idx, 1);
    copyId.splice(idx, 1);
    setMemberList(copyList);
    setMemberId(copyId);
    let removeId = memberId[idx];

    await axios.delete<projectTeamProps>(
      `${REACT_APP_API_URL}/projects/${projectId}/teams/${teamId}/members/${removeId}`,
      {
        withCredentials: true
      }
    );
  };

  const removeBringList = async (idx: number) => {
    const filter = memberList.filter((list: any) => list.id !== idx);
    setBringList(filter);

    await axios.delete<projectTeamProps>(
      `${REACT_APP_API_URL}/projects/${projectId}/teams/${teamId}/members/${idx}`,
      {
        withCredentials: true
      }
    );
  };

  const handleCoverIma = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const imageFile = e.target.files[0];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(imageFile);
      fileReader.onload = (e: any) => {
        setImgSrc(e.target.result);
      };

      const formData = new FormData();
      formData.append('image', imageFile);
      axios
        .post<imageProps>(
          `${REACT_APP_API_URL}/projects/${projectId}/teams/${teamId}/profile`,
          formData,
          {
            withCredentials: true
          }
        )
        .then((res) => setImgSrc(res.data.profile_url));
    }
  };

  const handleSaveContent = async () => {
    const { teamName, teamIntro, researchWord } = teamText;
    await axios.patch(
      `${REACT_APP_API_URL}/projects/${projectId}/teams/${teamId}`,
      {
        teamName: teamName,
        teamDescription: teamIntro
      },
      {
        withCredentials: true
      }
    );
    await axios.patch(
      `${REACT_APP_API_URL}/projects/${projectId}`,
      {
        researcherWord: researchWord
      },
      {
        withCredentials: true
      }
    );
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
          <AddTeamMember ref={ulElement}>
            {/* 작성했었던 내용불러오기 */}
            {bringList.map((item: any) => (
              <TeamItems
                key={item.id}
                id={item.id}
                item={item}
                handleInput={handleInput}
                removeBringList={removeBringList}
              />
            ))}

            {/* 팀원 지금추가한거 불러오기 */}
            {memberList.map((list: any, idx) => (
              <TeamAddItems
                key={idx}
                handleInput={handleInput}
                removeTeamList={removeTeamList}
                list={list}
                idx={idx}
              />
            ))}
            {/* 입력input */}

            <li>
              <div>
                <label>이름</label>
                <input
                  type="text"
                  onChange={handleInput('name')}
                  placeholder="팀원 추가를 누르셔야 작성하신 항목이 반영됩니다"
                  value={teamContent.name}
                />
              </div>
              <div>
                <label>간단 소개</label>
                <input
                  type="text"
                  onChange={handleInput('bio')}
                  placeholder="팀원 추가를 누르셔야 작성하신 항목이 반영됩니다"
                  value={teamContent.bio}
                />
              </div>
            </li>
          </AddTeamMember>
          {isVaild && (
            <ErrorMessage>
              빈칸을 채워야 팀원 항목을 추가하실 수 있습니다.
            </ErrorMessage>
          )}
          <AddTeamMemberButton onClick={addMemberList}>
            팀원 추가
          </AddTeamMemberButton>
          <FocusMemo>
            프로젝트 팀원과 팀원에 대한 간략한 소개를 작성해주세요.
          </FocusMemo>
        </ProjectTeamMember>

        <ProjectTeamName
          showMemo={showMemo.teamNameMemo}
          onFocus={() => setShowMemo({ ...showMemo, teamNameMemo: true })}
          onBlur={() => setShowMemo({ ...showMemo, teamNameMemo: false })}
        >
          <h3>프로젝트 팀명</h3>
          <input
            type="text"
            onChange={handleTextArea('teamName')}
            value={teamText.teamName}
          />
          <FocusMemo>프로젝트를 진행하는 팀의 이름을 작명해주세요.</FocusMemo>
        </ProjectTeamName>

        <ProjectTeamInfo
          showMemo={showMemo.teamMemo}
          onFocus={() => setShowMemo({ ...showMemo, teamMemo: true })}
          onBlur={() => setShowMemo({ ...showMemo, teamMemo: false })}
        >
          <h3>프로젝트 팀 소개</h3>
          <TextareaCss
            onChange={handleTextArea('teamIntro')}
            value={teamText.teamIntro}
          />
          <FocusMemo>
            프로젝트를 진행하는 팀 또는 개인을 알려주세요. 이전 프로젝트, 기타
            활동 내용 등을 공개해보세요.
          </FocusMemo>
        </ProjectTeamInfo>

        {imgSrc ? (
          <ProjectSelectIma>
            <h3>팀 또는 개인 대표 이미지</h3>

            <label htmlFor="TeamImg">
              <img src={`https://jisiksponsor.com${imgSrc}`} />
            </label>
            <input type="file" id="TeamImg" onChange={handleCoverIma} />
          </ProjectSelectIma>
        ) : (
          <ProjectTeamImg>
            <h3>팀 또는 개인 대표 이미지</h3>
            <p>사진을 클릭하여 이미지를 추가하세요.</p>
            <label htmlFor="TeamImg">
              <img src={coverImg} />
            </label>
            <input type="file" id="TeamImg" onChange={handleCoverIma} />
          </ProjectTeamImg>
        )}

        <ProjectLastSentence
          showMemo={showMemo.sentenceMemo}
          onFocus={() => setShowMemo({ ...showMemo, sentenceMemo: true })}
          onBlur={() => setShowMemo({ ...showMemo, sentenceMemo: false })}
        >
          <h3>연구자의 한 마디</h3>
          <TextareaCss
            onChange={handleTextArea('researchWord')}
            value={teamText.researchWord}
          />
          <FocusMemo>
            후원자들에게 어필 할 수 있는 강력한 한 마디를 작성해주세요.
          </FocusMemo>
        </ProjectLastSentence>

        <SaveButton onClick={handleSaveContent}>저장하고 계속하기</SaveButton>
      </ProjectBody>
    </Container>
  );
}

export default TeamInfo;
