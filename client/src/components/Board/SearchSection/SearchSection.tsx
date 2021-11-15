/*eslint-disable*/
import { useState } from 'react';
import { Section, Wrap, SearchWrap, FilterWrap } from './styled';

export interface Props {
  seachQueryFn: (e: any, search: string) => void;
  filterQueryFn: (e: any) => void;
}

const SearchSection = ({ seachQueryFn, filterQueryFn }: Props) => {
  const [search, setSearch] = useState<string>('');

  const searchHandle = (e: any) => {
    setSearch(e.target.value);
  };

  const searchClearHandle = (e: any) => {
    if (e.key === 'Enter' || e.target.localName === 'button') {
      setSearch('');
    }
  };

  return (
    <Section id="ButtonSection">
      <Wrap>
        <FilterWrap>
          <select onChange={(e) => filterQueryFn(e)}>
            <option value="">최신순</option>
            <option value="views">조회순</option>
            <option value="wishes">인기순</option>
            <option value="comments">댓글순</option>
            <option value="pledged">최다후원금순</option>
            <option value="sponsors">최다후원인순</option>
            <option value="remainder">성공임박순</option>
            <option value="end_date">마감임박순</option>
          </select>
        </FilterWrap>
        <SearchWrap>
          <input
            onChange={(e) => searchHandle(e)}
            onKeyPress={(e) => {
              seachQueryFn(e, search);
              searchClearHandle(e);
            }}
            value={search}
            placeholder="검색어를 입력하세요."
          />
          <button
            onClick={(e) => {
              seachQueryFn(e, search);
              searchClearHandle(e);
            }}
          >
            검색
          </button>
        </SearchWrap>
      </Wrap>
    </Section>
  );
};

export default SearchSection;
