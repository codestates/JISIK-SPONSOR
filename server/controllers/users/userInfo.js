const { user } = require('../../models');

module.exports = {
  get: async (req, res) => {
    try {
      const { userId } = req.params;

      // 요청이 잘못된 경우
      if (isNaN(userId) === true) {
        return res.status(400).json({ message: 'Bad Request!' });
      }

      const userInfo = await user.findOne({ where: { id: userId } });

      // 존재하지 않는 경우
      if (!userInfo) {
        return res.status(404).json({ message: 'Not Found!' });
      }

      // 공개 프로필 외 회원의 정보는 삭제한다.
      delete userInfo.dataValues.email;
      delete userInfo.dataValues.mobile;
      delete userInfo.dataValues.password;
      delete userInfo.dataValues.role_id;
      delete userInfo.dataValues.signup_method;
      delete userInfo.dataValues.projects_supported;
      delete userInfo.dataValues.total_amount;
      delete userInfo.dataValues.email_verified;
      delete userInfo.dataValues.key_for_verify;
      delete userInfo.dataValues.updated_at;

      // 회원 정보를 반환한다.
      res.status(200).json({ userInfo });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  }
};
