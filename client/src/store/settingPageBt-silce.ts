import { createSlice } from '@reduxjs/toolkit';

export interface settingBt {
  profile: boolean;
  account: boolean;
}
const initialState: settingBt = {
  profile: true,
  account: false
};
const changeSettingBt = createSlice({
  name: 'changeSettingBt',
  initialState: initialState,
  reducers: {
    profile: (state: settingBt) => {
      (state.profile = true), (state.account = false);
    },
    account: (state: settingBt) => {
      (state.profile = false), (state.account = true);
    }
  }
});

export const { profile, account } = changeSettingBt.actions;
export default changeSettingBt.reducer;
