import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface projectHashtagProps {
  hashTag: number[];
}

const initialState: projectHashtagProps = {
  hashTag: []
};

const projectHashtagList = createSlice({
  name: 'projectHashtagList',
  initialState: initialState,
  reducers: {
    setHashTagId: (
      state: projectHashtagProps,
      { payload }: PayloadAction<number>
    ) => {
      state.hashTag.push(payload);
    },

    removeHashTagId: (
      state: projectHashtagProps,
      { payload }: PayloadAction<number>
    ) => {
      state.hashTag.splice(payload, 1);
    },

    resetHashTagId: (state: projectHashtagProps) => {
      state.hashTag = [];
    }
  }
});

export const { setHashTagId, removeHashTagId, resetHashTagId } =
  projectHashtagList.actions;

export default projectHashtagList.reducer;
