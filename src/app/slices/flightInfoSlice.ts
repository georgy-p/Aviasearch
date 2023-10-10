import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface flightTimeInterface {
    departure: string;
    arrive: string;
}

const fakeTimes: flightTimeInterface[] = [
    {
        departure: '09:20',
        arrive: '11:05',
    },
    {
        departure: '10:20',
        arrive: '12:05',
    },
    {
        departure: '11:20',
        arrive: '13:05',
    },
];

interface initialStateInterface {
    times: {
        towards: flightTimeInterface[];
        back: flightTimeInterface[] | null;
    };
    selected: {
        towards: flightTimeInterface | null;
        back: flightTimeInterface | null;
    };
}

const initialState: initialStateInterface = {
    times: {
        towards: fakeTimes,
        back: fakeTimes,
    },
    selected: {
        towards: fakeTimes[0],
        back: null,
    },
};

const flightInfoSlice = createSlice({
    name: 'flightInfo',
    initialState,
    reducers: {
        selectTowards: (state, action: PayloadAction<flightTimeInterface>) => {
            const { payload } = action;
            state.selected.towards = payload;
        },
        selectBack: (state, action: PayloadAction<flightTimeInterface>) => {
            const { payload } = action;
            state.selected.back = payload;
        },
    },
});

export const { selectTowards } = flightInfoSlice.actions;
export default flightInfoSlice.reducer;
