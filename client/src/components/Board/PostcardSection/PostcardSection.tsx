/*eslint-disable*/
import { Section, Wrap } from './styled';
import Postcards from '../../ProjectsCards/Postcards/Postcards';
import { Row } from './type';

interface Props {
  projects: Row[];
}

const PostcardSection = ({ projects }: Props) => {
  return (
    <Section>
      <Wrap>
        <Postcards projects={projects} />
      </Wrap>
    </Section>
  );
};

export default PostcardSection;
