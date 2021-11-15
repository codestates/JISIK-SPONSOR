import { createSlice } from '@reduxjs/toolkit';
import { persistor } from 'index';
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
      setTimeout(() => persistor.purge(), 200);
    }
  }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
