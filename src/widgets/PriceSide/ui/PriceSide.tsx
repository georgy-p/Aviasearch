import cls from './PriceSide.module.scss';

interface PriceSideProps {
    price: string;
}

export const PriceSide = ({ price }: PriceSideProps) => {
    return <div className={cls.PriceSide}>{price}</div>;
};
