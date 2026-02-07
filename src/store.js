import { configureStore, createSlice } from '@reduxjs/toolkit';

const settingsSlice = createSlice({
  name: 'settings',
  initialState: { unit: 'C' },
  reducers: {
    changeUnit: (state, action) => {
      state.unit = action.payload;
    }
  }
});

export const { changeUnit } = settingsSlice.actions;
export const store = configureStore({
  reducer: { settings: settingsSlice.reducer }
});