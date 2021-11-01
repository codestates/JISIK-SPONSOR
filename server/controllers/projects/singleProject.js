const {
  user,
  project,
  category,
  project_team,
  project_team_member,
  budget_item,
  project_milestone,
  wishe,
  comment
} = require('../../models');
const userAuthen = require('../../middlewares/authorized/userAuthen');

module.exports = {
  get: async (req, res) => {
    try {
      let projectId = req.params.projectId;

      // 매개 변수가 숫자가 아니면 다음을 리턴한다.
      if (isNaN(projectId)) {
        return res.status(400).json({ message: 'Bad Request!' });
      }

      projectId = Number(projectId);
      // 단일 게시물을 조회한다.
      const projectInfo = await project.findOne({
        where: { id: projectId },
        include: [
          {
            model: category, // categories 테이블 조인
            attributes: ['name']
          },
          {
            model: user, // users 테이블 조인
            attributes: ['name', 'nickname', 'bio', 'profile_url']
          },
          {
            model: project_team, // project_teams 테이블 조인
            attributes: ['team_name', 'team_description', 'profile_url']
          },
          {
            model: project_team_member, // project_team_members 테이블 조인
            attributes: ['id', 'name', 'bio'],
            where: { project_id: projectId },
            separate: true
          },
          {
            model: budget_item, // budget_items 테이블 조인
            attributes: ['id', 'title', 'amount'],
            where: { project_id: projectId },
            separate: true
          },
          {
            model: project_milestone, // project_milestones 테이블 조인
            attributes: ['id', 'title', 'goal_date'],
            where: { project_id: projectId },
            separate: true
          }
        ]
      });

      // 존재하지 않는 경우 다음을 리턴한다.
      if (!projectInfo) return res.status(404).json({ message: 'Not Found!' });

      // 게시물의 조회수를 + 1 한다.
      const updateProject = await projectInfo.update(
        { views: projectInfo.dataValues.views + 1 },
        { where: { id: projectId } }
      );

      // 단일 게시물을 리턴한다.
      return res.status(200).json({ projects: updateProject });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error! ' });
    }
  },
  patch: async (req, res) => {
    try {
      // 로그인 인증 검사
      const userInfo = await userAuthen(req, res);

      let projectId = req.params.projectId;

      // 매개 변수가 숫자가 아니면 다음을 리턴한다.
      if (isNaN(projectId)) {
        return res.status(400).json({ message: 'Bad Request!' });
      }

      projectId = Number(projectId);
      const projectInfo = await project.findOne({ where: { id: projectId } });

      // 게시물이 존재하지 않는 경우 다음을 리턴한다.
      if (!projectInfo) {
        return res.status(404).json({ message: 'Not Found!' });
      }

      // 현재 회원이 게시물을 수정할 권한이 없는경우 다음을 리턴한다.
      if (userInfo.id !== projectInfo.user_id && userInfo.role !== 1) {
        return res.status(403).json({ message: 'Not authorized!' });
      }

      // 현재 프로젝트가 "작성중"이 아닌경우 다음을 리턴한다.
      if (projectInfo.status !== '작성중') {
        return res
          .status(403)
          .json({ message: 'This is not the project are "작성중"!' });
      }

      const {
        title,
        categoryName,
        description,
        term,
        goal,
        project_background,
        project_progress,
        project_goals,
        budget_synopsis,
        milestone_description,
        researcher_word
      } = req.body;

      // 카테고리 id 찾기
      const categoryInfo = await category.findOnd({
        where: { name: categoryName }
      });

      // 게시물 정보를 업데이트한다.
      await project.update(
        {
          title: title !== null ? title : projectInfo.title,
          description:
            description !== null ? description : projectInfo.description,
          category_id:
            categoryName !== null ? categoryInfo.id : projectInfo.category_id,
          term: term !== null ? term : projectInfo.term,
          goal: goal !== null ? goal : projectInfo.goal,
          project_background:
            project_background !== null
              ? project_background
              : projectInfo.project_background,
          project_progress:
            project_progress !== null
              ? project_progress
              : projectInfo.project_progress,
          project_goals:
            project_goals !== null ? project_goals : projectInfo.project_goals,
          budget_synopsis:
            budget_synopsis !== null
              ? budget_synopsis
              : projectInfo.budget_synopsis,
          milestone_description:
            milestone_description !== null
              ? milestone_description
              : projectInfo.milestone_description,
          researcher_word:
            researcher_word !== null
              ? researcher_word
              : projectInfo.researcher_word
        },
        { where: { id: projectInfo.id } }
      );

      // 업데이트한 게시물 정보를 조회한다.
      const newProjectInfo = await project.findOne({
        where: { id: projectId },
        include: [
          {
            model: category, // categories 테이블 조인
            attributes: ['name']
          },
          {
            model: user, // users 테이블 조인
            attributes: ['name', 'nickname', 'bio', 'profile_url']
          },
          {
            model: project_team, // project_teams 테이블 조인
            attributes: ['team_name', 'team_description', 'profile_url']
          },
          {
            model: project_team_member, // project_team_members 테이블 조인
            attributes: ['id', 'name', 'bio'],
            where: { project_id: projectId },
            separate: true
          },
          {
            model: budget_item, // budget_items 테이블 조인
            attributes: ['id', 'title', 'amount'],
            where: { project_id: projectId },
            separate: true
          },
          {
            model: project_milestone, // project_milestones 테이블 조인
            attributes: ['id', 'title', 'goal_date'],
            where: { project_id: projectId },
            separate: true
          }
        ]
      });

      // 업데이트한 게시물 정보를 반환한다.
      res.status(200).json({ projects: newProjectInfo });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  },
  delete: async (req, res) => {
    try {
      // 로그인 인증 검사
      const userInfo = await userAuthen(req, res);

      let projectId = req.params.projectId;

      // 매개 변수가 숫자가 아니면 다음을 리턴한다.
      if (isNaN(projectId)) {
        return res.status(400).json({ message: 'Bad Request!' });
      }

      projectId = Number(projectId);
      const projectInfo = await project.findOne({ where: { id: projectId } });

      // 게시물이 존재하지 않는 경우 다음을 리턴한다.
      if (!projectInfo) {
        return res.status(404).json({ message: 'Not Found!' });
      }

      // 현재 유저가 게시물을 삭제할 권한이 없는경우 다음을 리턴한다.
      if (userInfo.id !== projectInfo.user_id && userInfo.role !== 1) {
        return res.status(403).json({ message: 'Not authorized!' });
      }

      // 게시물과 연관된 좋아요 레코드를 삭제한다.
      await wishe.destroy({ where: { project_id: projectInfo.id } });

      // 게시물과 연관된 댓글 레코드를 삭제한다.
      await comment.destroy({ where: { project_id: projectInfo.id } });

      // 게시물 삭제한다.
      await project.destroy({ where: { id: projectInfo.id } });

      // 삭제된 게시물 아이디를 반환한다.
      res.status(200).json({ id: projectInfo.dataValues.id });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  }
};
