import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import uiReducer from './ui';

const store = configureStore({
  reducer: combineReducers({
    ui: uiReducer,
  }),
});

export default store;
