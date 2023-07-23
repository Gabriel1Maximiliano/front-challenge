/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { configureStore } from '@reduxjs/toolkit'

import { setupListeners } from '@reduxjs/toolkit/query/react'

import { apiSlice } from './apiSlice'

export const store = configureStore({
  reducer: {
   
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})


setupListeners(store.dispatch)