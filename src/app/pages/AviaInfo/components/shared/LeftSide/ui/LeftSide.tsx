import cls from './LeftSide.module.scss';
import { Box, Typography } from '@mui/material';
import S7Logo from 'shared/assets/icons/s7.svg';

export const LeftSide = () => {
    return (
        <Box className={cls.LeftSide}>
            <Box className={cls.corner}>
                <Typography variant='h5' component='p'>
                    Невозвратный
                </Typography>
            </Box>
            <Box className={cls.logo}>
                <S7Logo />
                <Typography>S7 Airlines</Typography>
            </Box>
        </Box>
    );
};
