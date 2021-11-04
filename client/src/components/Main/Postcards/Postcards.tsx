/*eslint-disable*/
import Postcard from '../Postcard/Postcard';
import { PostcardsWrap, Ul } from './styled';
import { Row } from '../AchievedSection/type';

interface Props {
  projects: Row[];
}

const Postcards = ({ projects }: Props) => {
  return (
    <PostcardsWrap>
      <Ul>
        {projects.map((project: Row) => {
          return <Postcard key={project.id} project={project} />;
        })}
      </Ul>
    </PostcardsWrap>
  );
};

export default Postcards;
