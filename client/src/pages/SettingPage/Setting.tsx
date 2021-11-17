import SettingNav from 'components/SettingProfile/SettingNav/SettingNav';
import { RootState } from 'index';
import { useSelector } from 'react-redux';
import ProfileSetting from 'components/SettingProfile/ProfileSetting/ProfileSetting';
import AccountSetting from 'components/SettingProfile/AccountSetting/AccountSetting';
const Setting = () => {
  const { profile, account } = useSelector(
    (state: RootState) => state.settingBt
  );
  return (
    <>
      <SettingNav />
      {profile && <ProfileSetting />}
      {account && <AccountSetting />}
    </>
  );
};

export default Setting;
