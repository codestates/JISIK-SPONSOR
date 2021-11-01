const { project, project_team } = require('../../models');
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

      // 요청이 잘못된 경우는 다음을 리턴한다.
      const { title } = await req.body;
      if (!title) return res.status(400).json({ message: 'Bad Request!' });

      /**
       *
       * [신규 프로젝트 생성]
       *
       */

      // 새로운 프로젝트의 URL을 생성한다.
      const path = title
        .toLowerCase()
        .replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, ' ') // 특수문자 제거하기
        .replace(/^\s+|\s+$/gm, '') // 문자열의 시작과 끝에서 공백 자르기
        .replace(/\s+/g, '-'); // 공백을 하이픈으로 변환

      // 새로운 프로젝트를 생성한다.
      const newProject = await project.create({
        title,
        path: path + '-' + userInfo.name + '-' + userInfo.id,
        user_id: userInfo.id
      });

      // 새로운 프로젝트의 팀을 생성한다.
      await project_team.create({
        user_id: userInfo.id,
        project_id: newProject.id
      });

      // 새로 생성한 프로젝트의 아이디를 반환한다.
      res.status(201).json({ id: newProject.id });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error!' });
    }
  }
};
