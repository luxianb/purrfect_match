import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  width: 0,
  deviceType: 'desktop'
};

export const displaySlice = createSlice({
  name: 'display',
  initialState,
  reducers: {
    updateDisplayWidth: (state, action) => {
      state.width = action.payload;

      if (action.payload <= 480) {
        state.deviceType = 'mobile'
      } else if (action.payload <= 768) {
        state.deviceType = 'tablet'
      } else if (action.payload <= 1024) {
        state.deviceType = 'laptop'
      } else {
        state.deviceType = 'desktop'
      }
    },
  }
})

// Action creators are generated for each case reducer function
export const { updateDisplayWidth } = displaySlice.actions

export default displaySlice.reducer