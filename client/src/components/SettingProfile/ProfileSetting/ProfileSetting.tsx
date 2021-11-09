import React, { useEffect } from 'react';
import {
  SettingNickName,
  ChangeButton,
  SettingImg,
  SettingSelfIntroduction
} from './styled';
import { ProjectBody, Container } from 'components/StartProject/commonStyled';
// import coverImg from 'images/icons/cover-image.png';
import { useState } from 'react';
import { REACT_APP_API_URL } from 'config';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'index';
import userImg from 'images/icons/user-icon.png';
import { getUserInfo } from 'store/userInfo-slice';
import { UserInfoData } from 'components/Modal/type';
import { showMiniMoal, insertText } from 'store/modal-slice';
interface profileProps {
  name: string;
  bio: string;
}

interface imageProps {
  profile_url: string;
}
function ProfileSetting() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state: RootState) => state.userInfo.userInfo);
  const [profileContent, setProfileContent] = useState<profileProps>({
    name: '',
    bio: ''
  });
  const { name, bio } = profileContent;
  const [isNameVaild, setIsNameVild] = useState<boolean>(false);
  const [imgSrc, setImgSrc] = useState<string | undefined>(
    userInfo.profile_url || ''
  );

  useEffect(() => {
    axios
      .get<UserInfoData>(`${REACT_APP_API_URL}/users/me`, {
        withCredentials: true
      })
      .then((res) => {
        dispatch(getUserInfo(res.data));
      });
  }, []);

  useEffect(() => {
    setImgSrc(userInfo.profile_url);
  }, [userInfo]);
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
      dispatch(showMiniMoal(true));
      dispatch(insertText('닉네임이 성공적으로 변경되었습니다.'));
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
    dispatch(showMiniMoal(true));
    dispatch(insertText('자기소개가 성공적으로 변경되었습니다.'));
    console.log('자기소개', response);
  };

  const handleProfileIma = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const imageFile = e.target.files[0];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(imageFile);
      fileReader.onload = (e: any) => {
        setImgSrc(e.target.result);
      };

      const formData = new FormData();
      formData.append('image', imageFile);

      const response = await axios.post<imageProps>(
        `${REACT_APP_API_URL}/users/profile`,
        formData,
        {
          withCredentials: true
        }
      );
      setImgSrc(response.data.profile_url);
      dispatch(showMiniMoal(true));
      dispatch(insertText('프로필 이미지가 성공적으로 변경되었습니다.'));
      console.log('response', response);
    }
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

        {imgSrc ? (
          <SettingImg>
            <h3>프로필 이미지</h3>
            <p>이미지를 클릭하여 변경하세요.</p>
            <label htmlFor="TeamImg">
              <img src={`https://jisiksponsor.com${imgSrc}`} />
            </label>
            <input type="file" id="TeamImg" onChange={handleProfileIma} />
          </SettingImg>
        ) : (
          <SettingImg>
            <h3>프로필 이미지</h3>
            <p>이미지를 클릭하여 변경하세요.</p>
            <label htmlFor="TeamImg">
              <img src={userImg} />
            </label>
            <input type="file" id="TeamImg" onChange={handleProfileIma} />
          </SettingImg>
        )}
      </ProjectBody>
    </Container>
  );
}

export default ProfileSetting;
