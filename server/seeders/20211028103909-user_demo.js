'use strict';
require('dotenv').config();
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Password encryption
    const hash = await bcrypt.hash(process.env.ADMIN_UESRS_PASS, 12);

    return queryInterface.bulkInsert('users', [
      {
        name: '지식스폰서',
        email: process.env.ADMIN_USER_EMAIL,
        password: hash,
        nickname: '관리자',
        bio: '세상에 꼭 필요한 연구가 많은 지지를 받을 수 있도록 돕습니다.',
        role_id: 1,
        signup_method: '일반',
        email_verified: true,
        profile_url: '/uploads/users/profile/1/1636303118149-people1.png'
      },
      {
        name: '관리자 데모',
        email: 'admin_demo@gmail.com',
        password: hash,
        nickname: '관리자 데모',
        role_id: 2,
        signup_method: '일반',
        email_verified: true,
        profile_url: '/uploads/users/profile/2/1636303211320-people2.png'
      },
      {
        name: '김코딩',
        email: 'kimcoding@gmail.com',
        password: hash,
        nickname: '코난',
        role_id: 3,
        signup_method: '일반',
        email_verified: true,
        profile_url: '/uploads/users/profile/3/1636303251904-people3.png'
      },
      {
        name: '박해커',
        email: 'parkhacker@gmail.com',
        password: hash,
        nickname: '해커',
        role_id: 3,
        signup_method: '일반',
        email_verified: true,
        profile_url: '/uploads/users/profile/4/1636303289604-baksa.png'
      },
      {
        name: '박미소',
        email: 'misopark@naver.com',
        password: hash,
        nickname: '미소지기',
        bio: '서울대학교의 예술사와 건축사 대학원생입니다. 중세 수도원의 건축과 고고학을 공부하고 있으며 2012년 고려대학교에서 학사 학위를 받았고, 그곳에서 유럽사, 미술사, 그리고 고전학을 공부했습니다. 2011년에는 풍경 고고학에 대한 관심을 불러일으킨 사로닉 항구 고고학 연구 프로젝트에 참여했습니다. 또한 2013년에는 이탈리아 아브루초 지역의 아미테르눔 유적에서 라퀼라 대학과 함께 발굴을 진행하기도 했습니다. 주된 연구 관심사는 병원과 수도원 건물들이 중세 (물리적, 사회적) 수도원 풍경과 어떻게 관련이 있는지에 대한 내용입니다. 서울대학교의 S4 사회과학의 공간 구조 연구원으로서, 사람, 장소, 건물 및 사물을 능동적인 참여자로 포함하는 소셜 네트워크를 매핑하기 위해 GIS 프로그램을 사용하는 데 관심이 있습니다.',
        role_id: 3,
        signup_method: '일반',
        email_verified: true,
        profile_url: '/uploads/demo/user-01.png'
      },
      {
        name: '박철룡',
        email: 'cheolyong@naver.com',
        password: hash,
        nickname: '학생입니다',
        bio: '혹등고래를 연구하는 박사과정 학생입니다. 1994년 부터 세계 곳곳, 특히 남극대륙을 탐험하며 고래의 다양한 면모를 살피는 데 전념해 왔습니다. 지난 7년 동안 웹 플랫폼 Happywhale.com을 구축하여 전세계의 고래들을 추적해 왔습니다.',
        role_id: 3,
        signup_method: '일반',
        email_verified: true,
        profile_url: '/uploads/demo/user-02.png'
      },
      {
        name: '김신열',
        email: 'shinyeolkim@naver.com',
        password: hash,
        nickname: '신뢰와열정',
        bio: '확장된 공중 보건 감시를 위한 전염병에 대한 분자 진단 검사를 개발한 경험이 있는 신생 과학자입니다. Open Bioeconomy Lab과 함께 지역 효소 바이오제조를 통해 아프리카에 지속 가능한 바이오 경제를 만들 수 있는 방법에 관심을 두고 있습니다. 현재는 지역적으로 DNA 중합효소를 생산하고 그것을 사용하여 4가지 병원균을 단일 튜브 반응으로 다중화하는 연구를 진행하고 있습니다.',
        role_id: 3,
        signup_method: '일반',
        email_verified: true,
        profile_url: '/uploads/demo/user-03.png'
      },
      {
        name: '박진철',
        email: 'jincheolpark@naver.com',
        password: hash,
        nickname: '진실과철칙',
        bio: '펜실베니아 대학, 함부르크 대학, 볼로냐 대학에서 법학 및 경제학 석사 학위를 받았고, 연구를 천직으로 생각하며, 많은 저술을 위해 활발히 연구를 진행하고 있습니다. 지난 10년간 경제학적 관점에서 사회적 이슈를 분석하는 연구를 진행하였습니다. 이러한 연구는 오늘날 스포츠 정의에서 가장 중요하다고 믿고 있으며, IOC의 경영 결정에 광범위하게 영향을 미치고 있다고 생각합니다. 또 키르기스스탄의 비슈케크에 있는 실크로드 케임브리지 국제학교에서 경제학 및 경영학 교사를 지냈고, 태국 정부학교에서 원어민 영어 교사를 지냈으며, 한국외국어대학교에서 법과 경제학을 가르치기도 했습니다. 현재 미국에 있는 로스쿨 JD 프로그램에 입학 허가를 받았고 다가오는 2022년 가을에 미국으로 출국할 예정입니다.',
        role_id: 3,
        signup_method: '일반',
        email_verified: true,
        profile_url: '/uploads/demo/user-04.png'
      },
      {
        name: '하종찬',
        email: 'jongchanha@naver.com',
        password: hash,
        nickname: '종찬',
        bio: '옥스퍼드 대학교에서 경제학 박사과정 마지막 학기 학생으로, 참여자들이 분배적 선호를 가지고 있는 경제, 즉 공정성이나 시장 집중도에 관심을 갖는 경제에서의 시장 균형에 대해 꾸준히 연구해왔습니다. 또한 여러 개체에 대한 할당 메커니즘의 입찰 인센티브를 연구하기 위한 (가상) 랩 실험도 설계한 경험이 있습니다. 또 MD4SG 개발 헬스케어 워킹 그룹의 멤버입니다.',
        role_id: 3,
        signup_method: '일반',
        email_verified: true,
        profile_url: '/uploads/demo/user-05.png'
      },
      {
        name: '남수진',
        email: 'sujinnam@naver.com',
        password: hash,
        nickname: '수진',
        bio: 'Harvard Center for Health Decision Science의 박사 후 연구 및 교수입니다. 센터에서 저는 페루의 리마에서 HIV 환자들을 위한 DOT-HAART의 비용 효율성을 조사하고 있습니다. 또한 2013년부터 Universitas Andalas와 협력하여 인도네시아 West Sumatera에서 MDR-TB 진단 개선을 구현하고 있습니다. 현재 관심사는 비용 효과 분석을 통한 공공 정책 개선과 언론을 통한 정보 보급 촉진, 사회 경제적 약자를 위한 양질의 일차 진료에 대한 접근 개선입니다. HSPH 이전에, 저는 인도네시아 팡구라간의 시골 지역에 있는 지역 보건 센터에서 의사로 일했었습니다. 2012년 보건부 공무원으로 일하는 동안 인도네시아의 의료 시스템에 대해 더 깊이 이해하게 되었습니다.',
        role_id: 3,
        signup_method: '일반',
        email_verified: true,
        profile_url: '/uploads/demo/user-06.png'
      },
      {
        name: '최민국',
        email: 'minkukchoi@naver.com',
        password: hash,
        nickname: '민국',
        bio: '저는 해양 탐사, 해양 과학 및 지구 환경 문제에 대한 옹호자이자 창의적인 커뮤니케이터입니다. 저는 현재 한국연구재단의 프로그램인 LabX의 준 프로그램 책임자로, 대중과 과학을 연결하기 위한 창의적인 참여 프로그램을 개발하고 생산합니다. 또한 우리의 바다를 기념하고 수억 명에게 영감을 주는 세계 해양의 날을 위한 커뮤니티 참여 및 커뮤니케이션 전략을 이끌고 있습니다. LabX에 합류하기 전에 Google Underwater Street View와 Netflix 다큐멘터리 Chasing Coral을 제작한 팀과 협력하여 프로젝트를 관리하는 Ocean Agency에서 Program Associate로 일했습니다. 또한 전시, 커뮤니케이션 및 보존을 포함한 여러 부서를 지원하는 미국 자연사 박물관에서 일했습니다.',
        role_id: 3,
        signup_method: '일반',
        email_verified: true,
        profile_url: '/uploads/demo/user-07.png'
      },
      {
        name: '신미영',
        email: 'miyoungshin@naver.com',
        password: hash,
        nickname: '미영이랍니다',
        bio: '저는 로마의 경제와 서민들의 일상생활에 관심이 있는 고고학자입니다. 저는 레스터 대학에서 로마의 광산들과 관련된 노예들에 대해 대학원 과정을 밟았습니다. 저는 요르단, 폼페이, 루마니아, 영국, 텍사스, 아칸소 NW에서 고고학적 현장 연구에 많은 경험을 가지고 있습니다. 이탈리아에서 프로젝트를 진행한다는 제 좋은 친구 케이티로부터 전화를 받고 기뻤습니다. 이곳은 초창기 창건시기와 번화한 무역로를 따라 위치한 위치, 잘 보존된 유적이 매력적입니다.',
        role_id: 3,
        signup_method: '일반',
        email_verified: true,
        profile_url: '/uploads/demo/user-08.png'
      },
      {
        name: '조수아',
        email: 'sooahjo@gmail.com',
        password: hash,
        nickname: '워터리',
        bio: '저는 행동 분석을 전공하고 있는 연세대학교 일반대학원 심리학과 박사과정생입니다. 2015년 중앙대에서 심리학 학사 학위를 받고 졸업했습니다. 그 후 KAIST에 입학하여 응용 행동 분석에서 과학 석사 학위를 받았습니다. KAIST에서 공부하는 동안, 저는 자폐증과 관련된 장애를 가진 아이들을 가르치는 대전 어린이 센터에서 일했습니다. 두 기관 사이에서, 저는 다양한 임상 및 연구 경험을 얻었습니다. 저는 임상의로서 중증 행동을 평가하고 치료했고 연구원으로서 수요 탄력성 측정으로 곡선 아래 영역이라는 논문을 포함하여 인간 조작자와 기본적인 연구 준비에 대해 연구했습니다.',
        role_id: 3,
        signup_method: '일반',
        email_verified: true,
        profile_url: '/uploads/demo/user-09.png'
      },
      {
        name: '박현철',
        email: 'hyunchul@naver.com',
        password: hash,
        nickname: '현철',
        bio: "저는 행동 분석을 전공하고 있는 연세대학교 일반대학원 심리학과 박사과정생입니다. 2015년 중앙대에서 심리학 학사 학위를 받고 졸업했습니다. 그 후 KAIST에 입학하여 응용 행동 분석에서 과학 석사 학위를 받았습니다. KAIST에서 공부하는 동안, 저는 자폐증과 관련된 장애를 가진 아이들을 가르치는 대전 어린이 센터에서 일했습니다. 두 기관 사이에서, 저는 다양한 임상 및 연구 경험을 얻었습니다. 저는 임상의로서 중증 행동을 평가하고 치료했고 연구원으로서 '수요 탄력성 측정으로 곡선 아래 영역'이라는 논문을 포함하여 인간 조작자와 기본적인 연구 준비에 대해 연구했습니다.",
        role_id: 3,
        signup_method: '일반',
        email_verified: true,
        profile_url: '/uploads/demo/user-10.png'
      },
      {
        name: '정사랑',
        email: 'lovelove@naver.com',
        password: hash,
        nickname: '음악사랑',
        bio: '저는 포닥 연구원이자 피아니스트, 가수, 그리고 평생 음악을 사랑하는 사람입니다. 저는 저는 서강대학교에서 심리학과 피아노를 전공했고, 연세대학교에서 신경과학 석사와 박사 학위를 받았습니다.저는 항상 과학뿐만 아니라 음악에 대해서도 열정적이었고, 음악이 다른 자극이 할 수 있는 것과는 달리 뇌를 사로잡는다고 진심으로 믿고 있습니다. 인간은 음악에 대한 강한 연관성을 가지고 있습니다 - 음악은 기분을 북돋우거나 눈물을 흘리게 할 수 있습니다. 제 연구를 통해 저는 뇌 손상을 입은 사람들이 어떻게 음악에 영향을 받는지, 그리고 어떻게 음악의 힘을 활용하여 그들의 삶에 긍정적인 영향을 미칠 수 있는지를 밝혀내고 싶습니다.',
        role_id: 3,
        signup_method: '일반',
        email_verified: true,
        profile_url: '/uploads/demo/user-11.png'
      },
      {
        name: '전수찬',
        email: 'soochan3@naver.com',
        password: hash,
        nickname: '수찬짱짱',
        bio: '저는 반포고등학교의 학생으로 전세계 십대들의 수면 패턴을 발견하기를 바라는 연구 프로그램에 참여하고 있습니다. 제 연구의 목표는 학생들이 더 건강한 생활방식을 가질 수 있도록 십대들의 수면 부족을 줄일 수 있는 해결책을 가져오는 것입니다. ',
        role_id: 3,
        signup_method: '일반',
        email_verified: true,
        profile_url: '/uploads/demo/user-12.png'
      },
      {
        name: '김숙자',
        email: 'sookja1@naver.com',
        password: hash,
        nickname: '숙자야밥먹자',
        bio: '저는 대학시절부터 삶의 목적과 의미에 대한 질문에 관심을 가져왔습니다. 하지만 수년 동안 저는 그것들이 집중하기에는 너무 비현실적이라고 생각했습니다. 몇 년 전, 신뢰할 수 있는 한 대학에서 제가 고민해왔던 문제를 풀기위해 프로그램을 개설했다는 이야기를 전해듣고, 저는 즉시 이러한 질문들 중 몇 가지에 답하려고 노력할 기회를 보기 시작했습니다. 저는 새로운 길을 걷기 위해 보수가 좋은 직장을 떠났습니다. 저는 20년간의 "현실 세계"에서의 경험을 이 오랫동안 끓어오르는 질문들 중 몇 가지를 해결하는 데 사용하고 싶습니다.',
        role_id: 3,
        signup_method: '일반',
        email_verified: true,
        profile_url: '/uploads/demo/user-13.png'
      },
      {
        name: '박하늘',
        email: 'skypark@naver.com',
        password: hash,
        nickname: '하늘땅별땅',
        bio: '초코쿠키에 진심이고, 초콜릿을 사랑하는 초코쿠키 애호가입니다.',
        role_id: 3,
        signup_method: '일반',
        email_verified: true,
        profile_url: '/uploads/demo/user-14.png'
      },
      {
        name: '최승훈',
        email: 'seonghoonchoi@google.com',
        password: hash,
        nickname: '훈장님',
        bio: '안녕하세요! 저는 대학에서 벌의 생태와 보존을 연구하는 동물학 박사과정 지원자입니다. 저는 2014년에 꿀벌 군집 붕괴 장애에 대한 강연을 들으면서 처음으로 벌에 관심을 갖게 되었습니다. 대학 졸업 후, 저는 환경 독성학을 전문으로 하는 회사를 위해 꿀벌에 미치는 다른 화학 물질과 그 화학 물질들에 대한 연구를 계속했습니다. 벌에 대한 위협과 꽃가루 매개자로서의 사람들에 대한 중요성에 대해 배우면서, 저는 꽃가루 매개자 친구들이 직면한 다면적인 위협에 대처하기 위해서는 더 넓은 시각이 필요하다는 것을 알게 되었습니다. 이 프로젝트는 벌의 생태와 보존에 관한 논문의 일부가 될 것이며, 제가 박사 과정을 수료하는 데 기여할 것입니다.',
        role_id: 3,
        signup_method: '일반',
        email_verified: true,
        profile_url: '/uploads/demo/user-15.png'
      },
      {
        name: '김효진',
        email: 'hyojinkim@google.com',
        password: hash,
        nickname: '효녀',
        bio: '안녕하세요, 효진입니다. 저는 21살의 과학자이자 디자인, 윤리, 그리고 문화에 관한 작가입니다. 저는 또한 최근 대학에서 생물학 학위를 받은 졸업생입니다. 저는 피부색이 검은 다른 소비자들을 위한 해결책을 찾는 것에 가장 열정적입니다. 이것이 제 연구 철학의 핵심입니다. 연구 수준이 매우 낮기 때문입니다. 연구에 대한 저의 열정을 이끄는 것은 창의력에 대한 저의 재능에 비해 끊임없는 호기심입니다.',
        role_id: 3,
        signup_method: '일반',
        email_verified: true,
        profile_url: '/uploads/demo/user-16.png'
      },
      {
        name: '나반석',
        email: 'bansukna@google.com',
        password: hash,
        nickname: '나태',
        bio: '저는 세화고등학교 3학년입니다. 저는 또한 저 같은 학생들이 스스로 연구 실험을 할 수 있게 해주는 학교의 Research 과정에 있습니다. 프로그래밍은 저의 큰 관심사였고, 그것을 배울 수 있는 기회를 갖게 되어 감사합니다. 저는 인공지능과 기계 학습에도 관심이 있습니다. 그래서 이 프로젝트는 제가 즐기는 것들을 한데 모으고 현재의 기술의 발전을 더 잘 이해할 수 있는 기회입니다.',
        role_id: 3,
        signup_method: '일반',
        email_verified: true,
        profile_url: '/uploads/demo/user-17.png'
      },
      {
        name: '하상윤',
        email: 'sangyoonha@google.com',
        password: hash,
        nickname: '하통',
        bio: '저는 음향 엔지니어, 과학자, 발명가입니다. 저는 충북대학교에서 전자공학을 공부했고, 실험실에서 페브론 베타선 방출 장치와 전자 스핀 공명 기계로 일했습니다. 현재 저의 주된 관심사는 음향 치료를 뒷받침하는 메커니즘을 이해하고 이를 위한 응용프로그램을 개발하는 것입니다',
        role_id: 3,
        signup_method: '일반',
        email_verified: true,
        profile_url: '/uploads/demo/user-18.png'
      },
      {
        name: '최구종',
        email: 'koojongchoi@google.com',
        password: hash,
        nickname: '구구단',
        bio: '저는 음향 엔지니어, 과학자, 발명가입니다. 저는 충북대학교에서 전자공학을 공부했고, 실험실에서 페브론 베타선 방출 장치와 전자 스핀 공명 기계로 일했습니다. 현재 저의 주된 관심사는 음향 치료를 뒷받침하는 메커니즘을 이해하고 이를 위한 응용프로그램을 개발하는 것입니다',
        role_id: 3,
        signup_method: '일반',
        email_verified: true,
        profile_url: '/uploads/demo/user-19.png'
      },
      {
        name: '강수아',
        email: 'sooahkang@naver.com',
        password: hash,
        nickname: '수아',
        bio: '저는 GAPS 연구소의 소장이며, 이 연구소에서는 전 세계 인간의 적응에 대해 질문들을 하고 있습니다. 저는 지난 7년간 미국령 사모아에서 연구를 진행했고, 지난 3년간 발리 인도네시아에서 현장 학교를 공동 지휘했습니다.',
        role_id: 3,
        signup_method: '일반',
        email_verified: true,
        profile_url: '/uploads/demo/user-20.png'
      },
      {
        name: '나태웅',
        email: 'skqkstjr2@gmail.com',
        password: hash,
        role_id: 1,
        signup_method: '일반',
        email_verified: true
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
