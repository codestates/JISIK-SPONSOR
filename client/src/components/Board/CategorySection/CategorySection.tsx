/*eslint-disable*/
import {
  Section,
  Wrap,
  AllCategoryWrap,
  SubCategoryWrap,
  Ul,
  Li,
  FilterWrap
} from './styled';
import allcategory from '../../../images/allcategory.png';
import humanities from '../../../images/humanities.png';
import social from '../../../images/social.png';
import natural from '../../../images/natural.png';
import engineering from '../../../images/engineering.png';
import medicine from '../../../images/medicine.png';
import agricultural from '../../../images/agricultural.png';
import artistry from '../../../images/artistry.png';
import combination from '../../../images/combination.png';

export interface Props {
  categoryQueryFn: (catrogy: string) => void;
  filterQueryFn: (e: any) => void;
}

const CategorySection = ({ categoryQueryFn, filterQueryFn }: Props) => {
  return (
    <Section>
      <Wrap>
        <AllCategoryWrap>
          <Ul>
            <Li>
              <a onClick={() => categoryQueryFn('전체')}>
                <img src={allcategory} alt="category background image" />
                <span>모든 카테고리</span>
              </a>
            </Li>
          </Ul>
        </AllCategoryWrap>
        <SubCategoryWrap>
          <Ul>
            <Li>
              <a onClick={() => categoryQueryFn('인문학')}>
                <img src={humanities} />
                <span>인문학</span>
              </a>
            </Li>
            <Li>
              <a onClick={() => categoryQueryFn('사회과학')}>
                <img src={social} />
                <span>사회과학</span>
              </a>
            </Li>
            <Li>
              <a onClick={() => categoryQueryFn('자연과학')}>
                <img src={natural} />
                <span>자연과학</span>
              </a>
            </Li>
            <Li>
              <a onClick={() => categoryQueryFn('공학')}>
                <img src={engineering} />
                <span>공학</span>
              </a>
            </Li>
            <Li>
              <a onClick={() => categoryQueryFn('의약학')}>
                <img src={medicine} />
                <span>의약학</span>
              </a>
            </Li>
            <Li>
              <a onClick={() => categoryQueryFn('농수해양학')}>
                <img src={agricultural} />
                <span>농수해양학</span>
              </a>
            </Li>
            <Li>
              <a onClick={() => categoryQueryFn('예술체육학')}>
                <img src={artistry} />
                <span>예술체육학</span>
              </a>
            </Li>
            <Li>
              <a onClick={() => categoryQueryFn('복합학')}>
                <img src={combination} />
                <span>복합학</span>
              </a>
            </Li>
          </Ul>
        </SubCategoryWrap>
        <FilterWrap>
          <select onChange={(e) => filterQueryFn(e)}>
            <option value="">최신순</option>
            <option value="views">조회순</option>
            <option value="wishes">인기순</option>
            <option value="comments">댓글순</option>
            <option value="pledged">최다후원금순</option>
            <option value="sponsors">최다후원임순</option>
            <option value="remainder">성공임박순</option>
            <option value="end_date">마감임박순</option>
          </select>
        </FilterWrap>
      </Wrap>
    </Section>
  );
};

export default CategorySection;
