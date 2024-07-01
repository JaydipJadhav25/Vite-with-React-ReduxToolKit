import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "./slices/todo.slices"

export const store = configureStore({
  reducer: {
    reducer : todoReducer
  },
})