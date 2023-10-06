import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
    cities: {
        from: string;
        to: string;
    };
    dates: {
        from: string | null;
        to: string | null;
    };
}

const initialState: SearchState = {
    cities: {
        from: '',
        to: '',
    },
    dates: {
        from: null,
        to: null,
    },
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        addData: (state, action: PayloadAction<SearchState>) => {
            return action.payload;
        },
    },
});

export const { addData } = searchSlice.actions;
export default searchSlice.reducer;
