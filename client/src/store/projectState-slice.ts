import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface projectStateProps {
  id: number;
  hashTag: number[];
  teamId: number;
}

const initialState: projectStateProps = { id: 0, hashTag: [], teamId: 0 };

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
    },

    resetHashTagId: (state: projectStateProps) => {
      state.hashTag = [];
    },

    getTeamId: (
      state: projectStateProps,
      { payload }: PayloadAction<number>
    ) => {
      state.teamId = payload;
    }
  }
});

export const {
  getProjectId,
  setHashTagId,
  removeHashTagId,
  resetHashTagId,
  getTeamId
} = projectState.actions;

export default projectState.reducer;
