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

  @media screen and (max-width: 620px) {
    gap: 0;
  }
  @media screen and (max-width: 400px) {
    flex-wrap: wrap;
    padding: 10px 15px;
  }
`;

const selectedTab = css`
  color: #343a40;
`;

export const Tab = styled.button<DetailTabs>`
  font-size: 31.25px;
  font-weight: 500;
  line-height: 1.4;
  color: #868e96;
  cursor: pointer;
  padding: 0;
  margin: 20px 0;
  border: none;
  background: none;
  ${(props) => {
    return (props.overview || props.labnote) && selectedTab;
  }}
  &:hover {
    color: #7950f2;
    border-color: #7950f2;
  }
  @media screen and (max-width: 980px) {
    font-size: 20px;
  }
  @media screen and (max-width: 620px) {
    margin: 15px 0;
    font-size: 16px;
    line-height: 1;
    padding: 0 10px;
    border-right: 1px solid #ddd;
    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      padding-right: 0;
      border: 0;
    }
  }
  @media screen and (max-width: 400px) {
    width: 50%;
    padding: 0;
    margin: 10px 0;
    :nth-child(2) {
      border: 0;
    }
  }
`;

export const TabMoveButton = styled(Tab)`
  border: 3px solid #868e96;
  border-radius: 5px;
  padding: 8px 10px;
`;
