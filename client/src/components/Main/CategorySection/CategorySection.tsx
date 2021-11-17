/*eslint-disable*/
import { Link, useHistory } from 'react-router-dom';
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
  const history: any = useHistory();

  const categoryClick = (category: string) => {
    history.push({ pathname: '/board', state: { category } });
  };

  return (
    <Section>
      <Wrap>
        <ImageWrap>
          <img src={flower} alt="category background image" />
        </ImageWrap>
        <LinkWrap>
          <Ul>
            <Li>
              <a onClick={() => categoryClick('인문학')}>
                <img src={humanities} />
                <span>인문학</span>
              </a>
            </Li>
            <Li>
              <a onClick={() => categoryClick('사회과학')}>
                <img src={social} />
                <span>사회과학</span>
              </a>
            </Li>
            <Li>
              <a onClick={() => categoryClick('자연과학')}>
                <img src={natural} />
                <span>자연과학</span>
              </a>
            </Li>
            <Li>
              <a onClick={() => categoryClick('공학')}>
                <img src={engineering} />
                <span>공학</span>
              </a>
            </Li>
            <Li>
              <a onClick={() => categoryClick('의약학')}>
                <img src={medicine} />
                <span>의약학</span>
              </a>
            </Li>
            <Li>
              <a onClick={() => categoryClick('농수해양학')}>
                <img src={agricultural} />
                <span>농수해양학</span>
              </a>
            </Li>
            <Li>
              <a onClick={() => categoryClick('예술체육학')}>
                <img src={artistry} />
                <span>예술체육학</span>
              </a>
            </Li>
            <Li>
              <a onClick={() => categoryClick('복합학')}>
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
