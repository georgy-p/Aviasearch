import { Box, Button, Grid } from '@mui/material';
import { useState } from 'react';
import { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/ru';
import { ruRU } from '@mui/x-date-pickers/locales';
import { CityInput } from 'app/pages/AviaSearch/components/CityInput/CityInput';
import cls from './AviaSearch.module.scss';
import { DateInput } from 'app/pages/AviaSearch/components/DateInput';
import { useDispatch } from 'react-redux';
import { addData } from 'app/slices/searchSlice';
import { useNavigate } from 'react-router-dom';

const ruLocale =
    ruRU.components.MuiLocalizationProvider.defaultProps.localeText;

export const AviaSearch = () => {
    const [departureValue, setDepartureValue] = useState<string>('');
    const [arrivalValue, setArrivalValue] = useState<string>('');
    const [firstFlightDate, setFirstFlightDate] = useState<Dayjs | null>(null);
    const [secondFlightDate, setSecondFlightDate] = useState<Dayjs | null>(
        null,
    );
    const dispatch = useDispatch();
    const navigate = useNavigate();

    type inputValueType = string | Dayjs | null;
    const handleBlur = (
        inputValue: inputValueType,
        isSecondFlight: boolean = false,
    ) => {
        if (isSecondFlight) {
            return false;
        }
        return inputValue === '' || inputValue === null;
    };

    const inputsCheck = () => {
        const result =
            departureValue.trim() === '' ||
            arrivalValue.trim() === '' ||
            firstFlightDate === null;
        return result;
    };

    const handleClick = () => {
        const data = {
            cities: {
                from: departureValue,
                to: arrivalValue,
            },
            dates: {
                from: firstFlightDate.format('L'),
                to:
                    secondFlightDate === null
                        ? null
                        : secondFlightDate.format('L'),
            },
        };
        dispatch(addData(data));
        return navigate('/avia/info');
    };

    return (
        <Box>
            <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale='ru'
                localeText={ruLocale}
            >
                <Box className={cls.inputContainer}>
                    <Grid container spacing={2} sx={{ padding: '30px' }}>
                        <CityInput
                            name={'Откуда'}
                            labelText={'Город вылета'}
                            value={departureValue}
                            setNewValue={setDepartureValue}
                            handleBlur={handleBlur}
                        />
                        <CityInput
                            name={'Куда'}
                            labelText={'Город прилета'}
                            value={arrivalValue}
                            setNewValue={setArrivalValue}
                            handleBlur={handleBlur}
                        />
                        <DateInput
                            name={'Туда'}
                            date={firstFlightDate}
                            setNewDate={setFirstFlightDate}
                            handleBlur={handleBlur}
                            isSecondFlight={false}
                        />
                        <DateInput
                            name={'Обратно'}
                            date={secondFlightDate}
                            setNewDate={setSecondFlightDate}
                            handleBlur={handleBlur}
                            isSecondFlight={true}
                        />
                    </Grid>
                </Box>
            </LocalizationProvider>
            <Box className={cls.btnContainer}>
                <Button
                    disabled={inputsCheck()}
                    variant='contained'
                    className={cls.btn}
                    onClick={handleClick}
                >
                    Найти билеты
                </Button>
            </Box>
        </Box>
    );
};
