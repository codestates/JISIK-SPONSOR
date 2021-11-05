/*eslint-disable*/
import { useState } from 'react';
import { Section, Wrap } from './styled';

export interface Props {
  seachQueryFn: (e: any) => void;
}

const SearchSection = ({ seachQueryFn }: Props) => {
  const [search, setSearch] = useState<string>('');

  const searchHandle = (e: any) => {
    // console.log(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <Section id="ButtonSection">
      <Wrap>
        <input
          onChange={(e) => searchHandle(e)}
          value={search}
          placeholder="검색어를 입력하세요."
        />
        <button onClick={() => seachQueryFn(search)}>검색</button>
      </Wrap>
    </Section>
  );
};

export default SearchSection;
