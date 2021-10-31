const { project } = require('../../models');
const userAuthen = require('../../middlewares/authorized/userAuthen');

module.exports = {
  post: async (req, res) => {
    try {
      // 로그인 인증 검사
      const userInfo = await userAuthen(req, res);

      // 새로운 게시물의 URL을 생성한다.
      const { title } = await req.body;
      const path = title
        .toLowerCase()
        .replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, ' ') // 특수문자 제거하기
        .replace(/^\s+|\s+$/gm, '') // 문자열의 시작과 끝에서 공백 자르기
        .replace(/\s+/g, '-'); // 공백을 하이픈으로 변환

      console.log(path);

      // 새로운 게시물을 생성한다.
      const newProject = await project.create({
        title,
        path: path + '-' + userInfo.name + '-' + userInfo.id,
        user_id: userInfo.dataValues.id
      });

      // 새로 생성한 게시물의 아이디를 반환한다.
      res.status(201).json({ id: newProject.dataValues.id, newProject });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error!' });
    }
  }
};
