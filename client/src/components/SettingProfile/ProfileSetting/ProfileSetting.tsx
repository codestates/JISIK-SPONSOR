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

interface profileProps {
  name: string;
  bio: string;
}
function ProfileSetting() {
  const [profileContent, setProfileContent] = useState<profileProps>({
    name: '',
    bio: ''
  });
  const { name, bio } = profileContent;
  const [isNameVaild, setIsNameVild] = useState<boolean>(false);
  const handleInput =
    (key: string) =>
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      setIsNameVild(false);
      setProfileContent({
        ...profileContent,
        [key]: e?.target.value
      });
    };

  const changeNickname = async () => {
    try {
      const response = await axios.patch(
        `${REACT_APP_API_URL}/users/me`,
        {
          nickname: name
        },
        {
          withCredentials: true
        }
      );
      setProfileContent({
        ...profileContent,
        name: ''
      });
      alert('닉네임이 정상적으로 변경되었습니다.');
      console.log('닉네임변경', response);
    } catch (err) {
      console.log(err);
      setIsNameVild(true);
    }
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
    setProfileContent({
      ...profileContent,
      bio: ''
    });
    alert('자기소개가 정상적으로 변경되었습니다.');
    console.log('자기소개', response);
  };
  return (
    <Container>
      <ProjectBody>
        <h2>프로필 설정</h2>
        <p>공개 표시 되는 회원정보를 수정합니다.</p>

        <SettingNickName>
          <h3>닉네임</h3>
          <input onChange={handleInput('name')} value={profileContent.name} />
          <ChangeButton onClick={changeNickname}>변경</ChangeButton>
          {isNameVaild && <p>이미 존재하는 닉네임입니다.</p>}
        </SettingNickName>

        <SettingSelfIntroduction>
          <h3>자기소개</h3>
          <textarea onChange={handleInput('bio')} value={profileContent.bio} />
          <ChangeButton onClick={handleBio}>변경</ChangeButton>
        </SettingSelfIntroduction>

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
      </ProjectBody>
    </Container>
  );
}

export default ProfileSetting;
