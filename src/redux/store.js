import { configureStore } from '@reduxjs/toolkit'
import counterSlice from "./slice/page-data.js"
import pageData from "./slice/pageData.js"

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    pageData: pageData,

  },
})