import { Button, Grid } from '@mui/material';
import { useState } from 'react';
import { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/ru';
import { ruRU } from '@mui/x-date-pickers/locales';
import cls from './AviaSearch.module.scss';
import { DateInput } from 'app/pages/AviaSearch/components/DateInput';
import { useDispatch } from 'react-redux';
import { addData } from 'app/slices/searchSlice';
import { useNavigate } from 'react-router-dom';
import { CityInput } from 'app/pages/AviaSearch/components/CityInput';

const ruLocale =
    ruRU.components.MuiLocalizationProvider.defaultProps.localeText;

type inputValueType = string | Dayjs | null;

export const AviaSearch = () => {
    const [departureValue, setDepartureValue] = useState<string>('');
    const [arrivalValue, setArrivalValue] = useState<string>('');
    const [firstFlightDate, setFirstFlightDate] = useState<Dayjs | null>(null);
    const [secondFlightDate, setSecondFlightDate] = useState<Dayjs | null>(
        null,
    );
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
        return (
            departureValue.trim() === '' ||
            arrivalValue.trim() === '' ||
            firstFlightDate === null
        );
    };

    const handleClick = () => {
        const data = {
            cities: {
                from: departureValue,
                to: arrivalValue,
            },
            dates: {
                there: firstFlightDate.format('L'),
                back:
                    secondFlightDate === null
                        ? null
                        : secondFlightDate.format('L'),
            },
        };
        dispatch(addData(data));
        return navigate('/avia/info');
    };

    return (
        <div>
            <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale='ru'
                localeText={ruLocale}
            >
                <div className={cls.inputContainer}>
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
                </div>
            </LocalizationProvider>
            <div className={cls.btnContainer}>
                <Button
                    disabled={inputsCheck()}
                    variant='contained'
                    className={cls.btn}
                    onClick={handleClick}
                >
                    Найти билеты
                </Button>
            </div>
        </div>
    );
};
