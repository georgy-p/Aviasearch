import cls from './MainSide.module.scss';
import cn from 'classnames';
import { FlightDate } from 'widgets/FlightCard/components/MainSide/components/FlightDate';
import { FlightRoute } from 'widgets/FlightCard/components/MainSide/components/FlightRoute';
import { LuggagesLogo } from 'widgets/FlightCard/components/MainSide/components/LuggagesLogo';
import { ChooseTime } from 'widgets/FlightCard/components/MainSide/components/ChooseTime';
import useCities from 'shared/hooks/useCities';
import useDate from 'shared/hooks/useDate';
import useSelectedTimes from 'shared/hooks/useSelectedTimes';

interface MainSideInterface {
    isBack: boolean;
}
export const MainSide = ({ isBack }: MainSideInterface) => {
    const cities = useCities(isBack);
    const date = useDate(isBack);
    const departureCity = cities.from;
    const arriveCity = cities.to;

    const isDotted = isBack ? cls.dotted : null;

    const times = useSelectedTimes(isBack);
    const departureTime = times.departure;
    const arriveTime = times.arrive;

    return (
        <div className={`${cls.mainSide} ${isDotted}`}>
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
                <ChooseTime isBack={isBack} />
            </div>
        </div>
    );
};
