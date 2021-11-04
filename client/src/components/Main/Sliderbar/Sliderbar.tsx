/*eslint-disable*/
import React from 'react';
import {
    Slider1,
    SliderText1,
    SliderText2,
    SliderText3,
    SliderText4,
    Dot,
    MainSliderimg,
    SliderButton1,
    SliderButton2,
    LeftSliderButton,
    RightSliderButton
} from './styled';
import { Link } from 'react-router-dom';

const Sliderbar = () => {
    return (
        <div>
            <LeftSliderButton>
                <RightSliderButton>
                    <MainSliderimg>
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
                    </MainSliderimg>
                </RightSliderButton>
            </LeftSliderButton>
        </div>
    );
}

export default Sliderbar;