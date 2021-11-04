import React, { useState, useRef } from 'react';
import {
  Container,
  ProjectBody,
  FocusMemo,
  TextareaCss,
  SaveButton,
  EditButton,
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
interface TeamMemoProps {
  memberMemo: boolean;
  teamMemo: boolean;
  sentenceMemo: boolean;
  teamNameMemo: boolean;
}

interface TeamContentProps {
  content: string;
  bio: string;
}
interface TeamTextProps {
  teamName: string;
  teamIntro: string;
  researchWord: string;
}

function TeamInfo() {
  const ulElement = useRef<HTMLUListElement>(null);
  const projectId = useSelector((state: RootState) => state.projectSt.id);
  const teamId = useSelector((state: RootState) => state.projectSt.teamId);
  const [memberList, setMemberList] = useState<number[]>([0]);
  const [imgSrc, setImgSrc] = useState<string>('');
  const [showMemo, setShowMemo] = useState<TeamMemoProps>({
    memberMemo: false,
    teamMemo: false,
    sentenceMemo: false,
    teamNameMemo: false
  });
  const [teamContent, setTeamContent] = useState<TeamContentProps>({
    content: '',
    bio: ''
  });
  const [teamText, setTeamText] = useState<TeamTextProps>({
    teamName: '',
    teamIntro: '',
    researchWord: ''
  });

  const [isVaild, setIsVaild] = useState(false);

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
    const { content, bio } = teamContent;
    if (!content || !bio) {
      setIsVaild(true);
      return;
    }
    setMemberList([...memberList, memberList[memberList.length - 1] + 1]);
    handleDisable();
    console.log(projectId, teamId);
    const response = await axios.post(
      `${REACT_APP_API_URL}/projects/${projectId}/teams/${teamId}/members`,
      {
        name: content,
        bio: bio
      },
      {
        withCredentials: true
      }
    );
    console.log('팀원생성', response);
    setTeamContent({
      content: '',
      bio: ''
    });
    setIsVaild(false);
  };

  const removeTeamList = (idx: number) => {
    if (memberList.length === 1) return;
    const filter = memberList.filter((list) => list !== idx);
    console.log(filter);
    setMemberList(filter);
  };

  const handleDisable = (idx?: number) => {
    // 버튼이 '완료'일때 누르면 input창을 다시 disable상태로 변경

    if (idx || idx === 0) {
      ulElement.current?.children[idx].children[0].children[1].setAttribute(
        'disabled',
        ''
      );
      ulElement.current?.children[idx].children[1].children[1].setAttribute(
        'disabled',
        ''
      );
      return;
    }

    // 항목을 추가 했을 때 추가한걸 제외한 나머지 input을 disable로 변경
    let length = ulElement.current?.children.length;
    if (!length) return;
    for (let i = 0; i < length; i++) {
      ulElement.current?.children[i].children[0].children[1].setAttribute(
        'disabled',
        ''
      );
      ulElement.current?.children[i].children[1].children[1].setAttribute(
        'disabled',
        ''
      );
    }
  };

  const editButton = (idx: number, e: React.MouseEvent<HTMLButtonElement>) => {
    // textContent === '수정'이라면 disable해제 후 textContent를 '완료'로 변경
    if (e.currentTarget.textContent === '수정') {
      let length = ulElement.current?.children.length;
      if (!length) return;
      for (let i = 0; i < length; i++) {
        let content = ulElement.current?.children[i].children[0].children[1];
        let amount = ulElement.current?.children[i].children[1].children[1];
        if (!content || !amount) return;
        if (Number(content.getAttribute('id')) === idx) {
          content.removeAttribute('disabled');
          amount.removeAttribute('disabled');
          e.currentTarget.textContent = '완료';
          return;
        }
      }
    } else {
      // textContent === '완료'라면 textContent를 '수정'로 변경 하고 disable할함수실행
      e.currentTarget.textContent = '수정';
      handleDisable(idx);
    }
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
      console.log('@@', formData.get('image'));
      axios
        .post(
          `${REACT_APP_API_URL}/projects/${projectId}/teams/${teamId}/profile`,
          formData,
          {
            withCredentials: true
          }
        )
        .then((res) => console.log(res));
    }
  };

  const handleSaveContent = async () => {
    const { teamName, teamIntro, researchWord } = teamText;
    console.log(researchWord);
    const response = await axios.patch(
      `${REACT_APP_API_URL}/projects/${projectId}/teams/${teamId}`,
      {
        teamName: teamName,
        teamDescription: teamIntro
      },
      {
        withCredentials: true
      }
    );
    console.log('프로젝트저장', response);
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
            {memberList.map((el) => (
              <li key={el}>
                <div>
                  <label>이름</label>
                  <input
                    type="text"
                    id={String(el)}
                    onChange={handleInput('content')}
                    placeholder="팀원 추가를 누르셔야 작성하신 항목이 반영됩니다"
                  />
                </div>
                <div>
                  <label>간단 소개</label>
                  <input
                    type="text"
                    id={String(el)}
                    onChange={handleInput('bio')}
                    placeholder="팀원 추가를 누르셔야 작성하신 항목이 반영됩니다"
                  />
                </div>
                <EditButton onClick={(e) => editButton(el, e)}>수정</EditButton>
                <EditButton onClick={() => removeTeamList(el)}>삭제</EditButton>
              </li>
            ))}
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
          <input type="text" onChange={handleTextArea('teamName')} />
          <FocusMemo>프로젝트를 진행하는 팀의 이름을 작명해주세요.</FocusMemo>
        </ProjectTeamName>

        <ProjectTeamInfo
          showMemo={showMemo.teamMemo}
          onFocus={() => setShowMemo({ ...showMemo, teamMemo: true })}
          onBlur={() => setShowMemo({ ...showMemo, teamMemo: false })}
        >
          <h3>프로젝트 팀 소개</h3>
          <TextareaCss onChange={handleTextArea('teamIntro')} />
          <FocusMemo>
            프로젝트를 진행하는 팀 또는 개인을 알려주세요. 이전 프로젝트, 기타
            활동 내용 등을 공개해보세요.
          </FocusMemo>
        </ProjectTeamInfo>

        {imgSrc ? (
          <ProjectSelectIma>
            <h3>팀 또는 개인 대표 이미지</h3>
            <label htmlFor="TeamImg">
              <img src={imgSrc} />
            </label>
            <input type="file" id="TeamImg" onChange={handleCoverIma} />
          </ProjectSelectIma>
        ) : (
          <ProjectTeamImg>
            <h3>팀 또는 개인 대표 이미지</h3>
            <label htmlFor="TeamImg">
              <img src={coverImg} />
              <span>사진을 추가하려면 클릭하세요.</span>
              <span>JPG, PNG, GIF - 50MB 파일 제한</span>
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
          <TextareaCss onChange={handleTextArea('researchWord')} />
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
