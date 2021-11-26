import styled from 'styled-components';
import {
  SubTitleCss,
  AddButton,
  ProjectCoverImage
} from 'components/StartProject/commonStyled';

// 닉네임 수정
export const SettingNickName = styled(SubTitleCss)`
  > input {
    width: 25rem;
    height: 4rem;
    padding: 1rem;
    color: #495057;
    margin-top: 1rem;
    margin-right: 1.5rem;
    border-radius: 5px;
    border: 2px solid #e9ecef;
  }
  > p {
    font-size: 1.28rem;
    color: #dd584a;
  }
`;

// 버튼 css orange상속요망
export const ChangeButton = styled(AddButton)`
  width: 9rem;
  margin-top: 1rem;
`;

// 프로필 이미지 수정
export const SettingImg = styled(ProjectCoverImage)`
  > label {
    width: 12rem;
    height: 12rem;
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
    margin-top: 0.5rem;
  }
`;

//  자기소개 수정
export const SettingSelfIntroduction = styled(SubTitleCss)`
  > textarea {
    display: block;
    width: 56rem;
    height: 10rem;
    padding: 1rem;
    resize: none;
    color: #495057;
    background: #fff;
    margin-top: 1rem;
    border-radius: 5px;
    border: 2px solid #e9ecef;

    @media screen and (max-width: 630px) {
      width: 100%;
    }
  }
`;
