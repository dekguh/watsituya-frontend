import { configureStore } from '@reduxjs/toolkit';
import { default as authReducer } from './auth/reduce';

export const store = configureStore({
    reducer: {
        auth: authReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch