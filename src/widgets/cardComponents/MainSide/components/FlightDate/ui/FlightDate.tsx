import cls from './FlightDate.module.scss';

interface FlightDateProps {
    city: string;
    time: string;
    date: string;
}

export const FlightDate = ({ city, time, date }: FlightDateProps) => {
    return (
        <div className={cls.FlightDate}>
            <p className={cls.time}>{time}</p>
            <p className={cls.text}>
                <span className={cls.city}>{city}</span> <br />
                {date}
            </p>
        </div>
    );
};
