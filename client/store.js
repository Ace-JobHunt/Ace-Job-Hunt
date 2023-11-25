import { configureStore } from '@reduxjs/toolkit';
import statusReducer from '../client/reducers/jobReducer';

export const store = configureStore({
  reducer: { status: statusReducer },
});
