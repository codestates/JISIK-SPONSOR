import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface modal {
  loginModal: boolean;
  signupModal: boolean;
}

const initialState: modal = { loginModal: false, signupModal: false };

const modalBox = createSlice({
  name: 'modal',
  initialState: initialState,
  reducers: {
    showLoginModal: (state: modal, { payload }: PayloadAction<boolean>) => {
      state.loginModal = payload;
    },
    showSignupModal: (state: modal, { payload }: PayloadAction<boolean>) => {
      state.signupModal = payload;
    }
  }
});

export const { showLoginModal, showSignupModal } = modalBox.actions;

export default modalBox.reducer;
