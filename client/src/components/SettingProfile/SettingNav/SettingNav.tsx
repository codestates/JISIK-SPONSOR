import { useDispatch } from 'react-redux';
import { RootState } from 'index';
import { useSelector } from 'react-redux';
import { profile, account } from 'store/settingPageBt-silce';
import { Wrap, ProjectNav, NavButton, NavButtonGroup } from './styled';

function SettingNav() {
  const changePage = useSelector((state: RootState) => state.settingBt);
  const dispatch = useDispatch();
  return (
    <Wrap>
      <ProjectNav>
        <NavButtonGroup>
          <NavButton
            profiles={changePage.profile}
            onClick={() => dispatch(profile())}
          >
            프로필
          </NavButton>
          <NavButton
            account={changePage.account}
            onClick={() => dispatch(account())}
          >
            계정
          </NavButton>
        </NavButtonGroup>
      </ProjectNav>
    </Wrap>
  );
}

export default SettingNav;
