import { Box, Grid, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import { useState } from 'react';

interface DateInputProps {
    name: string;
    date: Dayjs | null;
    setNewDate: React.Dispatch<React.SetStateAction<Dayjs>>;
    handleBlur: (
        inputValue: string | null | Dayjs,
        isSecondFlight: boolean,
    ) => boolean;
    isSecondFlight: boolean;
}

const datePickerStyle = {
    backgroundColor: 'white',
    borderRadius: '10px',
};
export const DateInput = ({
    name,
    date,
    setNewDate,
    handleBlur,
    isSecondFlight,
}: DateInputProps) => {
    const [isError, setError] = useState<boolean>(false);
    const blurCheck = () => {
        setError(handleBlur(date, isSecondFlight));
    };

    const handleChange = (date: Dayjs) => {
        setError(false);
        setNewDate(date);
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
                <DatePicker
                    sx={datePickerStyle}
                    slotProps={{
                        textField: {
                            InputLabelProps: { shrink: false },
                            error: isError,
                            onBlur: blurCheck,
                            helperText: isError && 'Обязательное поле',
                        },
                    }}
                    value={date}
                    onChange={(date) => handleChange(date)}
                />
            </Box>
        </Grid>
    );
};
