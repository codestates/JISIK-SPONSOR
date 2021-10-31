const { project, category, user } = require('../../models');
const { Op } = require('sequelize');

module.exports = {
  get: async (req, res) => {
    try {
      let { author, categoryName, offset, limit, order, sort, search } =
        req.query;

      if (categoryName === '전체') category = null;

      // 정렬 : 기본 값은 id 기준 내림차순이다.
      if (sort) sort = sort.toUpperCase();
      if (sort !== 'DESC' && sort !== 'ASC') sort = 'DESC';
      if (order === 'balance' || order === 'end_date') sort = 'ASC';
      if (
        order !== 'views' && // 조회순
        order !== 'wishes' && // 인기순
        order !== 'comments' && // 댓글순
        order !== 'pledged' && // 최다후원금순
        order !== 'investors' && // 최다후원인순
        order !== 'remainder' && // 성공임박순
        order !== 'end_date' // 마감임박순
      ) {
        order = null;
      }

      // 페이지네이션 : limit 의 기본 조회 값은 9 이다.
      if (isNaN(limit)) limit = 9;
      else {
        if (limit < 1) limit = 1;
        else limit = Number(limit);
      }

      const total = await project.count();
      const lastPage = Math.ceil(total / limit);

      // 페이지네이션 : offset 은 문자, 음수 조회 시 최소값으로, 페이지 범위 초과 조회 시 최대값으로 적용된다.
      if (isNaN(offset) || Number(offset) < 1) offset = 1;
      else if (Number(offset) > lastPage) offset = lastPage;
      else offset = Number(offset);

      // 모든 게시물 조회한다.
      const projects = await project.findAndCountAll({
        where: {
          [Op.not]: [{ status: '작성중' }],
          [Op.and]: [
            search
              ? {
                  [Op.or]: [
                    { title: { [Op.like]: '%' + search + '%' } },
                    { description: { [Op.like]: '%' + search + '%' } },
                    { project_background: { [Op.like]: '%' + search + '%' } }
                  ]
                }
              : null
          ]
        },
        include: [
          {
            model: category, // categories 테이블 조인
            attributes: ['name'],
            where: categoryName ? { name: categoryName } : {}
          },
          {
            model: user, // users 테이블 조인
            attributes: ['name', 'nickname', 'bio', 'profile_url'],
            where: {
              [Op.and]: [
                author ? { id: { [Op.like]: '%' + author + '%' } } : null
              ]
            }
          }
        ],
        order: [order ? [order, sort] : ['id', sort]],
        offset: (offset - 1) * limit,
        limit: limit
      });

      // 모든 게시물을 반환한다.
      return res.status(200).json({
        posts: { count: projects.count, page: offset, rows: projects.rows }
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  }
};
