import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = { projects: {} };

const getProject = createSlice({
  name: 'getProject',
  initialState: initialState,
  reducers: {
    getProjectState: (state, { payload }: PayloadAction<any>) => {
      state.projects = payload;
    }
  }
});

export const { getProjectState } = getProject.actions;

export default getProject.reducer;
