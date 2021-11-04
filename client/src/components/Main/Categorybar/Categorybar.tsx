/*eslint-disable*/
import React from 'react';
import {
    Flower,
    CategoryLine
} from './styled';
import humanities from '../../../images/humanities.png';
import social from '../../../images/social.png';
import natural from '../../../images/natural.png';
import engineering from '../../../images/engineering.png';
import medicine from '../../../images/medicine.png';
import agricultural from '../../../images/agricultural.png';
import artistry from '../../../images/artistry.png';
import combination from '../../../images/combination.png';

const Categorybar = () => {
    return (
        <div>
            <Flower>
                <ul>
                    <CategoryLine>
                        <li>
                            <img src={humanities} width='20' height='20' />
                            <a>인문학</a>
                        </li>
                        <li>
                            <img src={social} width='20' height='20' />
                            <a>사회과학</a>
                        </li>
                        <li>
                            <img src={natural} width='20' height='20' />
                            <a>자연과학</a>
                        </li>
                        <li>
                            <img src={engineering} width='20' height='20' />
                            <a>공학</a>
                        </li>
                        <li>
                            <img src={medicine} width='20' height='20' />
                            <a>의약학</a>
                        </li>
                        <li>
                            <img src={agricultural} width='20' height='20' />
                            <a>농수해양학</a>
                        </li>
                        <li>
                            <img src={artistry} width='20' height='20' />
                            <a>예술체육학</a>
                        </li>
                        <li>
                            <img src={combination} width='20' height='20' />
                            <a>복합학</a>
                        </li>
                    </CategoryLine>
                </ul>
            </Flower>
        </div>
    );
}

export default Categorybar;