/*eslint-disable*/
import Postcard from '../Postcard/Postcard';
import { PostcardsWrap, Ul } from './styled';
import { Row } from '../type';
import { useState } from 'react';

interface Props {
  projects: Row[];
}

const Postcards = ({ projects }: Props) => {
  const message: string = '존재하지 않습니다.';

  return (
    <PostcardsWrap>
      <Ul>
        {projects.length
          ? projects.map((project: Row) => {
              return <Postcard key={project.id} project={project} />;
            })
          : message}
      </Ul>
    </PostcardsWrap>
  );
};

export default Postcards;
