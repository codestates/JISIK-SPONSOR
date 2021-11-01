/*eslint-disable*/
import React from 'react';
import { Postcardimg, Star, Hashtag, Title, Text, User, Username, Ingbar, Money, Percent, Clock, Day } from './styled';

const Postcard = () => {
    return (
        <div>
            <Star>
                <Postcardimg>
                    <div></div>
                </Postcardimg>
            </Star>
            <Hashtag>
                <div></div>
            </Hashtag>
            <Title>
                <p>
                    AI와 원격 기술을 사용하여 실시간으
                </p>
                <p>
                    로 쥐가오리 개체를 식별할 수...
                </p>
            </Title>
            <Text>
                <p>이 프로젝트는 AI, 고해상도 카메라 및 기존 만</p>
                <p>타 행동 연구를 결합하여 프로그램을 테스트합</p>
                <p>니다.</p>
            </Text>
            <User>
                <Username>
                    <div>Kim coding</div>
                </Username>
            </User>
            <Ingbar>
                <div></div>
            </Ingbar>
            <Clock>
                <Money>
                    <div>3,000,000원</div>
                    <Percent>
                        <div>37%</div>
                    </Percent>
                </Money>
            </Clock>
            <Day>
                <div>30 days left</div>
            </Day>
        </div>
    );
}

export default Postcard;