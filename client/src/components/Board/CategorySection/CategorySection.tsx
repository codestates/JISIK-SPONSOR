/*eslint-disable*/
import React from 'react'
import { Section, Wrap, AllCategoryWrap, SubCategoryWrap, Ul, Li, FilterWrap } from './styled';
import { Link } from 'react-router-dom';
import allcategory from '../../../images/allcategory.png';
import humanities from '../../../images/humanities.png';
import social from '../../../images/social.png';
import natural from '../../../images/natural.png';
import engineering from '../../../images/engineering.png';
import medicine from '../../../images/medicine.png';
import agricultural from '../../../images/agricultural.png';
import artistry from '../../../images/artistry.png';
import combination from '../../../images/combination.png';

const CategorySection = () => {
    return (
        <Section>
            <Wrap>
                <AllCategoryWrap>
                    <img src={allcategory} alt="category background image" />
                    <span>모든 카테고리</span>
                </AllCategoryWrap>
                <SubCategoryWrap>
                    <Ul>
                        <Li>
                            <Link to="/">
                                <img src={humanities} />
                                <span>인문학</span>
                            </Link>
                        </Li>
                        <Li>
                            <Link to="/">
                                <img src={social} />
                                <span>사회과학</span>
                            </Link>
                        </Li>
                        <Li>
                            <Link to="/">
                                <img src={natural} />
                                <span>자연과학</span>
                            </Link>
                        </Li>
                        <Li>
                            <Link to="/">
                                <img src={engineering} />
                                <span>공학</span>
                            </Link>
                        </Li>
                        <Li>
                            <Link to="/">
                                <img src={medicine} />
                                <span>의약학</span>
                            </Link>
                        </Li>
                        <Li>
                            <Link to="/">
                                <img src={agricultural} />
                                <span>농수해양학</span>
                            </Link>
                        </Li>
                        <Li>
                            <Link to="/">
                                <img src={artistry} />
                                <span>예술체육학</span>
                            </Link>
                        </Li>
                        <Li>
                            <Link to="/">
                                <img src={combination} />
                                <span>복합학</span>
                            </Link>
                        </Li>
                    </Ul>
                </SubCategoryWrap>
                <FilterWrap>
                    <select>
                        <option>최신순</option>
                        <option>인기순</option>
                        <option>댓글순</option>
                        <option>최다후원금순</option>
                        <option>최다후원임순</option>
                        <option>성공임박순</option>
                        <option>마감임박순</option>
                    </select>
                </FilterWrap>
            </Wrap>
        </Section>
    )
}

export default CategorySection