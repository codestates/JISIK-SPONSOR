import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface headerSearch {
  content: string;
  use: boolean;
}

const initialState: headerSearch = { content: '', use: false };

const headerSearchSlice = createSlice({
  name: 'headerSearch',
  initialState: initialState,
  reducers: {
    searchContent: (
      state: headerSearch,
      { payload }: PayloadAction<string>
    ) => {
      // console.log(payload);
      state.content = payload;
    },
    used: (state: headerSearch) => {
      state.use = true;
    },
    notUsed: (state: headerSearch) => {
      state.use = false;
      state.content = '';
    }
  }
});

export const { searchContent, used, notUsed } = headerSearchSlice.actions;

export default headerSearchSlice.reducer;
