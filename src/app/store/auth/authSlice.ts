import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // 'authenticated','not-authenticated',
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        onChecking: (state) => {
            state.status = 'checking';
        },
        onLogin: (state, { payload }) => {
            state.status = 'authenticated';
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.errorMessage = null;
        },
        onLogout: (state, { payload }) => {
            state.status = 'not-authenticated';
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = payload?.errorMessage;
        },
        clearErrorMessage: (state) => {
            state.errorMessage = null;
        }
    }
});

// Action creators are generated for each case reducer function
export const { onChecking, onLogin, onLogout, clearErrorMessage } = authSlice.actions;