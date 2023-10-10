import cls from './LeftSide.module.scss';
import { Typography } from '@mui/material';
import S7Logo from 'shared/assets/icons/s7.svg';

export const LeftSide = () => {
    return (
        <div className={cls.LeftSide}>
            <div className={cls.corner}>
                <Typography variant='h5' component='p'>
                    Невозвратный
                </Typography>
            </div>
            <div className={cls.logo}>
                <S7Logo />
                <Typography>S7 Airlines</Typography>
            </div>
        </div>
    );
};
