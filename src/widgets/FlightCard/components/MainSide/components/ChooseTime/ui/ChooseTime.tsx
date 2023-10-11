import cls from './ChooseTime.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/slices';
import { useState } from 'react';
import {
    flightTimeInterface,
    selectBack,
    selectThere,
} from 'app/slices/flightInfoSlice';
import { ActiveButton } from './ActiveButton';
import { RegularButton } from './RegularButton';
import useTimes from 'shared/hooks/useTimes';

interface ChooseTimeInterface {
    isBack: boolean;
}
export const ChooseTime = ({ isBack }: ChooseTimeInterface) => {
    const btnText = {
        fontSize: 14,
        fontWeight: 500,
    };

    const flightsTime = useTimes(isBack);

    const [activeBtn, setActiveBtn] = useState(flightsTime[0].departure);
    const dispatch = useDispatch();

    const handleClick = (flightTime: flightTimeInterface) => {
        setActiveBtn(flightTime.departure);
        if (isBack) {
            dispatch(selectBack(flightTime));
        } else {
            dispatch(selectThere(flightTime));
        }
    };

    const isActive = (departure: string): boolean => departure === activeBtn;

    return (
        <div className={cls.ChooseTime}>
            {flightsTime.map((flightTime) => {
                const { departure } = flightTime;
                return isActive(departure) ? (
                    <ActiveButton
                        key={departure}
                        flightTime={flightTime}
                        btnText={btnText}
                    />
                ) : (
                    <RegularButton
                        key={departure}
                        flightTime={flightTime}
                        btnText={btnText}
                        handleClick={handleClick}
                    />
                );
            })}
        </div>
    );
};
