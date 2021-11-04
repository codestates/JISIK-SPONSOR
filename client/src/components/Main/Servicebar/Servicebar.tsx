/*eslint-disable*/
import React from 'react';
import {
    Servicetitle,
    Serviceimg,
    Serviceintro,
    Servicetext,
    Seemore1,
    Faqimg,
    Faqintro,
    Faqtext
} from './styled';
import { Link } from 'react-router-dom';

const Servicebar = () => {
    return (
        <div>
            <Servicetitle>
                <p>지식스폰서에 대해 더 궁금하신가요?</p>
                <p>아래 서비스 소개와 FAQ를 통해 더 알아가보세요.</p>
            </Servicetitle>

            <Serviceimg>
                <Faqimg></Faqimg>
            </Serviceimg>

            <Serviceintro>
                <div>서비스 소개</div>
                <Servicetext>
                    <p>지식 스폰서가 가진 미션과 가치,</p>
                    <p>그리고 핵심 기능들을 소개합니다.</p>
                </Servicetext>
                <Seemore1>
                    <div>See more</div>
                </Seemore1>

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
            </Serviceintro>
        </div>
    );
}

export default Servicebar;