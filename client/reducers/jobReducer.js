import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  interested: [],
  applied: [],
  interviewed: [],
  followedUp: [],
  accepted: [],
  rejected: [],
};

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    addNote: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.push(action.payload);
    },
    deleteNote: (state, action) => {
      let userIndexNum = state.indexOf(action.payload);
      state.splice(userIndexNum, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNote, deleteNote } = noteSlice.actions;

export default noteSlice.reducer;
