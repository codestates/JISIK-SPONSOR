/*eslint-disable*/
import React from 'react';
import {
    Mainstartproject,
    Button,
    Button2
} from './styled';
import { Link } from 'react-router-dom';

const Startprojectbar = () => {
    return (
        <div>
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
    );
}

export default Startprojectbar;