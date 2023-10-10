import cls from './MainSide.module.scss';
import { FlightDate } from 'widgets/cardComponents/MainSide/components/FlightDate';
import { FlightRoute } from 'widgets/cardComponents/MainSide/components/FlightRoute';
import { LuggagesLogo } from 'widgets/cardComponents/MainSide/components/LuggagesLogo';
import { ChooseTime } from 'widgets/cardComponents/MainSide/components/ChooseTime';
import { useSelector } from 'react-redux';
import { RootState } from 'app/slices';

export const MainSide = () => {
    const cities = useSelector((state: RootState) => state.search.cities);
    const date = useSelector((state: RootState) => state.search.dates.from);
    const departureCity = cities.from;
    const arriveCity = cities.to;

    const times = useSelector(
        (state: RootState) => state.flightInfo.selected.towards,
    );
    const departureTime = times.departure;
    const arriveTime = times.arrive;

    return (
        <div className={cls.mainSide}>
            <div className={cls.info}>
                <FlightDate
                    city={departureCity}
                    time={departureTime}
                    date={date}
                />
                <FlightRoute />
                <FlightDate city={arriveCity} time={arriveTime} date={date} />
                <LuggagesLogo />
            </div>
            <div className={cls.times}>
                <ChooseTime />
            </div>
        </div>
    );
};
