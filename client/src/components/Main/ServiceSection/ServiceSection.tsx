/*eslint-disable*/
import {
  Section,
  Wrap,
  Title,
  CardWrap,
  Card,
  ImageWrap,
  InfoWrap
} from './styled';
import serviceimg from '../../../images/serviceimg.png';
import faqimg from '../../../images/faqimg.png';

const ServiceSection = () => {
  return (
    <Section>
      <Wrap>
        <Title>
          지식스폰서에 대해 더{' '}
          <span>
            <i>궁금</i>
          </span>
          하신가요?
          <br />
          아래 서비스 소개와 FAQ를 통해 더 알아가보세요.
        </Title>
        <CardWrap>
          <Card to="/about">
            <ImageWrap>
              <img src={serviceimg} alt="서비스 소개 이미지" />
            </ImageWrap>
            <InfoWrap>
              <h3>서비스 소개</h3>
              <p>
                지식 스폰서가 가진 미션과 가치,
                <br />
                그리고 핵심 기능들을 소개합니다.
              </p>
              <span>See more</span>
            </InfoWrap>
          </Card>
          <Card to="/">
            <ImageWrap>
              <img src={faqimg} alt="자주물어보는 질문 이미지" />
            </ImageWrap>
            <InfoWrap>
              <h3>FAQ - 자주물어보는 질문</h3>
              <p>
                지식 스폰서를 방문하시는 분들이
                <br />
                자주하시는 질문들을 모아 답변드린 내용입니다.
              </p>
              <span>See more</span>
            </InfoWrap>
          </Card>
        </CardWrap>
      </Wrap>
    </Section>
  );
};

export default ServiceSection;
