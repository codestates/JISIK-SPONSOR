import styled, { css } from 'styled-components';

interface PageProps {
  profiles?: boolean;
  account?: boolean;
  onClick?: () => void;
}

export const Wrap = styled.div`
  padding: 30px 0;
  background: #e9ecef;
`;

export const ProjectNav = styled.nav`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 30px;
  justify-content: space-between;
`;

const selectButton = css`
  background: #7950f2;
  color: #fff;
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
  width: 100px;
  background: #fff;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4em;
  color: #343a40;
  padding: 15px 0;
  border-radius: 5px;
  border: 1px solid #ced4da;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  ${(props) => (props.profiles || props.account) && selectButton}
`;
