import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface projectStateProps {
  id: number;
  teamId: number;
}

const initialState: projectStateProps = {
  id: 0,
  teamId: 0
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
    getTeamId: (
      state: projectStateProps,
      { payload }: PayloadAction<number>
    ) => {
      state.teamId = payload;
    }
  }
});

export const { getProjectId, getTeamId } = projectState.actions;

export default projectState.reducer;
