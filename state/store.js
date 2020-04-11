import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import dataReducer from './data';
import uiReducer from './ui';

const store = configureStore({
  reducer: combineReducers({
    data: dataReducer,
    ui: uiReducer,
  }),
});

export default store;
