import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface ScreenSize {
  width: number
  height: number
}

const initialState: ScreenSize = {
  width: window.screen.width,
  height: window.screen.height
}

export const screenSizeSlice = createSlice({
  name: 'screenSize',
  initialState,
  reducers: {
    setScreenSize: (state, action: PayloadAction<number[]>) => {
      state.width = action.payload[0]
      state.height = action.payload[1]
    },
  }
})

export const { setScreenSize } = screenSizeSlice.actions;

export const selectCount = (state: RootState) => state.headerState

export default screenSizeSlice.reducer