import styled from 'styled-components';
import {
  SubTitleCss,
  AddButton,
  ProjectCoverImage
} from 'components/StartProject/commonStyled';

// 닉네임 수정
export const SettingNickName = styled(SubTitleCss)`
  > input {
    border: 2px solid #e9ecef;
    border-radius: 5px;
    width: 250px;
    height: 40px;
    margin-top: 10px;
    margin-right: 15px;
  }
  > p {
    font-size: 12px;
    color: #dd584a;
  }
`;

// 버튼 css   orange상속요망
export const ChangeButton = styled(AddButton)`
  width: 90px;
  margin-top: 10px;
`;

// 프로필 이미지 수정
export const SettingImg = styled(ProjectCoverImage)`
  > label {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  > label > img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  > p {
    margin-top: 5px;
  }
`;

//  자기소개 수정
export const SettingSelfIntroduction = styled(SubTitleCss)`
  > textarea {
    display: block;
    resize: none;
    background: #ffffff;
    border: 2px solid #e9ecef;
    border-radius: 5px;
    margin-top: 10px;
    width: 560px;
    height: 100px;

    @media screen and (max-width: 630px) {
      width: 100%;
    }
  }
`;
