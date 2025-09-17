// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
    name: 'user',
    initialState: {
        username: '未登录',
        password:"default"
    },
    reducers: {
        setUserName: (state,action) => {
   
            state.username = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setUserName} = counterSlice.actions

export default counterSlice.reducer