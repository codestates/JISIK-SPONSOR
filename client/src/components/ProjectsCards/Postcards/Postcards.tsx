/*eslint-disable*/
import Postcard from '../Postcard/Postcard';
import { PostcardsWrap, Ul } from './styled';
import { Row } from '../type';
import Message from '../../Message/Message';

interface Props {
  projects: Row[];
}

const Postcards = ({ projects }: Props) => {
  return (
    <>
      {projects.length ? (
        <PostcardsWrap>
          <Ul>
            {projects.map((project: Row) => {
              return <Postcard key={project.id} project={project} />;
            })}
          </Ul>
        </PostcardsWrap>
      ) : (
        <Message message={'컨텐츠가 비었습니다.'} />
      )}
    </>
  );
};

export default Postcards;
