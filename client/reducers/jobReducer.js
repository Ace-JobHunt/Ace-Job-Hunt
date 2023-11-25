import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  interested: [],
  applied: [],
  interviewed: [],
  FollowedUp: [],
  Accepted: [],
  Rejected: [],
};

export const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    addJob: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.push(action.payload);
    },
    deleteJob: (state, action) => {
      let userIndexNum = state.indexOf(action.payload);
      state.splice(userIndexNum, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addJob, deleteJob } = statusSlice.actions;

export default statusSlice.reducer;
