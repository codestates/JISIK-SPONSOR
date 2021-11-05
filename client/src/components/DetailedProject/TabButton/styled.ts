import styled, { css } from 'styled-components';

interface DetailTabs {
  overview?: boolean;
  labnote?: boolean;
  onClick?: () => void;
}

export const Wrapper = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 30px;
  /* background-color: pink; */
  display: flex;
  gap: 30px;
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
`;
