import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface modal {
  loginModal: boolean;
  signupModal: boolean;
  personalBox: boolean;
  conditionBox: boolean;
}

const initialState: modal = {
  loginModal: false,
  signupModal: false,
  personalBox: false,
  conditionBox: false
};

const modalBox = createSlice({
  name: 'modal',
  initialState: initialState,
  reducers: {
    showLoginModal: (state: modal, { payload }: PayloadAction<boolean>) => {
      state.loginModal = payload;
    },
    showSignupModal: (state: modal, { payload }: PayloadAction<boolean>) => {
      state.signupModal = payload;
    },
    onPersonalModal: (state: modal) => {
      state.personalBox = true;
    },
    offPersonalModal: (state: modal) => {
      state.personalBox = false;
    },
    onConditionModal: (state: modal) => {
      state.conditionBox = true;
    },
    offConditionModal: (state: modal) => {
      state.conditionBox = false;
    }
  }
});

export const {
  showLoginModal,
  showSignupModal,
  onPersonalModal,
  offPersonalModal,
  onConditionModal,
  offConditionModal
} = modalBox.actions;

export default modalBox.reducer;
