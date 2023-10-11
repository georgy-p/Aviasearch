import { FlightCard } from 'widgets/FlightCard';
import cls from './CardStyles.module.scss';

export const RTCard = () => {
    return (
        <div className={cls.Card}>
            <FlightCard isBack={false} />
            <FlightCard isBack={true} />
        </div>
    );
};
