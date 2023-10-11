import cn from 'classnames';
import { Button, ButtonProps, styled } from '@mui/material';
import cls from 'widgets/FlightCard/components/MainSide/components/ChooseTime/ui/ChooseTime.module.scss';
import { flightTimeInterface } from 'app/slices/flightInfoSlice';

interface RegularButtonProps {
    flightTime: flightTimeInterface;
    btnText: {
        fontSize: number;
        fontWeight: number;
    };
    handleClick: (flightTime: flightTimeInterface) => void;
}

export const RegularButton = ({
    flightTime,
    btnText,
    handleClick,
}: RegularButtonProps) => {
    const RegularButton = styled(Button)<ButtonProps>(({}) => ({
        color: '#5C5C5C',
        borderRadius: '10px',
        backgroundColor: '#FFF',
        borderColor: '#B7BAC1',
        '&:hover': {
            borderColor: '#bbc7dd',
        },
    }));

    return (
        <RegularButton
            size='small'
            sx={btnText}
            variant='outlined'
            onClick={() => handleClick(flightTime)}
        >
            <span className={cls.accent}>{flightTime.departure} -&nbsp;</span>
            {flightTime.arrive}
        </RegularButton>
    );
};
