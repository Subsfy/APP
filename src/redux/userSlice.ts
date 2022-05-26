import { RootState } from './store';
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            name: '',
            email: '',
            avatar: ''
        }
    },
    reducers: {
        login(state, { payload }) {
           state.user = payload
        }
    }
})


export const { login } = userSlice.actions

export const selectUser = (state : RootState) => state.user

export default userSlice.reducer