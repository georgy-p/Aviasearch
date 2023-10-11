import { FlightCard } from 'widgets/FlightCard';
import cls from './CardStyles.module.scss';

export const OWCard = () => {
    return (
        <div className={cls.Card}>
            <FlightCard isBack={false} />
        </div>
    );
};
