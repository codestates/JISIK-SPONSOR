const { project, budget_item } = require('../../models');
const userAuthen = require('../../middlewares/authorized/userAuthen');

module.exports = {
  post: async (req, res) => {
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

      // 현재 회원이 프로젝트를 수정할 권한이 없는경우 다음을 리턴한다.
      if (userInfo.id !== projectInfo.user_id && userInfo.role_id !== 1) {
        return res.status(403).json({ message: 'Not authorized!' });
      }

      // 현재 프로젝트가 "작성중"이 아닌경우 다음을 리턴한다.
      if (projectInfo.status !== 'draft') {
        return res
          .status(403)
          .json({ message: 'This project status is not "draft" !' });
      }

      // 요청이 잘못된 경우는 다음을 리턴한다.
      const { title, amount } = req.body;
      if (!title || !amount) {
        return res.status(400).json({ message: 'Bad Request!' });
      }

      /**
       *
       * [신규 예산 항목 생성]
       *
       */

      // 새로운 예산 항목을 생성한다.
      const newBudget = await budget_item.create({
        project_id: projectId,
        title,
        amount
      });

      // 새로 생성한 예산 항목의 아이디를 반환한다.
      res.status(201).json({ id: newBudget.id });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
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
      const { projectId, budgetId } = req.params;
      if (isNaN(projectId) || isNaN(budgetId)) {
        return res.status(400).json({ message: 'Bad Request!' });
      }

      const projectInfo = await project.findOne({ where: { id: projectId } });
      const budgetInfo = await budget_item.findOne({ where: { id: budgetId } });

      // 프로젝트 또는 예산 항목이 존재하지 않는 경우 다음을 리턴한다.
      if (!projectInfo || !budgetInfo) {
        return res.status(404).json({ message: 'Not Found!' });
      }

      // 프로젝트와 예산 항목이 연관없는 경우 다음을 리턴한다.
      if (projectInfo.id !== budgetInfo.project_id) {
        return res.status(403).json({
          message: 'Bad Request! - Project and budget item are not connected.'
        });
      }

      // 현재 회원이 프로젝트를 수정할 권한이 없는경우 다음을 리턴한다.
      if (userInfo.id !== projectInfo.user_id && userInfo.role_id !== 1) {
        return res.status(403).json({ message: 'Not authorized!' });
      }

      // 현재 프로젝트가 "작성중"이 아닌경우 다음을 리턴한다.
      if (projectInfo.status !== 'draft') {
        return res
          .status(403)
          .json({ message: 'This project status is not "draft" !' });
      }

      /**
       *
       * [프로젝트 예산 항목 정보 수정]
       *
       */

      const { title, amount } = req.body;

      // 예산 항목 정보를 업데이트한다.
      await budget_item.update(
        {
          title: title ? title : budgetInfo.title ? budgetInfo.title : null,
          amount: amount ? amount : budgetInfo.amount ? budgetInfo.amount : null
        },
        { where: { id: budgetId } }
      );

      // 업데이트한 예산 항목 정보를 조회한다.
      const newBudgetInfo = await budget_item.findOne({
        where: { id: budgetId },
        attributes: ['id', 'title', 'amount']
      });

      // 업데이트한 예산 항목 정보를 반환한다.
      res.status(200).json({ budget_items: newBudgetInfo });
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
      const { projectId, budgetId } = req.params;
      if (isNaN(projectId) || isNaN(budgetId)) {
        return res.status(400).json({ message: 'Bad Request!' });
      }

      const projectInfo = await project.findOne({ where: { id: projectId } });
      const budgetInfo = await budget_item.findOne({ where: { id: budgetId } });

      // 프로젝트 또는 예산 항목이 존재하지 않는 경우 다음을 리턴한다.
      if (!projectInfo || !budgetInfo) {
        return res.status(404).json({ message: 'Not Found!' });
      }

      // 프로젝트와 예산 항목이 연관없는 경우 다음을 리턴한다.
      if (projectInfo.id !== budgetInfo.project_id) {
        return res.status(403).json({
          message: 'Bad Request! - Project and budget item are not connected.'
        });
      }

      // 현재 회원이 프로젝트를 수정할 권한이 없는경우 다음을 리턴한다.
      if (userInfo.id !== projectInfo.user_id && userInfo.role_id !== 1) {
        return res.status(403).json({ message: 'Not authorized!' });
      }

      // 현재 프로젝트가 "작성중"이 아닌경우 다음을 리턴한다.
      if (projectInfo.status !== 'draft') {
        return res
          .status(403)
          .json({ message: 'This project status is not "draft" !' });
      }

      /**
       *
       * [프로젝트 예산 항목 삭제]
       *
       */

      // 예산 항목 레코드를 삭제한다.
      await budget_item.destroy({ where: { id: budgetId } });

      // 삭제된 예산 항목 아이디를 반환한다.
      res.status(200).json({ id: budgetId });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  }
};
