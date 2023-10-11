import { flightTimeInterface } from 'app/slices/flightInfoSlice';
import { Button, ButtonProps, styled } from '@mui/material';

interface ActiveButtonProps {
    flightTime: flightTimeInterface;
    btnText: {
        fontSize: number;
        fontWeight: number;
    };
}
export const ActiveButton = ({ flightTime, btnText }: ActiveButtonProps) => {
    const ActiveButton = styled(Button)<ButtonProps>(({}) => ({
        color: '#232323',
        borderRadius: '10px',
        backgroundColor: '#DDE3EE',
        '&:hover': {
            backgroundColor: '#bbc7dd',
        },
        '& span': {
            fontSize: '18px',
        },
    }));

    return (
        <ActiveButton size='medium' sx={btnText} variant='contained'>
            <span>{flightTime.departure} -&nbsp;</span>
            {flightTime.arrive}
        </ActiveButton>
    );
};
