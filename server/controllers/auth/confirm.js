module.exports = {
  email: async (req, res) => {
    try {
      const { key } = req.query;

      // 쿼리로 들어온 key를 가진 회원이 존재하지 않는 경우
      const findUser = await user.findOne({ where: { key_for_verify: key } });
      if (!findUser) return res.status(404).send('Not Found!');

      // 회원 정보를 업데이트 한다. (이메일 인증 확인)
      await user.update(
        { email_verified: true },
        { where: { key_for_verify: key } }
      );

      // 로그인 페이지로 리디렉션한다.
      const url = process.env.SERVER_ORIGIN + '/login';
      res.redirect(url);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  }
};
