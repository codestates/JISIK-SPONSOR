/*eslint-disable*/
import React from 'react';
import {
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
    Reviewtext3
} from './styled';
import { Link } from 'react-router-dom';

const Reviewbar = () => {
    return (
        <div>
            <Review>
                <div>서비스 이용 후기</div>
            </Review>

            <Reviewimg1>
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
            </Reviewimg1>

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
        </div>
    );
}

export default Reviewbar;