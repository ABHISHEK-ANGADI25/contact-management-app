// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducers';

const store = configureStore({
  reducer: rootReducer,
  // Optional: you can add middleware or enhancers here if needed
});

export type AppDispatch = typeof store.dispatch;
export default store;
