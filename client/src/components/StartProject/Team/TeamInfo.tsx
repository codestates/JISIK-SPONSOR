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
import { useDispatch, useSelector } from 'react-redux';
import TeamItems from './TeamItems';
import TeamAddItems from './TeamAddItems';
import { showMiniMoal, insertText } from 'store/modal-slice';
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
  const dispatch = useDispatch();
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
    window.scrollTo(0, 0);
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
    const filter = bringList.filter((list: any) => list.id !== idx);
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
    dispatch(showMiniMoal(true));
    dispatch(insertText('?????????????????????.'));
  };
  return (
    <Container>
      <ProjectBody>
        <h2>???????????? ??? ??????</h2>
        <p>?????? ?????? ????????? ???????????????.</p>

        <ProjectTeamMember
          showMemo={showMemo.memberMemo}
          onFocus={() => setShowMemo({ ...showMemo, memberMemo: true })}
          onBlur={() => setShowMemo({ ...showMemo, memberMemo: false })}
        >
          <h3>???????????? ?????? ??????</h3>
          <AddTeamMember ref={ulElement}>
            {/* ??????????????? ?????????????????? */}
            {bringList.map((item: any) => (
              <TeamItems
                key={item.id}
                id={item.id}
                item={item}
                handleInput={handleInput}
                removeBringList={removeBringList}
              />
            ))}

            {/* ?????? ?????????????????? ???????????? */}
            {memberList.map((list: any, idx) => (
              <TeamAddItems
                key={idx}
                handleInput={handleInput}
                removeTeamList={removeTeamList}
                list={list}
                idx={idx}
              />
            ))}
            {/* ??????input */}

            <li>
              <div>
                <label>??????</label>
                <input
                  type="text"
                  onChange={handleInput('name')}
                  placeholder="?????? ??????"
                  value={teamContent.name}
                />
              </div>
              <div>
                <label>?????? ??????</label>
                <input
                  type="text"
                  onChange={handleInput('bio')}
                  placeholder="?????? ????????? ???????????? ???????????? ????????? ???????????????."
                  value={teamContent.bio}
                />
              </div>
            </li>
          </AddTeamMember>
          {isVaild && (
            <ErrorMessage>
              ????????? ????????? ?????? ????????? ???????????? ??? ????????????.
            </ErrorMessage>
          )}
          <AddTeamMemberButton onClick={addMemberList}>
            ?????? ??????
          </AddTeamMemberButton>
          <FocusMemo>
            ???????????? ????????? ????????? ?????? ????????? ????????? ??????????????????.
          </FocusMemo>
        </ProjectTeamMember>

        <ProjectTeamName
          showMemo={showMemo.teamNameMemo}
          onFocus={() => setShowMemo({ ...showMemo, teamNameMemo: true })}
          onBlur={() => setShowMemo({ ...showMemo, teamNameMemo: false })}
        >
          <h3>???????????? ??????</h3>
          <input
            type="text"
            onChange={handleTextArea('teamName')}
            value={teamText.teamName}
          />
          <FocusMemo>??????????????? ???????????? ?????? ????????? ??????????????????.</FocusMemo>
        </ProjectTeamName>

        <ProjectTeamInfo
          showMemo={showMemo.teamMemo}
          onFocus={() => setShowMemo({ ...showMemo, teamMemo: true })}
          onBlur={() => setShowMemo({ ...showMemo, teamMemo: false })}
        >
          <h3>???????????? ??? ??????</h3>
          <TextareaCss
            onChange={handleTextArea('teamIntro')}
            value={teamText.teamIntro}
          />
          <FocusMemo>
            ??????????????? ???????????? ??? ?????? ????????? ???????????????. ?????? ????????????, ??????
            ?????? ?????? ?????? ??????????????????.
          </FocusMemo>
        </ProjectTeamInfo>

        {imgSrc ? (
          <ProjectSelectIma>
            <h3>??? ?????? ?????? ?????? ?????????</h3>

            <label htmlFor="TeamImg">
              <img src={`https://jisiksponsor.com${imgSrc}`} />
            </label>
            <input type="file" id="TeamImg" onChange={handleCoverIma} />
          </ProjectSelectIma>
        ) : (
          <ProjectTeamImg>
            <h3>??? ?????? ?????? ?????? ?????????</h3>
            <p>????????? ???????????? ???????????? ???????????????.</p>
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
          <h3>???????????? ??? ??????</h3>
          <TextareaCss
            onChange={handleTextArea('researchWord')}
            value={teamText.researchWord}
          />
          <FocusMemo>
            ?????????????????? ?????? ??? ??? ?????? ????????? ??? ????????? ??????????????????.
          </FocusMemo>
        </ProjectLastSentence>

        <SaveButton onClick={handleSaveContent}>???????????? ????????????</SaveButton>
      </ProjectBody>
    </Container>
  );
}

export default TeamInfo;
