/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isFetching: false,
  query: {
    timestamp: null,
    bounds: {
      minLat: null,
      maxLat: null,
      minLng: null,
      maxLng: null,
    },
  },
  results: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setTimestamp(state, action) {
      state.query.timestamp = action.payload.timestamp;
    },
  },
});

export const { setTimestamp } = dataSlice.actions;
export default dataSlice.reducer;
