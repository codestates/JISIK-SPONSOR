import styled, { css } from 'styled-components';

interface PageProps {
  basic?: boolean;
  budget?: boolean;
  details?: boolean;
  team?: boolean;
  onClick?: () => void;
}
// button
export const OrangeButton = styled.button`
  width: 156px;
  padding: 10px 0;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.orange};
  border: none;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.3em;
  color: #fff;
`;

export const SaveButton = styled.button`
  margin-top: 40px;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4em;
  color: #fff;
  background: ${({ theme }) => theme.colors.violet};
  border: 3px solid #7950f2;
  border-radius: 10px;
  padding: 20px 40px; ;
`;

// textarea
export const TextareaCss = styled.textarea`
  resize: none;
  background: #ffffff;
  border: 2px solid #e9ecef;
  border-radius: 5px;
  margin-top: 10px;
  width: 560px;
  height: 100px;
`;

//  Project-Start Nav css
export const ProjectNav = styled.nav`
  background: #e9ecef;
  padding: 30px 270px 30px 270px;
  display: flex;
  justify-content: space-between;
`;
export const NavButtonGroup = styled.div`
  button {
    &:first-child {
      margin-right: 15px;
    }
    &:nth-child(2) {
      margin-right: 15px;
    }
    &:nth-child(3) {
      margin-right: 15px;
    }
  }
`;
const selectButton = css`
  background: #7950f2;
  color: #fff;
`;
export const NavButton = styled.button<PageProps>`
  width: 94px;
  background: #fff;
  border: 1px solid #ced4da;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4em;
  padding: 12px 0 12px 0;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  ${(props) =>
    (props.basic || props.budget || props.details || props.team) &&
    selectButton}
`;

export const ResultButton = styled.div`
  button {
    &:first-child {
      margin-right: 15px;
    }
  }
`;

// Project-Start Main css
export const ProjectBody = styled.main`
  background: #fff;
  height: 100%;
  padding: 60px 0 60px 270px;

  > h2 {
    font-size: 25px;
    font-weight: 700;
    line-height: 1.45em;
    color: ${({ theme }) => theme.colors.violetWord};
  }
  > p {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.45em;
    color: ${({ theme }) => theme.colors.suppotWord};
    margin-top: 10px;
  }
`;

// **기본정보**
// 프로젝트 제목
export const ProjectTitle = styled.div`
  margin-top: 40px;
  position: relative;
  > h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1.45em;
    color: #495057;
  }

  > input {
    width: 560px;
    background: #ffffff;
    border: 2px solid #e9ecef;
    border-radius: 5px;
    margin-top: 10px;
    height: 40px;
  }
`;

export const FocusMemo = styled.p`
  width: 310px;
  background: #fff9db;
  border: 2px solid #e9ecef;
  border-radius: 5px;
  padding: 30px 40px 30px 40px;
  position: absolute;
  top: 0;
  right: 400px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.45em;
  color: #495057;
`;

// 프로젝트 카테고리
export const ProjectCategory = styled.div`
  margin-top: 40px;

  > h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1.45em;
    color: #495057;
  }

  > p {
    font-size: 12.8px;
    font-weight: 400;
    line-height: 1.45em;
    color: ${({ theme }) => theme.colors.suppotWord};
    margin-top: 10px;
  }
`;

export const CategoryContainer = styled.div`
  > div {
    &:first-child {
      margin-top: 20px;
      label {
        margin-right: 15px;
      }
    }
    &:last-child {
      margin-top: 10px;
      label {
        margin-right: 15px;
      }
    }
  }

  input {
    display: none;
  }
  label {
    font-size: 16px;
    font-weight: 500;
    color: #495057;
    text-align: center;
  }
  input + label {
    cursor: pointer;
  }
  input + label::before {
    content: '';
    display: inline-block;
    width: 15px;
    height: 15px;
    border: 1px solid #868e96;
    vertical-align: middle;
    margin-right: 5px;
  }
  input:checked + label::before {
    content: '\f00c';
    font-family: 'Font Awesome 5 free';
    font-weight: 900;
    color: #ffffff;
    background-color: #0dbd7e;
    font-size: 13px;
    text-align: center;
  }
`;
// 프로젝트 해시태그
export const ProjectHashTag = styled(ProjectCategory)`
  > input {
    width: 300px;
    background: #ffffff;
    border: 2px solid #e9ecef;
    border-radius: 5px;
    margin-top: 20px;
    margin-right: 15px;
    height: 40px;
  }

  ul {
    margin-top: 20px;
    display: flex;

    > li {
      font-size: 12.8px;
      font-weight: 700;
      line-height: 1.4em;
      color: #fff;
      background: ${({ theme }) => theme.colors.orange};
      padding: 5px 10px;
      margin-right: 5px;
      text-align: center;
      border-radius: 3px;
    }
  }
`;
export const AddHashTagButton = styled(OrangeButton)``;
// 프로젝트 펀딩기간
export const ProjectFundingPeriod = styled(ProjectCategory)`
  position: relative;

  > div {
    margin-top: 10px;
    width: 160px;
  }

  > p {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.45em;
    color: #495057;
    margin-top: 10px;
  }
`;

// 프로젝트 한 줄 소개
export const ProjectSimpleInfo = styled(ProjectCategory)`
  position: relative;

  > p {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.45em;
    color: #495057;
    margin-top: 10px;
  }
`;

// 프로젝트 커버이미지
export const ProjectCoverImage = styled(ProjectCategory)`
  > input {
    display: none;
  }

  > label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px 0;
    align-items: center;
    border: 2px dashed #9575fa;
    border-radius: 5px;
    background: #f3f0ff;
    width: 560px;
    margin-top: 10px;

    > img {
      width: 60px;
      height: 60px;
    }

    > span:nth-child(2) {
      font-size: 16px;
      font-weight: 500;
      line-height: 1.45em;
      color: #9775fa;
      margin-top: 10px;
    }
    > span:last-child {
      font-size: 12.8px;
      font-weight: 500;
      line-height: 1.45em;
      color: #495057;
      margin-top: 5px;
    }
  }
`;

// **예산 정보**

export const ProjectBudgetList = styled(ProjectCategory)`
  position: relative;
`;
export const TotalAmount = styled.div`
  position: absolute;
  right: 600px;
  top: 0;
  /* width: 310px; */
  background: #ffffff;
  border: 2px solid #e9ecef;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px 68px;

  > h2 {
    font-size: 31.25px;
    font-weight: 700;
    line-height: 1.4em;
    color: #343a40;
  }

  > span {
    display: block;
    margin-top: 10px;
    font-size: 25px;
    font-weight: 700;
    line-height: 1.4em;
    color: ${({ theme }) => theme.colors.suppotWord};
  }
`;
export const AddList = styled.div`
  margin-top: 20px;
  display: flex;

  label {
    font-size: 12.8px;
    font-weight: 700;
    line-height: 1.45em;
    color: ${({ theme }) => theme.colors.suppotWord};
  }

  input {
    border: 2px solid #e9ecef;
    border-radius: 5px;
    margin-top: 5px;
    height: 40px;
  }
  > div:first-child {
    display: flex;
    flex-direction: column;
    margin-right: 20px;

    > input {
      width: 380px;
      margin-top: 5px;
    }
  }
  > div:last-child {
    display: flex;
    flex-direction: column;

    > input {
      width: 160px;
      margin-top: 5px;
    }
  }
`;

export const BudgetListAdd = styled(OrangeButton)`
  width: 163px;
  margin-top: 20px;
`;

// 예산 사용 계획
export const ProjectBudgetPlan = styled(ProjectCategory)`
  position: relative;
  // 메모 p태그 겹칠때 초기화
  > p:last-child {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.45em;
    color: #495057;
    margin-top: 10px;
  }
`;

// **상세 내용**

// 프로젝트 배경
export const ProjectMotive = styled(ProjectCategory)`
  position: relative;

  > p:last-child {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.45em;
    color: #495057;
    margin-top: 10px;
  }
`;

// 프로젝트 진행 상황
export const ProjectProgress = styled(ProjectCategory)`
  position: relative;

  > p:last-child {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.45em;
    color: #495057;
    margin-top: 10px;
  }
`;
// 프로젝트 목표
export const ProjectGoal = styled(ProjectCategory)`
  position: relative;

  > p:last-child {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.45em;
    color: #495057;
    margin-top: 10px;
  }
`;
// 추가정보(OPTIONS)
export const ProjectAddOptions = styled(ProjectCategory)`
  position: relative;

  > p:last-child {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.45em;
    color: #495057;
    margin-top: 10px;
  }
`;

// 프로젝트 타임라인
export const ProjectTimeLine = styled(ProjectCategory)`
  position: relative;

  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.45em;
    color: #495057;
    margin-top: 10px;
  }
`;

export const AddTimeLineButton = styled(OrangeButton)`
  width: 163px;
  margin-top: 20px;
`;
//프로젝트 타임라인 상세설명
export const ProjectTimeLineDetail = styled(ProjectCategory)``;

// **팀 소개**

// 프로젝트 팀원 소개

export const ProjectTeamMember = styled(ProjectCategory)`
  position: relative;

  > p:last-child {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.45em;
    color: #495057;
    margin-top: 10px;
  }
`;

export const AddTeamMember = styled(AddList)`
  > div:first-child {
    margin-right: 5px;
    > input {
      width: 100px;
      margin-top: 5px;
    }
  }
  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    > input {
      width: 295px;
      margin-top: 5px;
      margin-right: 10px;
    }
  }
`;

export const AddTeamMemberButton = styled(OrangeButton)`
  position: absolute;
  bottom: 0;
  left: 410px;
`;

// 프로젝트 팀 소개

export const ProjectTeamInfo = styled(ProjectCategory)`
  position: relative;

  > p:last-child {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.45em;
    color: #495057;
    margin-top: 10px;
  }
`;
export const ProjectTeamImg = styled(ProjectCoverImage)`
  position: relative;

  > p:last-child {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.45em;
    color: #495057;
    margin-top: 10px;
  }
  > label {
    width: 300px;
  }
`;

// 연구자의 한 마디

export const ProjectLastSentence = styled(ProjectCategory)`
  position: relative;

  > p:last-child {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.45em;
    color: #495057;
    margin-top: 10px;
  }
`;
