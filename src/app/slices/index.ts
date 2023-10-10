import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import flightInfoReducer from 'app/slices/flightInfoSlice';

export const store = configureStore({
    reducer: {
        search: searchReducer,
        flightInfo: flightInfoReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
