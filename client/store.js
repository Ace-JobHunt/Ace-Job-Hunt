import { configureStore } from '@reduxjs/toolkit';
import noteSlice from '../client/reducers/jobReducer.js';

const store = configureStore({
  reducer: { notes: noteSlice },

});

export default store;
