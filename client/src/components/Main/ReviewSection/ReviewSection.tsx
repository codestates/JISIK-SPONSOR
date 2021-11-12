/*eslint-disable*/
import { Section, Wrap, Title, ReviewWrap, Ul, Li } from './styled';
import kimimg from '../../../images/kimimg.png';
import naimg from '../../../images/naimg.png';
import jisikimg from '../../../images/jisikimg.png';

const ReviewSection = () => {
  return (
    <Section>
      <Wrap>
        <Title>서비스 이용 후기</Title>
        <ReviewWrap>
          <Ul>
            <Li>
              <div>
                <img src={kimimg} alt="과학자 김연구 프로필" />
                <span>김연구</span>
                <small>과학자</small>
              </div>
              <p>
                "지식스폰서를 통해 제가 꿈꾸던 연구를 실현할 수 있게 되었습니다.
                지식스폰서가 많은 신진연구자들이 자신이 원하는 연구를 독립적으로
                할 수 있도록 도와줄 수 있는 좋은 통로가 되기를 기대합니다."
              </p>
            </Li>
            <Li>
              <div>
                <img src={naimg} alt="박사 나박사 프로필" />
                <span>나박사</span>
                <small>연구원</small>
              </div>
              <p>
                "지식스폰서를 통해 연구원을 통해 충분하게 충당하지 못했던
                연구비를 충족시킬 수 있었고, 성공적으로 실험을 완수했습니다.
                정말 감사드립니다."
              </p>
            </Li>
            <Li>
              <div>
                <img src={jisikimg} alt="지식스폰서 전지식 프로필" />
                <span>전지식</span>
                <small>지식스폰서</small>
              </div>
              <p>
                "우연한 기회로 지식스폰서에 대해 알게되었고, 제가 평소 관심있던
                분야의 연구에 참여할 수 있는 기회를 얻을 수 있어서
                즐거웠습니다."
              </p>
            </Li>
          </Ul>
        </ReviewWrap>
      </Wrap>
    </Section>
  );
};

export default ReviewSection;
