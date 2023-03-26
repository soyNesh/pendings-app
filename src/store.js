import { configureStore } from '@reduxjs/toolkit'
import pendingsReducer from './features/pendings/pendingsSlice'

export default configureStore({
  reducer: {
    pendings: pendingsReducer,
  },
})
