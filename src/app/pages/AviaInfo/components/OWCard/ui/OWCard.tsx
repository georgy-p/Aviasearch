import cls from './OWCard.module.scss';
import { LeftSide } from 'widgets/cardComponents/LeftSide';
import { RightSide } from 'widgets/cardComponents/RightSide';
import { MainSide } from 'widgets/cardComponents/MainSide';

export const OWCard = () => {
    return (
        <div className={cls.OWCard}>
            <LeftSide />
            <MainSide />
            <RightSide />
        </div>
    );
};
