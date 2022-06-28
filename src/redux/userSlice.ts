import { RootState } from './store';
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: {
            id:'',
            firstSession: false,
            name: '',
            email: '',
            avatar: ''
        }
    },
    reducers: {
        saveLoginData(state, { payload }) {
           state.userInfo = payload
        }
    }
})

export const { saveLoginData } = userSlice.actions

export const selectUser = (state : RootState) => state.user

export default userSlice.reducer