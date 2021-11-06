import { createSlice } from '@reduxjs/toolkit';

export interface DetailTabs {
  overview: boolean;
  labnote: boolean;
}

const initialState: DetailTabs = {
  overview: true,
  labnote: false
};

const detailPageSwitch = createSlice({
  name: 'detailPageSwitch',
  initialState: initialState,
  reducers: {
    overview: (state: DetailTabs) => {
      (state.overview = true), (state.labnote = false);
    },
    labnote: (state: DetailTabs) => {
      (state.overview = false), (state.labnote = true);
    }
  }
});

export const { overview, labnote } = detailPageSwitch.actions;

export default detailPageSwitch.reducer;
