import { createSlice } from '@reduxjs/toolkit';

export interface authentification {
  isLogin: boolean;
}

const initialState: authentification = { isLogin: false };


const authSlice = createSlice({
  name: 'authentification',
  initialState: initialState,
  reducers: {
    login: (state: authentification) => {
      state.isLogin = true;
    },
    logout: (state: authentification) => {
      state.isLogin = false;
    }
  }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
