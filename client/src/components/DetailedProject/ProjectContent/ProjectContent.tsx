import React from 'react';
import {
  ProjectHeader,
  ProjectWrapper,
  BudgetDetail,
  Timeline
} from './styled';
import ProjectBackground from '../../../images/project-background.png';
import ProjectProgress from '../../../images/project-progress.png';
import ProjectGoal from '../../../images/project-goal.png';
import ProjectBudget from '../../../images/project-budget.png';
import ProjectTimeline from '../../../images/project-timeline.png';

const ProjectContent = () => {
  return (
    <ProjectWrapper>
      <ProjectHeader>
        <div>
          <img src={ProjectBackground} alt="" />
          <h2>프로젝트 배경</h2>
        </div>
        <p>
          어느곳이든 외계인은 존재할거라는 강한 확신이 들었고, 어느곳이든
          외계인은 존재할거라는 강한 확신이 들었고, 어느곳이든 외계인은
          존재할거라는 강한 확신이 들었고, 어느곳이든 외계인은 존재할거라는 강한
          확신이 들었고, 어느곳이든 외계인은 존재할거라는 강한 확신이 들었고,
          어느곳이든 외계인은 존재할거라는 강한 확신이 들었고, 어느곳이든
          외계인은 존재할거라는 강한 확신이 들었다.
        </p>
      </ProjectHeader>
      <ProjectHeader>
        <div>
          <img src={ProjectProgress} alt="" />
          <h2>프로젝트 진행상황</h2>
        </div>
        <p>
          어느곳이든 외계인은 존재할거라는 강한 확신이 들었고, 어느곳이든
          외계인은 존재할거라는 강한 확신이 들었고, 어느곳이든 외계인은
          존재할거라는 강한 확신이 들었고, 어느곳이든 외계인은 존재할거라는 강한
          확신이 들었고, 어느곳이든 외계인은 존재할거라는 강한 확신이 들었고,
          어느곳이든 외계인은 존재할거라는 강한 확신이 들었고, 어느곳이든
          외계인은 존재할거라는 강한 확신이 들었다.
        </p>
      </ProjectHeader>
      <ProjectHeader>
        <div>
          <img src={ProjectGoal} alt="" />
          <h2>프로젝트 목표</h2>
        </div>
        <p>
          어느곳이든 외계인은 존재할거라는 강한 확신이 들었고, 어느곳이든
          외계인은 존재할거라는 강한 확신이 들었고, 어느곳이든 외계인은
          존재할거라는 강한 확신이 들었고, 어느곳이든 외계인은 존재할거라는 강한
          확신이 들었고, 어느곳이든 외계인은 존재할거라는 강한 확신이 들었고,
          어느곳이든 외계인은 존재할거라는 강한 확신이 들었고, 어느곳이든
          외계인은 존재할거라는 강한 확신이 들었다.
        </p>
      </ProjectHeader>
      <ProjectHeader>
        <div>
          <img src={ProjectBudget} alt="" />
          <h2>프로젝트 예산</h2>
        </div>
        <p>
          어느곳이든 외계인은 존재할거라는 강한 확신이 들었고, 어느곳이든
          외계인은 존재할거라는 강한 확신이 들었고, 어느곳이든 외계인은
          존재할거라는 강한 확신이 들었고, 어느곳이든 외계인은 존재할거라는 강한
          확신이 들었고, 어느곳이든 외계인은 존재할거라는 강한 확신이 들었고,
          어느곳이든 외계인은 존재할거라는 강한 확신이 들었고, 어느곳이든
          외계인은 존재할거라는 강한 확신이 들었다.
        </p>
        <BudgetDetail>
          <div>
            <span>교통비</span>
            <span>30,000원</span>
          </div>
          <div>
            <span>식비</span>
            <span>30,000원</span>
          </div>
          <div>
            <span>연구비</span>
            <span>30,000원</span>
          </div>
        </BudgetDetail>
      </ProjectHeader>
      <ProjectHeader>
        <div>
          <img src={ProjectTimeline} alt="" />
          <h2>프로젝트 타임라인</h2>
        </div>
        <p>
          어느곳이든 외계인은 존재할거라는 강한 확신이 들었고, 어느곳이든
          외계인은 존재할거라는 강한 확신이 들었고, 어느곳이든 외계인은
          존재할거라는 강한 확신이 들었고, 어느곳이든 외계인은 존재할거라는 강한
          확신이 들었고, 어느곳이든 외계인은 존재할거라는 강한 확신이 들었고,
          어느곳이든 외계인은 존재할거라는 강한 확신이 들었고, 어느곳이든
          외계인은 존재할거라는 강한 확신이 들었다.
        </p>
        <Timeline>
          <div>
            <span>2021.10.15</span>
            <span>프로젝트 시작</span>
          </div>
          <div>
            <span>2021.10.19</span>
            <span>1차 초안 시작</span>
          </div>
          <div>
            <span>2021.10.22</span>
            <span>2차 초안 시작</span>
          </div>
          <div>
            <span>2021.11.10</span>
            <span>연구결과 발표</span>
          </div>
        </Timeline>
      </ProjectHeader>
    </ProjectWrapper>
  );
};

export default ProjectContent;
