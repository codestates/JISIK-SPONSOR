import { createSlice } from '@reduxjs/toolkit';

export interface button {
  basic: boolean;
  budget: boolean;
  details: boolean;
  team: boolean;
}
const initialState: button = {
  basic: true,
  budget: false,
  details: false,
  team: false
};
const changePage = createSlice({
  name: 'changePage',
  initialState: initialState,
  reducers: {
    basic: (state: button) => {
      (state.basic = true),
        (state.budget = false),
        (state.details = false),
        (state.team = false);
    },
    budget: (state: button) => {
      (state.basic = false),
        (state.budget = true),
        (state.details = false),
        (state.team = false);
    },
    details: (state: button) => {
      (state.basic = false),
        (state.budget = false),
        (state.details = true),
        (state.team = false);
    },
    team: (state: button) => {
      (state.basic = false),
        (state.budget = false),
        (state.details = false),
        (state.team = true);
    },
    reset: (state: button) => {
      (state.basic = false),
        (state.budget = false),
        (state.details = false),
        (state.team = false);
    }
  }
});

export const { basic, budget, details, team, reset } = changePage.actions;
export default changePage.reducer;
