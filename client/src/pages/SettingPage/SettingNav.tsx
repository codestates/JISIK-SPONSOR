import React from 'react';
import { ProjectNav, NavButton, NavButtonGroup } from './styled';
function SettingNav() {
  return (
    <div>
      <ProjectNav>
        <NavButtonGroup>
          <NavButton>프로필</NavButton>
          <NavButton>계정</NavButton>
        </NavButtonGroup>
      </ProjectNav>
    </div>
  );
}

export default SettingNav;
