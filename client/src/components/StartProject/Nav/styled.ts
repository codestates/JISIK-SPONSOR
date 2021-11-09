import styled, { css } from 'styled-components';

interface PageProps {
  basic?: boolean;
  budget?: boolean;
  details?: boolean;
  team?: boolean;
  onClick?: () => void;
}

const selectButton = css`
  background: #7950f2;
  color: #fff;
`;
export const ProjectNav = styled.nav`
  background: #e9ecef;
  padding: 30px 270px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1400px) {
    padding: 30px 150px;
  }
  @media screen and (max-width: 950px) {
    padding: 30px;
  }
`;

export const NavButtonGroup = styled.div`
  button {
    &:first-child {
      margin-right: 15px;
    }
    &:nth-child(2) {
      margin-right: 15px;
    }
    &:nth-child(3) {
      margin-right: 15px;
    }
  }
`;

export const NavButton = styled.button<PageProps>`
  width: 94px;
  background: #fff;
  border: 1px solid #ced4da;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4em;
  padding: 12px 0 12px 0;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.3s;
  ${(props) =>
    (props.basic || props.budget || props.details || props.team) &&
    selectButton}

  @media screen and (max-width:1200px) {
    font-size: 12.8px;
    width: 70px;
  }
  @media screen and (max-width: 950px) {
    width: 60px;
  }
`;

export const ResultButton = styled.div`
  button {
    &:first-child {
      margin-right: 15px;
    }
  }
`;
