import React from 'react';
import {
  SettingNickName,
  ChangeButton,
  SettingImg,
  SettingSelfIntroduction
} from './styled';
import { ProjectBody, Container } from 'components/StartProject/commonStyled';
import coverImg from 'images/icons/cover-image.png';
import { useState } from 'react';
import { REACT_APP_API_URL } from 'config';
import axios from 'axios';
function ProfileSetting() {
  const [profileContent, setProfileContent] = useState({
    name: '',
    bio: ''
  });
  const { name, bio } = profileContent;
  const handleInput =
    (key: string) =>
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      setProfileContent({
        ...profileContent,
        [key]: e?.target.value
      });
    };

  const changeNickname = async () => {
    const response = await axios.patch(
      `${REACT_APP_API_URL}/users/me`,
      {
        nickname: name
      },
      {
        withCredentials: true
      }
    );
    console.log('닉네임변경', response);
  };

  const handleBio = async () => {
    const response = await axios.patch(
      `${REACT_APP_API_URL}/users/me`,
      {
        bio
      },
      {
        withCredentials: true
      }
    );
    console.log('자기소개', response);
  };
  return (
    <Container>
      <ProjectBody>
        <h2>프로필 설정</h2>
        <p>공개 표시 되는 회원정보를 수정합니다.</p>

        <SettingNickName>
          <h3>닉네임</h3>
          <input onChange={handleInput('name')} />
          <ChangeButton onClick={changeNickname}>변경</ChangeButton>
        </SettingNickName>

        <SettingImg>
          <h3>프로필 이미지</h3>
          <label htmlFor="TeamImg">
            <img src={coverImg} />
            <span>사진을 추가하려면 클릭하세요.</span>
            <span>JPG, PNG, GIF - 50MB 파일 제한</span>
          </label>
          <input type="file" id="TeamImg" />
          <ChangeButton>변경</ChangeButton>
        </SettingImg>

        <SettingSelfIntroduction>
          <h3>자기소개</h3>
          <textarea onChange={handleInput('bio')} />
          <ChangeButton onClick={handleBio}>변경</ChangeButton>
        </SettingSelfIntroduction>
      </ProjectBody>
    </Container>
  );
}

export default ProfileSetting;
