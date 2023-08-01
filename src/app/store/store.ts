import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './auth';

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})
