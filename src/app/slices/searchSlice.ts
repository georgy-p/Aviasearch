import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
    cities: {
        from: string;
        to: string;
    };
    dates: {
        there: string | null;
        back: string | null;
    };
}

const initialState: SearchState = {
    cities: {
        from: '',
        to: '',
    },
    dates: {
        there: null,
        back: null,
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
