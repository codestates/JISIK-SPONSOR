const {
  user,
  project,
  category,
  project_team,
  project_team_member,
  budget_item,
  project_milestone,
  tag_project
} = require('../../models');
const userAuthen = require('../../middlewares/authorized/userAuthen');

module.exports = {
  slug: async (req, res) => {
    try {
      /**
       *
       * [유효성 검사]
       *
       */

      // 쿼리가 없으면 다음을 리턴한다.
      const { slug } = req.query;
      if (!slug) return res.status(400).json({ message: 'Bad Request!' });
      console.log(slug);

      // 특정 프로젝트를 조회한다.
      const projectInfo = await project.findOne({
        where: { path: slug },
        include: [
          {
            model: category, // categories 테이블 조인
            attributes: ['name']
          },
          {
            model: user, // users 테이블 조인
            as: 'author',
            attributes: ['name', 'nickname', 'bio', 'profile_url']
          },
          {
            model: project_team, // project_teams 테이블 조인
            attributes: ['id', 'team_name', 'team_description', 'profile_url'],
            separate: true
          },
          {
            model: project_team_member, // project_team_members 테이블 조인
            attributes: ['id', 'name', 'bio'],
            separate: true
          },
          {
            model: budget_item, // budget_items 테이블 조인
            attributes: ['id', 'title', 'amount'],
            separate: true
          },
          {
            model: project_milestone, // project_milestones 테이블 조인
            attributes: ['id', 'title', 'goal_date'],
            separate: true
          }
        ]
      });

      // 프로젝트가 존재하지 않는 경우 다음을 리턴한다.
      if (!projectInfo) return res.status(404).json({ message: 'Not Found!' });

      /**
       *
       * [특정 프로젝트 조회]
       *
       */

      // 프로젝트에 조회수를 + 1 한다.
      const updateProject = await projectInfo.update(
        { views: projectInfo.views + 1 },
        { where: { id: projectInfo.id } }
      );

      // 특정 프로젝트를 리턴한다.
      return res.status(200).json({ projects: updateProject });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error! ' });
    }
  },
  get: async (req, res) => {
    try {
      /**
       *
       * [유효성 검사]
       *
       */

      // 매개 변수가 숫자가 아니면 다음을 리턴한다.
      const { projectId } = req.params;
      if (isNaN(projectId)) {
        return res.status(400).json({ message: 'Bad Request!' });
      }

      // 특정 프로젝트를 조회한다.
      const projectInfo = await project.findOne({
        where: { id: projectId },
        include: [
          {
            model: category, // categories 테이블 조인
            attributes: ['name']
          },
          {
            model: user, // users 테이블 조인
            as: 'author',
            attributes: ['name', 'nickname', 'bio', 'profile_url']
          },
          {
            model: project_team, // project_teams 테이블 조인
            attributes: ['id', 'team_name', 'team_description', 'profile_url'],
            separate: true
          },
          {
            model: project_team_member, // project_team_members 테이블 조인
            attributes: ['id', 'name', 'bio'],
            separate: true
          },
          {
            model: budget_item, // budget_items 테이블 조인
            attributes: ['id', 'title', 'amount'],
            separate: true
          },
          {
            model: project_milestone, // project_milestones 테이블 조인
            attributes: ['id', 'title', 'goal_date'],
            separate: true
          }
        ]
      });

      // 프로젝트가 존재하지 않는 경우 다음을 리턴한다.
      if (!projectInfo) return res.status(404).json({ message: 'Not Found!' });

      /**
       *
       * [특정 프로젝트 조회]
       *
       */

      // 프로젝트에 조회수를 + 1 한다.
      const updateProject = await projectInfo.update(
        { views: projectInfo.views + 1 },
        { where: { id: projectId } }
      );

      // 특정 프로젝트를 리턴한다.
      return res.status(200).json({ projects: updateProject });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error! ' });
    }
  },
  patch: async (req, res) => {
    try {
      /**
       *
       * [유효성 검사]
       *
       */

      // 로그인 인증 검사
      const userInfo = await userAuthen(req, res);

      // 매개 변수가 숫자가 아니면 다음을 리턴한다.
      const { projectId } = req.params;
      if (isNaN(projectId)) {
        return res.status(400).json({ message: 'Bad Request!' });
      }

      // 프로젝트가 존재하지 않는 경우 다음을 리턴한다.
      const projectInfo = await project.findOne({ where: { id: projectId } });
      if (!projectInfo) {
        return res.status(404).json({ message: 'Not Found!' });
      }

      // 현재 회원이 프로젝트를 수정할 권한이 없는 경우 다음을 리턴한다.
      if (projectInfo.user_id !== userInfo.id && userInfo.role_id !== 1) {
        return res.status(403).json({ message: 'Not authorized!' });
      }

      // 현재 프로젝트가 "작성중"이 아닌경우 다음을 리턴한다. (수정 불가)
      if (projectInfo.status !== '작성중') {
        return res
          .status(403)
          .json({ message: 'This is not the project are "작성중"!' });
      }

      /**
       *
       * [프로젝트 수정]
       *
       */

      const {
        title,
        categoryName,
        description,
        term,
        goalAmount,
        background,
        progress,
        goals,
        budgetSynopsis,
        milestoneDescription,
        researcherWord
      } = req.body;

      // 카테고리 id 찾기
      let categoryInfo;
      if (categoryName) {
        categoryInfo = await category.findOne({
          where: { name: categoryName }
        });
      }

      // path 업데이트
      let path;
      if (title) {
        path = title
          .toLowerCase()
          .replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, ' ') // 특수문자 제거하기
          .replace(/^\s+|\s+$/gm, '') // 문자열의 시작과 끝에서 공백 자르기
          .replace(/\s+/g, '-'); // 공백을 하이픈으로 변환
        path = path + '-' + userInfo.name + '-' + userInfo.id;
      }

      // 프로젝트 정보를 업데이트한다.
      // body로 들어온 것은 body로 업데이트 한다.
      // 안들어 온경우 기존 정보가 있으면 유지하고 그것도 없으면 null이다.
      await project.update(
        {
          title: title ? title : projectInfo.title,
          path: path ? path : projectInfo.path,
          description: description
            ? description
            : projectInfo.description
            ? projectInfo.description
            : null,
          category_id: categoryName
            ? categoryInfo.id
            : projectInfo.category_id
            ? projectInfo.category_id
            : null,
          term: term
            ? Number(term)
            : projectInfo.term
            ? projectInfo.term
            : null,
          goal: goalAmount
            ? goalAmount
            : projectInfo.goal
            ? projectInfo.goal
            : null,
          project_background: background
            ? background
            : projectInfo.project_background
            ? projectInfo.project_background
            : null,
          project_progress: progress
            ? progress
            : projectInfo.project_progress
            ? projectInfo.project_progress
            : null,
          project_goals: goals
            ? goals
            : projectInfo.project_goals
            ? projectInfo.project_goals
            : null,
          budget_synopsis: budgetSynopsis
            ? budgetSynopsis
            : projectInfo.budget_synopsis
            ? projectInfo.budget_synopsis
            : null,
          milestone_description: milestoneDescription
            ? milestoneDescription
            : projectInfo.milestone_description
            ? projectInfo.milestone_description
            : null,
          researcher_word: researcherWord
            ? researcherWord
            : projectInfo.researcher_word
            ? projectInfo.researcher_word
            : null
        },
        { where: { id: projectInfo.id } }
      );

      // 업데이트한 프로젝트 정보를 조회한다.
      const newProjectInfo = await project.findOne({
        where: { id: projectId },
        include: [
          {
            model: category, // categories 테이블 조인
            attributes: ['name']
          },
          {
            model: user, // users 테이블 조인
            as: 'author',
            attributes: ['name', 'nickname', 'bio', 'profile_url']
          },
          {
            model: project_team, // project_teams 테이블 조인
            attributes: ['id', 'team_name', 'team_description', 'profile_url'],
            separate: true
          },
          {
            model: project_team_member, // project_team_members 테이블 조인
            attributes: ['id', 'name', 'bio'],
            separate: true
          },
          {
            model: budget_item, // budget_items 테이블 조인
            attributes: ['id', 'title', 'amount'],
            separate: true
          },
          {
            model: project_milestone, // project_milestones 테이블 조인
            attributes: ['id', 'title', 'goal_date'],
            separate: true
          }
        ]
      });

      // 업데이트한 프로젝트 정보를 반환한다.
      res.status(200).json({ projects: newProjectInfo });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  },
  delete: async (req, res) => {
    try {
      /**
       *
       * [유효성 검사]
       *
       */

      // 로그인 인증 검사
      const userInfo = await userAuthen(req, res);

      // 매개 변수가 숫자가 아니면 다음을 리턴한다.
      const { projectId } = req.params;
      if (isNaN(projectId)) {
        return res.status(400).json({ message: 'Bad Request!' });
      }

      // 프로젝트가 존재하지 않는 경우 다음을 리턴한다.
      const projectInfo = await project.findOne({ where: { id: projectId } });
      if (!projectInfo) {
        return res.status(404).json({ message: 'Not Found!' });
      }

      // 현재 회원이 프로젝트를 삭제할 권한이 없는경우 다음을 리턴한다.
      if (projectInfo.user_id !== userInfo.id && userInfo.role_id !== 1) {
        return res.status(403).json({ message: 'Not authorized!' });
      }

      // 현재 프로젝트가 "작성중"이 아닌경우 다음을 리턴한다. (삭제 불가능)
      if (projectInfo.status !== '작성중') {
        return res
          .status(403)
          .json({ message: 'This is not the project are "작성중"!' });
      }

      /**
       * [프로젝트 삭제]
       */

      // 프로젝트 팀과 연관된 팀원 레코드를 삭제한다.
      await project_team_member.destroy({
        where: { project_id: projectInfo.id }
      });

      // 프로젝트와 연관된 팀 레코드를 삭제한다.
      await project_team.destroy({ where: { project_id: projectInfo.id } });

      // 프로젝트와 연관된 예산 레코드를 삭제한다.
      await budget_item.destroy({ where: { project_id: projectInfo.id } });

      // 프로젝트와 연관된 계획 레코드를 삭제한다.
      await project_milestone.destroy({
        where: { project_id: projectInfo.id }
      });

      // 프로젝트와 연관된 태그 레코드를 삭제한다.
      await tag_project.destroy({ where: { project_id: projectInfo.id } });

      // 프로젝트를 삭제한다.
      await project.destroy({ where: { id: projectInfo.id } });

      // 삭제된 프로젝트 아이디를 반환한다.
      res.status(200).json({ id: projectInfo.id });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  }
};
