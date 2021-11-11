import {
  Section,
  ProjectHeader,
  ProjectWrapper,
  BudgetDetail,
  Timeline,
  ResearchWord
} from './styled';
import ProjectBackground from '../../../images/project-background.png';
import ProjectProgress from '../../../images/project-progress.png';
import ProjectGoal from '../../../images/project-goal.png';
import ProjectBudget from '../../../images/project-budget.png';
import ProjectTimeline from '../../../images/project-timeline.png';
import { Project } from '../type';

interface ProjectProps {
  project: Project;
}

const ProjectContent = ({ project }: ProjectProps) => {
  const {
    project_background,
    project_goals,
    project_progress,
    budget_items,
    project_milestones,
    budget_synopsis,
    milestone_description
  } = project;

  // 금액 숫자에 3단위로 콤마를 추가해주는 함수
  const numWithCommas = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // 예산 금액을 숫자로 바꾸고, 금액 숫자에 콤마를 추가해주는 함수
  const updatedBudgetNum =
    budget_items &&
    budget_items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        amount: numWithCommas(Number(item.amount))
      };
    });

  return (
  <>
    <Section>
      <ProjectWrapper>
        <ProjectHeader>
          <div>
            <img src={ProjectBackground} alt="" />
            <h2>프로젝트 배경</h2>
          </div>
          <p>{project_background}</p>
        </ProjectHeader>
        <ProjectHeader>
          <div>
            <img src={ProjectProgress} alt="" />
            <h2>프로젝트 진행상황</h2>
          </div>
          <p>{project_progress}</p>
        </ProjectHeader>
        <ProjectHeader>
          <div>
            <img src={ProjectGoal} alt="" />
            <h2>프로젝트 목표</h2>
          </div>
          <p>{project_goals}</p>
        </ProjectHeader>
        <ProjectHeader>
          <div>
            <img src={ProjectBudget} alt="" />
            <h2>프로젝트 예산</h2>
          </div>
          <p>{budget_synopsis}</p>
          <BudgetDetail>
            {updatedBudgetNum &&
              updatedBudgetNum.map((budget) => {
                return (
                  <div key={budget.id}>
                    <span>{budget.title}</span>
                    <span>₩ {budget.amount}</span>
                  </div>
                );
              })}
          </BudgetDetail>
        </ProjectHeader>
        <ProjectHeader>
          <div>
            <img src={ProjectTimeline} alt="" />
            <h2>프로젝트 타임라인</h2>
          </div>
          <p>{milestone_description}</p>
          <Timeline>
            {project_milestones &&
              project_milestones.map((milestone) => {
                return (
                  <div key={milestone.id}>
                    <span>
                      {new Date(milestone.goal_date).toLocaleDateString(
                        'ko-KR',
                        {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        }
                      )}
                    </span>
                    <span>{milestone.title}</span>
                  </div>
                );
              })}
          </Timeline>
        </ProjectHeader>
      </ProjectWrapper>
    </Section>
      <ResearchWord>
        <div>
          <h2>연구자의 한 마디</h2>

          <p>
            “이번 연구는 저에게 있어 이러이러한 의미가 있는 연구로 지난 10여년
            동안 준비해온 연구의 최종적인 것이라고 할 수 있겠습니다. 저의 연구에
            많은 관심 부탁드리고 이것으로 인해 많은 사람들에게 도움이 되기를
            바랍니다.”
          </p>
        </div>
      </ResearchWord>
    </>
  );
};

export default ProjectContent;
