import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserInfoProps {
  userInfo: {
    id?: number;
    name?: string;
    email?: string;
    mobile?: string;
    nickname?: string;
    bio?: string;
    profile_url?: string;
    signup_method?: string;
    projects_supported?: number;
    total_amount?: string;
    email_verified?: boolean;
    created_at?: Date;
    updated_at?: Date;
  };
}

const initialState: UserInfoProps = { userInfo: {} };

const userInformation = createSlice({
  name: 'authentification',
  initialState: initialState,
  reducers: {
    getUserInfo: (
      state: UserInfoProps,
      { payload }: PayloadAction<UserInfoProps>
    ) => {
      console.log('payload', payload);
      state = payload;
    }
  }
});

export const { getUserInfo } = userInformation.actions;

export default userInformation.reducer;
