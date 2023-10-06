import { Box, Grid, TextField, Typography } from '@mui/material';
import { Dayjs } from 'dayjs';
import { useState } from 'react';

interface CityInputProps {
    value: string;
    labelText: string;
    setNewValue: React.Dispatch<React.SetStateAction<string>>;
    name: string;
    handleBlur: (inputValue: string | null | Dayjs) => boolean;
}

const textFieldStyle = {
    backgroundColor: 'white',
    borderRadius: '10px',
};

const labelStyle = {
    fontWeight: '700',
    fontSize: '14px',
};
export const CityInput = ({
    labelText,
    value,
    setNewValue,
    name,
    handleBlur,
}: CityInputProps) => {
    const [isError, setError] = useState<boolean>(false);
    const blurCheck = () => {
        setError(handleBlur(value));
    };

    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setError(false);
        setNewValue(target.value);
    };

    return (
        <Grid item xs={12} md={3}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Typography variant='h6'>{name}</Typography>
                <TextField
                    onBlur={blurCheck}
                    error={isError}
                    sx={textFieldStyle}
                    label={value ? ' ' : labelText}
                    InputLabelProps={{ shrink: false, sx: labelStyle }}
                    onChange={handleChange}
                    id='from-input'
                    variant='outlined'
                    helperText={isError && 'Обязательное поле'}
                />
            </Box>
        </Grid>
    );
};
