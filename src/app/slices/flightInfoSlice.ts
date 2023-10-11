import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface flightTimeInterface {
    departure: string;
    arrive: string;
}

const fakeTimes1: flightTimeInterface[] = [
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

const fakeTimes2: flightTimeInterface[] = [
    {
        departure: '11:50',
        arrive: '13:30',
    },
    {
        departure: '15:45',
        arrive: '17:20',
    },
    {
        departure: '17:10',
        arrive: '19:35',
    },
];

interface initialStateInterface {
    times: {
        there: flightTimeInterface[];
        back: flightTimeInterface[] | null;
    };
    selected: {
        there: flightTimeInterface | null;
        back: flightTimeInterface | null;
    };
    price: string;
}

const initialState: initialStateInterface = {
    times: {
        there: fakeTimes1,
        back: fakeTimes2,
    },
    selected: {
        there: fakeTimes1[0],
        back: fakeTimes2[0],
    },
    price: '8 300 ₽',
};

const flightInfoSlice = createSlice({
    name: 'flightInfo',
    initialState,
    reducers: {
        selectThere: (state, action: PayloadAction<flightTimeInterface>) => {
            const { payload } = action;
            state.selected.there = payload;
        },
        selectBack: (state, action: PayloadAction<flightTimeInterface>) => {
            const { payload } = action;
            state.selected.back = payload;
        },
    },
});

export const { selectThere, selectBack } = flightInfoSlice.actions;
export default flightInfoSlice.reducer;
