import React from 'react';
import {
  Container,
  Container2,
  Container3,
  Text,
  Text2,
  Bluestar1,
  Bluestar2,
  YellowLine,
  YellowLine2,
  StartProject,
  Button,
  YellowCircle,
  Question,
  Question1,
  Question3
} from './styled';
import { Link, Route } from 'react-router-dom';

const About = () => {
  return (
    <Route path="/about">
      <div>
        <Container>
          <div>
            <h1>잠재력 있는 연구와 잠재적인 지지자를 연결합니다.</h1>
            <Text>
              <p>국내 최초 연구지식 크라우드 펀딩 플랫폼,</p>
              <span style={{ color: '#7048E8' }}>지식스폰서</span>
              <span>를 소개합니다.</span>
            </Text>
          </div>
        </Container>

        <Question>
          <Bluestar1>
            <YellowLine>
              <Container2>
                <h2>1. 꼭 대학에 가야 연구할 수 있나요?</h2>
                <Text2>
                  <p>지식스폰서에서는 풍성한 지적호기심,타당한 연구가설,</p>
                  <p>그리고 하고자하는 의지만 있다면</p>
                  <p>누구나 나이,학력,경력과 무관하게</p>
                  <p>자신의 아이디어를 세상에 알리고 실현시킬 수 있어요.</p>
                </Text2>
              </Container2>
            </YellowLine>
          </Bluestar1>
        </Question>

        <Question1>
          <Bluestar2>
            <YellowCircle>
              <Container3>
                <h2>2. 간단하고 빠른 프로젝트 올리기</h2>
                <Text2>
                  <p>
                    지식스폰서는 `연구지식`에만 특화된 크라우드 펀딩 플랫폼으로,
                  </p>
                  <p>기존 서비스의 복잡한 절차와 번거로움을 덜어내고</p>
                  <p>자체적인 템플릿 개발을 통해</p>
                  <p>간단하고 빠르게 자신의 프로젝트를 올릴 수 있어요.</p>
                </Text2>
              </Container3>
            </YellowCircle>
          </Bluestar2>
        </Question1>

        <Question3>
          <Bluestar1>
            <YellowLine2>
              <Container2>
                <h2>3. 커피 한 잔 가격으로 프로젝트 참여 가능</h2>
                <Text2>
                  <p>지식스폰서에서는 커피 한 잔 가격만으로도</p>
                  <p>의미있고 흥미로운 프로젝트에 참여하고,</p>
                  <p>연구자와 교류하며 연구 결과를 받아볼 수 있어요.</p>
                </Text2>
              </Container2>
            </YellowLine2>
          </Bluestar1>
        </Question3>

        <StartProject>
          <div>
            <p>지금 지식스폰서를 통해 성공적으로 진행되고 있는</p>
            <p>프로젝트를 만나보세요!</p>
            <p>
              <Link to="/startproject">
                <Button>프로젝트 시작하기</Button>
              </Link>
            </p>
          </div>
        </StartProject>
      </div>
    </Route>
  );
};

export default About;
