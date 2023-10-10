import { createTheme } from '@mui/material';
import { ruRU } from '@mui/material/locale';

export const theme = createTheme(
    {
        palette: {
            primary: {
                main: '#5C87DB',
                dark: '#3E67B7',
                light: '#8BA5D8',
            },
            secondary: {
                main: '#5C5C5C',
                light: '#B7BAC1',
            },
        },
        typography: {
            fontFamily: 'Roboto, Sans-serif',
            fontSize: 14,
            h6: {
                fontSize: 11,
                color: 'white',
            },
            h5: {
                fontSize: 12,
                color: 'white',
                fontWeight: 600,
            },
        },
    },
    ruRU,
);
