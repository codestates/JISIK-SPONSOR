import { createSlice } from '@reduxjs/toolkit';

export interface MyPageTabs {
  myProject: boolean;
  backedProject: boolean;
  favorites: boolean;
  myComments: boolean;
}

const initialState: MyPageTabs = {
  myProject: true,
  backedProject: false,
  favorites: false,
  myComments: false
};

const switchTab = createSlice({
  name: 'switchTab',
  initialState: initialState,
  reducers: {
    myProject: (state: MyPageTabs) => {
      (state.myProject = true),
        (state.backedProject = false),
        (state.favorites = false),
        (state.myComments = false);
    },
    backedProject: (state: MyPageTabs) => {
      (state.myProject = false),
        (state.backedProject = true),
        (state.favorites = false),
        (state.myComments = false);
    },
    favorites: (state: MyPageTabs) => {
      (state.myProject = false),
        (state.backedProject = false),
        (state.favorites = true),
        (state.myComments = false);
    },
    myComments: (state: MyPageTabs) => {
      (state.myProject = false),
        (state.backedProject = false),
        (state.favorites = false),
        (state.myComments = true);
    }
  }
});

export const { myProject, backedProject, favorites, myComments } =
  switchTab.actions;

export default switchTab.reducer;
