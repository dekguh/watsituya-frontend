import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthState } from '../../types';

export const initialState = {
    isLogin: false,
    address: ''
} as IAuthState

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        actSetAddress: (state, action : PayloadAction<string | null>) => {
            state.address = action.payload
        },
        actSetIsLogin: (state, action : PayloadAction<boolean>) => {
            state.isLogin = action.payload
        }
    }
})

export const { actSetAddress, actSetIsLogin } = authSlice.actions

export default authSlice.reducer