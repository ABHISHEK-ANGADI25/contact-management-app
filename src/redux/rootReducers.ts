// src/redux/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './slices/contactsSlices';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
