const {
  user,
  project,
  category,
  wish,
  project_sponsor
} = require('../../models');
const { Op } = require('sequelize');
const userAuthen = require('../../middlewares/authorized/userAuthen');

module.exports = {
  getAll: async (req, res) => {
    try {
      /**
       *
       * [초기화 & 값 적용]
       *
       */

      let { author, categoryName, status, offset, limit, order, sort, search } =
        req.query;

      // 카테고리 : 기본 값은 없다.
      if (categoryName === '전체') categoryName = null;

      // 상태 : 기본 값은 없다.
      if (
        status !== 'draft' && // 작성중 (테스트용)
        status !== 'submitted' && // 제출됨 (테스트용)
        status !== 'approved' && // 승인됨 (테스트용)
        status !== 'inprogress' && // 진행중
        status !== 'achieved' && // 성사됨
        status !== 'canceled' // 취소됨
      ) {
        status = null;
      }

      // 정렬 : 기본 값은 id 기준 내림차순이다.
      if (sort) sort = sort.toUpperCase();
      if (sort !== 'DESC' && sort !== 'ASC') sort = 'DESC';
      if (order === 'remainder' || order === 'end_date') sort = 'ASC';
      if (
        order !== 'views' && // 조회순
        order !== 'wishes' && // 인기순
        order !== 'comments' && // 댓글순
        order !== 'pledged' && // 최다후원금순
        order !== 'sponsors' && // 최다후원인순
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

      /**
       *
       * [모든 프로젝트 조회]
       *
       */

      // 모든 프로젝트를 조회한다.
      const projects = await project.findAndCountAll({
        where: {
          // query로 status가 들어오면 해당 not 연산자는 사용 X, 기본은 '승인됨, 진행중, 성공함'인 프로젝트만 출력함.
          [Op.not]: [
            status || author
              ? { status: null }
              : {
                  status: ['draft', 'submitted', 'canceled']
                }
          ],
          [Op.and]: [
            status ? { status } : null,
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
            as: 'author',
            attributes: ['name', 'nickname', 'bio', 'profile_url'],
            where: author ? { id: Number(author) } : null
          }
        ],
        order: [order ? [order, sort] : ['id', sort]],
        offset: (offset - 1) * limit,
        limit: limit
      });

      // 모든 프로젝트를 반환한다.
      return res.status(200).json({
        projects: { count: projects.count, page: offset, rows: projects.rows }
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  },
  userWishes: async (req, res) => {
    try {
      /**
       *
       * [유효성 검사]
       *
       */

      // 로그인 인증 검사
      const userInfo = await userAuthen(req, res);

      /**
       *
       * [초기화 & 값 적용]
       *
       */

      let { offset, limit } = req.query;

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

      /**
       *
       * [모든 프로젝트 조회]
       *
       */

      // 모든 프로젝트를 조회한다.
      const projects = await wish.findAndCountAll({
        where: { user_id: userInfo.id },
        include: [
          {
            model: project, // projects 테이블 조인
            order: [['id', 'DESC']],
            include: [
              {
                model: category, // categories 테이블 조인
                attributes: ['name']
              },
              {
                model: user, // users 테이블 조인
                as: 'author',
                attributes: ['name', 'nickname', 'bio', 'profile_url']
              }
            ]
          }
        ],
        offset: (offset - 1) * limit,
        limit: limit
      });

      const rows = projects.rows.map((el) => {
        return el.project;
      });

      // 모든 프로젝트를 반환한다.
      return res.status(200).json({
        projects: { count: projects.count, page: offset, rows }
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  },
  userSpons: async (req, res) => {
    try {
      /**
       *
       * [유효성 검사]
       *
       */

      // 로그인 인증 검사
      const userInfo = await userAuthen(req, res);

      /**
       *
       * [초기화 & 값 적용]
       *
       */

      let { offset, limit } = req.query;

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

      /**
       *
       * [모든 프로젝트 조회]
       *
       */

      // 모든 프로젝트를 조회한다.
      const projects = await project_sponsor.findAndCountAll({
        where: { user_id: userInfo.id },
        include: [
          {
            model: project, // projects 테이블 조인
            order: [['id', 'DESC']],
            include: [
              {
                model: category, // categories 테이블 조인
                attributes: ['name']
              },
              {
                model: user, // users 테이블 조인
                as: 'author',
                attributes: ['name', 'nickname', 'bio', 'profile_url']
              }
            ]
          }
        ],
        offset: (offset - 1) * limit,
        limit: limit
      });

      const rows = projects.rows.map((el) => {
        return el.project;
      });

      // 모든 프로젝트를 반환한다.
      return res.status(200).json({
        projects: { count: projects.count, page: offset, rows }
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  }
};
