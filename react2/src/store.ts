import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './store/test'
export default configureStore({
  reducer: {
    counter:counterReducer
  },
})

