const { user } = require('../../models');

module.exports = {
  get: async (req, res) => {
    try {
      // 요청이 잘못된 경우
      const { userId } = req.params;
      if (isNaN(userId)) {
        return res.status(400).json({ message: 'Bad Request!' });
      }

      // 회원 공개 프로필 정보를 조회한다.
      const userProfile = await user.findOne({
        where: { id: userId },
        attributes: [
          'id',
          'name',
          'nickname',
          'bio',
          'profile_url',
          'created_at'
        ]
      });

      // 회원인 존재하지 않는 경우
      if (!userProfile) return res.status(404).json({ message: 'Not Found!' });

      // 회원 정보를 반환한다.
      res.status(200).json({ userProfile });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  }
};
