/*eslint-disable*/
import { Link } from 'react-router-dom';
import { Section, Wrap, ImageWrap, LinkWrap, Ul, Li } from './styled';
import flower from '../../../images/flower.png';
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
        <ImageWrap>
          <img src={flower} alt="category background image" />
        </ImageWrap>
        <LinkWrap>
          <Ul>
            <Li>
              <a>
                <img src={humanities} />
                <span>인문학</span>
              </a>
            </Li>
            <Li>
              <a>
                <img src={social} />
                <span>사회과학</span>
              </a>
            </Li>
            <Li>
              <a>
                <img src={natural} />
                <span>자연과학</span>
              </a>
            </Li>
            <Li>
              <a>
                <img src={engineering} />
                <span>공학</span>
              </a>
            </Li>
            <Li>
              <a>
                <img src={medicine} />
                <span>의약학</span>
              </a>
            </Li>
            <Li>
              <a>
                <img src={agricultural} />
                <span>농수해양학</span>
              </a>
            </Li>
            <Li>
              <a>
                <img src={artistry} />
                <span>예술체육학</span>
              </a>
            </Li>
            <Li>
              <a>
                <img src={combination} />
                <span>복합학</span>
              </a>
            </Li>
          </Ul>
        </LinkWrap>
      </Wrap>
    </Section>
  );
};

export default CategorySection;
