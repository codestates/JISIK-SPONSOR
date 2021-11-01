import React from 'react';
import {
  Slider1,
  SliderText1,
  SliderText2,
  SliderText3,
  SliderText4,
  Dot,
  MainSlider1,
  SliderButton1,
  SliderButton2,
  LeftSliderButton,
  RightSliderButton,
  Flower,
  CategoryLine,
  Humanities,
  Social,
  Natural,
  Engineering,
  Medicine,
  Agricultural,
  Artistry,
  Combination,
  IngProject,
  IngProjectButton,
  Servicetitle,
  Serviceimg,
  Serviceintro,
  Servicetext,
  Seemore1,
  Faqimg,
  Faqintro,
  Faqtext,
  Endproject,
  Review,
  Reviewimg1,
  Reviewer1,
  Reviewerjob,
  Reviewtext,
  Reviewimg2,
  Reviewer2,
  Reviewerjob2,
  Reviewtext2,
  Reviewimg3,
  Reviewer3,
  Reviewerjob3,
  Reviewtext3,
  Mainstartproject,
  Button,
  Button2
} from './styled';
import { Link, Route } from 'react-router-dom';
import Postcard from '../../components/Main/Postcard/Postcard';

const Main = () => {
  return (
    <Route exact path="/">
      <div>
        <MainSlider1>
          <LeftSliderButton>
            <RightSliderButton>
              <Slider1>
                <SliderText1>
                  <div>Welcome to</div>
                </SliderText1>
                <SliderText2>
                  <h1>세상에 꼭 필요한 연구를 위한</h1>
                  <h1>크라우드 펀딩 플랫폼</h1>
                </SliderText2>
                <Dot>
                  <SliderText3>
                    <h1>지식스폰서</h1>
                  </SliderText3>
                </Dot>
                <SliderText4>
                  <p>국내 최초 연구지식 특화 크라우드 펀딩 플랫폼,</p>
                  <p>지식스폰서에 오신 여러분 환영합니다.</p>
                </SliderText4>
                <Link to="/startproject">
                  <SliderButton1>
                    <div>프로젝트 시작하기</div>
                  </SliderButton1>
                </Link>
                <SliderButton2>
                  <div>모든 프로젝트 보기</div>
                </SliderButton2>
              </Slider1>
            </RightSliderButton>
          </LeftSliderButton>
        </MainSlider1>

        <Humanities>
          <Social>
            <Natural>
              <Engineering>
                <Medicine>
                  <Agricultural>
                    <Artistry>
                      <Combination>
                        <Flower>
                          <ul>
                            <CategoryLine>
                              <li>
                                <a>인문학</a>
                              </li>
                              <li>
                                <a>사회과학</a>
                              </li>
                              <li>
                                <a>자연과학</a>
                              </li>
                              <li>
                                <a>공학</a>
                              </li>
                              <li>
                                <a>의약학</a>
                              </li>
                              <li>
                                <a>농수해양학</a>
                              </li>
                              <li>
                                <a>예술체육학</a>
                              </li>
                              <li>
                                <a>복합학</a>
                              </li>
                            </CategoryLine>
                          </ul>
                        </Flower>
                      </Combination>
                    </Artistry>
                  </Agricultural>
                </Medicine>
              </Engineering>
            </Natural>
          </Social>
        </Humanities>

        <IngProject>
          <div>진행중인 프로젝트</div>
          <IngProjectButton>
            <div>모두 보기</div>
          </IngProjectButton>
        </IngProject>

        <Postcard />

        <Servicetitle>
          <p>지식스폰서에 대해 더 궁금하신가요?</p>
          <p>아래 서비스 소개와 FAQ를 통해 더 알아가보세요.</p>
        </Servicetitle>

        <Serviceimg></Serviceimg>

        <Serviceintro>
          <div>서비스 소개</div>
          <Servicetext>
            <p>지식 스폰서가 가진 미션과 가치,</p>
            <p>그리고 핵심 기능들을 소개합니다.</p>
          </Servicetext>
          <Seemore1>
            <div>See more</div>
          </Seemore1>
        </Serviceintro>

        <Faqimg></Faqimg>
        <Faqintro>
          <div>FAQ - 자주 물어보는 질문</div>
          <Faqtext>
            <p>지식 스폰서를 방문하시는 분들이</p>
            <p>자주하시는 질문들을 모아 답변드린 내용입니다.</p>
          </Faqtext>
          <Seemore1>
            <div>See more</div>
          </Seemore1>
        </Faqintro>

        <Endproject>
          <div>성사된 프로젝트</div>
          <IngProjectButton>
            <div>모두 보기</div>
          </IngProjectButton>
        </Endproject>

        <Postcard />

        <Review>
          <div>서비스 이용 후기</div>
        </Review>

        <Reviewimg1></Reviewimg1>

        <Reviewer1>
          <div>김연구</div>
          <Reviewerjob>
            <div>과학자</div>
          </Reviewerjob>
        </Reviewer1>

        <Reviewtext>
          <p>김연구의 전구 연구는 전세계 어디에서도</p>
          <p>볼 수 없는 기막힌 엄청난 연구이다.</p>
        </Reviewtext>

        <Reviewimg2></Reviewimg2>

        <Reviewer2>
          <div>나박사</div>
          <Reviewerjob2>
            <div>박사</div>
          </Reviewerjob2>
        </Reviewer2>

        <Reviewtext2>
          <p>나박사 우주 연구는 전세계 어디에서도</p>
          <p>볼 수 없는 기막힌 엄청난 연구이다.</p>
        </Reviewtext2>

        <Reviewimg3></Reviewimg3>

        <Reviewer3>
          <div>전지식</div>
          <Reviewerjob3>
            <div>지식 스폰서</div>
          </Reviewerjob3>
        </Reviewer3>

        <Reviewtext3>
          <p>지식 스폰서로써 뿌듯하고</p>
          <p>값지고 보람있다.</p>
        </Reviewtext3>

        <Mainstartproject>
          <div>
            <div>Ready to start your project?</div>
            <p>
              <Link to="/startproject">
                <Button>프로젝트 시작하기</Button>
                <Button2>모든 프로젝트 보기</Button2>
              </Link>
            </p>
          </div>
        </Mainstartproject>
      </div>
    </Route>
  );
};

export default Main;
