import cls from './ChooseTime.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/slices';
import { useState } from 'react';
import { flightTimeInterface, selectTowards } from 'app/slices/flightInfoSlice';
import { ActiveButton } from './ActiveButton';
import { RegularButton } from './RegularButton';

export const ChooseTime = () => {
    const btnText = {
        fontSize: 14,
        fontWeight: 500,
    };

    const flightsTime = useSelector(
        (state: RootState) => state.flightInfo.times.towards,
    );

    const [activeBtn, setActiveBtn] = useState(flightsTime[0].departure);
    const dispatch = useDispatch();

    const handleClick = (flightTime: flightTimeInterface) => {
        setActiveBtn(flightTime.departure);
        dispatch(selectTowards(flightTime));
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
