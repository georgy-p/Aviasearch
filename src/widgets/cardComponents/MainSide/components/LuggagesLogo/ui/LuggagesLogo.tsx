import cls from './LuggagesLogo.module.scss';
import BagLogo from 'shared/assets/icons/bag.svg';
import LuggageLogo from 'shared/assets/icons/luggage.svg';

export const LuggagesLogo = () => {
    return (
        <div className={cls.LuggagesLogo}>
            <BagLogo />
            <LuggageLogo />
        </div>
    );
};
