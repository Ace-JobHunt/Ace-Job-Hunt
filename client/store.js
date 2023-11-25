import { configureStore } from '@reduxjs/toolkit';
import statusReducer from '../client/reducers/jobReducer';

const store = configureStore({
  reducer: { status: statusReducer },
});

export default store;
