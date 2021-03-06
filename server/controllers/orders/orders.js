const { project, order } = require('../../models');
const userAuthen = require('../../middlewares/authorized/userAuthen');

module.exports = {
  get: async (req, res) => {
    try {
      /**
       *
       * [유효성 검사]
       *
       */

      // 로그인 인증 검사
      const userInfo = await userAuthen(req, res);

      // 매개 변수가 숫자가 아니면 다음을 리턴한다.
      const { userId } = req.params;
      if (isNaN(userId)) {
        return res.status(400).json({ message: 'Bad Request!' });
      }

      // 현재 회원이 조회할 권한이 없는경우 다음을 리턴한다.
      if (userInfo.id !== Number(userId) && userInfo.role_id !== 1) {
        return res.status(403).json({ message: 'Not authorized!' });
      }

      /**
       *
       * [회원의 모든 주문 조회]
       *
       */

      // 모든 주문을 조회한다.
      const allOrders = await order.findAndCountAll({
        where: { user_id: userId },
        order: [['id', 'DESC']]
      });

      // 모든 주문을 반환한다.
      return res.status(200).json({ orders: allOrders });
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: 'Server Error' });
    }
  },
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
      const { projectId, projectTitle, amount, buyerTel } = req.body;
      if (!projectId || !projectTitle || !amount || !buyerTel) {
        return res.status(400).json({ message: 'Bad Request!' });
      }

      // 최소 금액 보다 적은 경우 다음을 리턴한다.
      if (Number(amount) < 1000) {
        return res.status(400).json({ message: 'Bad Request!' });
      }

      // 프로젝트가 존재하지 않는 경우 다음을 리턴한다.
      const projectInfo = await project.findOne({ where: { id: projectId } });
      if (!projectInfo) return res.status(404).json({ message: 'Not Found!' });

      // 현재 프로젝트가 "진행중"이 아닌경우 다음을 리턴한다.
      if (projectInfo.status !== 'inprogress') {
        return res.status(403).json({
          message: 'This project status is not "inprogress" !'
        });
      }

      /**
       *
       * [주문 생성]
       *
       */

      // PG 결제 창 API를 호출하기 전 먼저 서버에서 데이터베이스에 주문 레코드를 생성한다.
      // 결제 프로세스 완료 후 해당 주문번호를 서버에서 조회하여 결제 위변조 여부를 검증하는데 필요하다.

      // 고유한 주문번호를 생성한다.
      const merchantUid = 'OID' + Date.now() + '-' + projectId;

      // 주문을 생성한다.
      const newOrder = await order.create({
        user_id: userInfo.id, // 사용자 ID
        project_id: projectId, // 프로젝트 ID
        merchant_uid: merchantUid, // 주문 번호 (고유)
        name: projectTitle, // 주문 명
        amount: Number(amount), // 주문 금액
        buyer_name: userInfo.name, // 주문자 명
        buyer_tel: buyerTel, // 주문자 연락처
        buyer_email: userInfo.email // 주문자 이메일
      });

      // 생성된 주문 번호를 리턴한다.
      res.status(201).json({ order: newOrder });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  },
  stop: async (req, res) => {
    try {
      /**
       *
       * [유효성 검사]
       *
       */

      // 로그인 인증 검사
      const userInfo = await userAuthen(req, res);

      // 요청이 잘못된 경우는 다음을 리턴한다.
      const { imp_uid, merchant_uid } = req.body;
      if (!imp_uid || !merchant_uid) {
        return res.status(400).json({ message: 'Bad Request!' });
      }

      // 주문이 존재하지 않는 경우 다음을 리턴한다.
      const orderInfo = await order.findOne({ where: { merchant_uid } });
      if (!orderInfo) return res.status(404).json({ message: 'Not Found!' });

      // 현재 회원이 프로젝트를 수정할 권한이 없는경우 다음을 리턴한다.
      if (userInfo.role_id !== 1) {
        if (userInfo.id !== orderInfo.user_id) {
          return res.status(403).json({ message: 'Not authorized!' });
        }
      }

      /**
       *
       * [주문 취소]
       *
       */

      await orderInfo.update(
        { imp_uid, status: 'stop' },
        { where: { merchant_uid } }
      );

      // 변경된 주문 내역을 리턴한다.
      res.status(200).json({ orderInfo });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  }
};
