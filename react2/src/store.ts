import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './store/test'
import userReducer from './store/user.ts'
export default configureStore({
  reducer: {
    counter:counterReducer,
    user:userReducer
  },
})

