import styled from 'styled-components';
import {
  SubTitleCss,
  AddButton,
  ProjectCoverImage
} from 'components/StartProject/commonStyled';

// 닉네임 수정
export const SettingNickName = styled(SubTitleCss)`
  > input {
    width: 250px;
    height: 40px;
    padding: 10px;
    color: #495057;
    margin-top: 10px;
    margin-right: 15px;
    border-radius: 5px;
    border: 2px solid #e9ecef;
  }
  > p {
    font-size: 12px;
    color: #dd584a;
  }
`;

// 버튼 css orange상속요망
export const ChangeButton = styled(AddButton)`
  width: 90px;
  margin-top: 10px;
`;

// 프로필 이미지 수정
export const SettingImg = styled(ProjectCoverImage)`
  > label {
    width: 120px;
    height: 120px;
    padding: 0;
    border-radius: 50%;
    border: none;
    overflow: hidden;
    > img {
      width: 100%;
      height: 100%;
    }
  }

  > p {
    margin-top: 5px;
  }
`;

//  자기소개 수정
export const SettingSelfIntroduction = styled(SubTitleCss)`
  > textarea {
    display: block;
    width: 560px;
    height: 100px;
    padding: 10px;
    resize: none;
    color: #495057;
    background: #fff;
    margin-top: 10px;
    border-radius: 5px;
    border: 2px solid #e9ecef;

    @media screen and (max-width: 630px) {
      width: 100%;
    }
  }
`;
