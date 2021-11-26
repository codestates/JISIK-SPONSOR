import styled, { css } from 'styled-components';

interface PageProps {
  basic?: boolean;
  budget?: boolean;
  details?: boolean;
  team?: boolean;
  onClick?: () => void;
}

export const Wrap = styled.div`
  padding: 3rem 0;
  background: #e9ecef;
  @media all and (max-width: 620px) {
    padding: 1.5rem 0;
  }
`;

export const ProjectNav = styled.nav`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 3rem;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 980px) {
    gap: 1.5rem;
    flex-direction: column;
  }
  @media all and (max-width: 620px) {
    padding: 0 1.5rem;
    gap: 1rem;
  }
  @media all and (max-width: 980px) {
    flex-direction: column;
  }
`;

const selectButton = css`
  color: #fff;
  background: #7950f2;
`;

export const NavButtonGroup = styled.div`
  display: flex;
  width: 100%;
  gap: 1.5rem;
  @media all and (max-width: 980px) {
    width: 100%;
  }
  @media all and (max-width: 620px) {
    gap: 0.5rem;
  }
`;

export const NavButton = styled.button<PageProps>`
  width: 10rem;
  max-width: 100px;
  background: #fff;
  border: 1px solid #ced4da;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.4em;
  padding: 1.5rem 0;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.3s;
  color: #343a40;
  ${(props) =>
    (props.basic || props.budget || props.details || props.team) &&
    selectButton}

  @media screen and (max-width:1200px) {
    font-size: 1.28rem;
  }
  @media all and (max-width: 620px) {
    padding: 1rem 0;
  }
`;

export const ResultButton = styled.div`
  width: auto;
  display: flex;
  justify-content: right;
  gap: 1.5rem;
  @media all and (max-width: 980px) {
    /* width: 100%; */
    justify-content: left;
  }
  @media all and (max-width: 620px) {
    gap: 0.5rem;
  }
  @media all and (max-width: 540px) {
    width: auto;
  }
`;
