import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Interested: [],
  Applied: [],
  Interviewed: [],
  FollowedUp: [],
  Accepted: [],
  Rejected: [],
};

const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    syncData: (state, action) => {
      state.Interested = state.Interested.slice();
      state.Interested = action.payload.Interested;

      state.Applied = state.Applied.slice();
      state.Applied = action.payload.Applied;

      state.Interviewed = state.Interviewed.slice();
      state.Interviewed = action.payload.Interviewed;

      state.FollowedUp = state.FollowedUp.slice();
      state.FollowedUp = action.payload.FollowedUp;

      state.Accepted = state.Accepted.slice();
      state.Accepted = action.payload.Accepted;

      state.Rejected = state.Rejected.slice();
      state.Rejected = action.payload.Rejected;
    },
  },
});

export const { syncData } = noteSlice.actions;

export default noteSlice.reducer;
