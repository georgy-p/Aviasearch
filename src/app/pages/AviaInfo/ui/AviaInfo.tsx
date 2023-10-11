import cls from './AviaInfo.module.scss';
import { OWCard } from 'app/pages/AviaInfo/components/OWCard';
import { RTCard } from 'app/pages/AviaInfo/components/RTCard';
import { PriceSide } from 'widgets/PriceSide';
import { useSelector } from 'react-redux';
import { RootState } from 'app/slices';

export const AviaInfo = () => {
    const price = useSelector((state: RootState) => state.flightInfo.price);
    const renderedCard = () => {
        const isBack = useSelector(
            (state: RootState) => state.search.dates.back,
        );
        return isBack === null ? <OWCard /> : <RTCard />;
    };

    return (
        <div className={cls.AviaInfo}>
            {renderedCard()}
            <PriceSide price={price} />
        </div>
    );
};
