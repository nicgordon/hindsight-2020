/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import get from 'lodash/get';
import isUndefined from 'lodash/isUndefined';

const initialState = {
  isEditModeActive: false,
  isMenuOpen: false,
};

const uiSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    toggleEditMode(state, action) {
      state.isEditModeActive = isUndefined(get(action, 'payload.isActive'))
        ? !state.isEditModeActive
        : action.payload.isActive;
    },
    toggleMenu(state, action) {
      state.isMenuOpen = isUndefined(get(action, 'payload.isOpen'))
        ? !state.isMenuOpen
        : action.payload.isOpen;
    },
  },
});

export const { toggleMenu } = uiSlice.actions;
export default uiSlice.reducer;
