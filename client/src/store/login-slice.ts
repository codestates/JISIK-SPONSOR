import { createSlice } from '@reduxjs/toolkit';

export interface authentification {
  isLogin: boolean;
}

const initialState = { isLogin: false };

const authSlice = createSlice({
  name: 'authentification',
  initialState: initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    }
  }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
