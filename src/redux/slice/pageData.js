import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  hireUserId: 0,
}

export const pageDataSlice = createSlice({
  name: 'pageData',
  initialState,
  reducers: {

    saveHireId: (state, action) => {
      state.hireUserId = action.payload
    },
  },
})

export const { saveHireId } = pageDataSlice.actions

export default pageDataSlice.reducer