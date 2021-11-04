/*eslint-disable*/
import { Section, Wrap, Title, ReviewWrap, Ul, Li } from './styled';
import kimimg from '../../../images/kimimg.png';
import naimg from '../../../images/naimg.png';
import jisikimg from '../../../images/jisikimg.png';

const Reviewbar = () => {
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
                김연구의 전구 연구는 전세계 어디에서도
                <br />볼 수 없는 기막힌 엄청난 연구이다.
              </p>
            </Li>
            <Li>
              <div>
                <img src={naimg} alt="박사 나박사 프로필" />
                <span>나박사</span>
                <small>박사</small>
              </div>
              <p>
                나박사 우주 연구는 전세계 어디에서도
                <br />볼 수 없는 기막힌 엄청난 연구이다.
              </p>
            </Li>
            <Li>
              <div>
                <img src={jisikimg} alt="지식스폰서 전지식 프로필" />
                <span>전지식</span>
                <small>지식스폰서</small>
              </div>
              <p>
                지식 스폰서로써 뿌듯하고
                <br />
                값지고 보람있다.
              </p>
            </Li>
          </Ul>
        </ReviewWrap>
      </Wrap>
    </Section>
  );
};

export default Reviewbar;
