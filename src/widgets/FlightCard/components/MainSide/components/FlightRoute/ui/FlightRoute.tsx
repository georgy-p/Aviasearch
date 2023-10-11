import cls from './FlightRoute.module.scss';
import Point from 'shared/assets/icons/point.svg';

export const FlightRoute = () => {
    return (
        <div className={cls.FlightRoute}>
            <div className={cls.route}>
                <div className={cls.cityBox}>
                    <p>SVO</p>
                </div>
                <div className={cls.cityBox}>
                    <p>ROV</p>
                </div>
            </div>
            <div className={cls.schema}>
                <Point />
                <div className={cls.line} />
                <Point />
            </div>
            <div className={cls.routeTime}>
                <p>В пути 1 ч 55 мин</p>
            </div>
        </div>
    );
};
