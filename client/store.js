import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './reducers/noteReducer.js';

const store = configureStore({
  reducer: { notes: notesReducer },
});

export default store;
