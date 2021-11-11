import { HashTag, HashTagContainer } from './styled';
import { Tag } from '../type';

interface IntroTagProps {
  tags: Tag[];
}

const IntroTag = ({ tags }: IntroTagProps) => {
  return (
    <HashTagContainer>
      {tags.map((tag) => (
        <HashTag key={tag.id}>
          <strong>#</strong>
          <span>{tag.name}</span>
        </HashTag>
      ))}
    </HashTagContainer>
  );
};

export default IntroTag;
