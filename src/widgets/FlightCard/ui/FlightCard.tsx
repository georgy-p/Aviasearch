import cls from './FlightCard.module.scss';
import { LeftSide } from 'widgets/FlightCard/components/LeftSide';
import { MainSide } from 'widgets/FlightCard/components/MainSide';

interface FlightCardInterface {
    isBack: boolean;
}
export const FlightCard = ({ isBack }: FlightCardInterface) => {
    return (
        <div className={cls.FlightCard}>
            <LeftSide />
            <MainSide isBack={isBack} />
        </div>
    );
};
