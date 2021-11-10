/*eslint-disable*/
import {
  Section,
  Wrap,
  AllCategoryWrap,
  SubCategoryWrap,
  Ul,
  Li
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
}

const CategorySection = ({ categoryQueryFn }: Props) => {
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
      </Wrap>
    </Section>
  );
};

export default CategorySection;
