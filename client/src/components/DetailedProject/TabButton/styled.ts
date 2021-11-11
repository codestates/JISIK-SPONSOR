import styled, { css } from 'styled-components';

interface DetailTabs {
  overview?: boolean;
  labnote?: boolean;
  onClick?: () => void;
}

export const Section = styled.section`
  width: 100%;
  border-top: 2px solid #e9ecef;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  gap: 30px;

  @media screen and (max-width: 718px) {
    gap: 15px;
  }
`;

const selectedTab = css`
  /* background-color: pink; */
  color: #343a40;
`;

export const Tab = styled.button<DetailTabs>`
  border: none;
  background: none;
  font-size: 30px;
  font-weight: 500;
  line-height: 1.4;
  color: #868e96;
  margin: 20px 0;
  cursor: pointer;
  ${(props) => {
    return (props.overview || props.labnote) && selectedTab;
  }}

  &:hover {
    color: #7950f2;
    border-color: #7950f2;
  }

  @media screen and (max-width: 718px) {
    margin: 15px 0;
    font-size: 20px;
    line-height: 1;
  }
`;

export const TabMoveButton = styled(Tab)`
  border: 3px solid #868e96;
  border-radius: 5px;
  padding: 8px 10px;
  /* font-weight: 700; */
`;
