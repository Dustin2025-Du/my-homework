import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
    name: 'user',
    initialState: {
        username: '未登录',
    },
    reducers: {
        setUser: (state,action) => {
            // @ts-ignore
            state.username = action.payload
        },
    },
})
// Action creators are generated for each case reducer function
export const {setUser} = counterSlice.actions

export default counterSlice.reducer