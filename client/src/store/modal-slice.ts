import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface modal {
  loginModal: boolean;
  signupModal: boolean;
  personalBox: boolean;
  conditionBox: boolean;
  conflitModal: boolean;
  miniModal: boolean;
  withDrawalModal: boolean;
  deleteProjectModal: boolean;
  deleteProjectId: number;
  modalText: string;
}

const initialState: modal = {
  loginModal: false,
  signupModal: false,
  conflitModal: false,
  personalBox: false,
  conditionBox: false,
  miniModal: false,
  withDrawalModal: false,
  deleteProjectModal: false,
  deleteProjectId: 0,
  modalText: ''
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
    showConfiltModal: (state: modal, { payload }: PayloadAction<boolean>) => {
      state.conflitModal = payload;
    },
    showMiniMoal: (state: modal, { payload }: PayloadAction<boolean>) => {
      state.miniModal = payload;
    },

    showWithDrawalModal: (
      state: modal,
      { payload }: PayloadAction<boolean>
    ) => {
      state.withDrawalModal = payload;
    },

    showDeleteProjectModal: (state: modal, { payload }: PayloadAction<any>) => {
      state.deleteProjectModal = payload.modal;
      state.deleteProjectId = payload.id;
    },

    insertText: (state: modal, { payload }: PayloadAction<string>) => {
      state.modalText = payload;
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
  offConditionModal,
  showConfiltModal,
  showMiniMoal,
  insertText,
  showWithDrawalModal,
  showDeleteProjectModal
} = modalBox.actions;

export default modalBox.reducer;
