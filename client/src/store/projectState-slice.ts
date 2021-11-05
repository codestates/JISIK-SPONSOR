import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface projectStateProps {
  id: number;
  hashTag: number[];
}

const initialState: projectStateProps = {
  id: 0,
  hashTag: []
};

const projectState = createSlice({
  name: 'projectState',
  initialState: initialState,
  reducers: {
    getProjectId: (
      state: projectStateProps,
      { payload }: PayloadAction<number>
    ) => {
      state.id = payload;
    },
    setHashTagId: (
      state: projectStateProps,
      { payload }: PayloadAction<number>
    ) => {
      state.hashTag.push(payload);
    },
    removeHashTagId: (
      state: projectStateProps,
      { payload }: PayloadAction<number>
    ) => {
      state.hashTag.splice(payload, 1);
    }
  }
});

export const { getProjectId, setHashTagId, removeHashTagId } =
  projectState.actions;

export default projectState.reducer;
