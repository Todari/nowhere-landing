import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface HeaderState {
  showHeader: boolean
  showSubMenuDropdown: boolean
  transparent: boolean
}

const initialState: HeaderState = {
  showHeader: true,
  showSubMenuDropdown: false,
  transparent: false
}

export const headerStateSlice = createSlice({
  name: 'headerState',
  initialState,
  reducers: {
    setShowHeader:( state, action: PayloadAction<boolean>) => {
      state.showHeader = action.payload
    },
    setShowSubMenuDropdown: ( state, action: PayloadAction<boolean>) => {
      state.showSubMenuDropdown = action.payload
    },
    setTransparent: ( state, action: PayloadAction<boolean>) => {
      state.transparent = action.payload
    },
  }
})

export const {
  setShowHeader,
  setShowSubMenuDropdown,
  setTransparent
} = headerStateSlice.actions;

export const selectCount = (state: RootState) => state.headerState

export default headerStateSlice.reducer