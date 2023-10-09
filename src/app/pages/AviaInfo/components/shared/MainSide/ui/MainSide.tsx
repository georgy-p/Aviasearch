import cls from './MainSide.module.scss';
import { Box, Typography } from '@mui/material';
import { fontSize } from 'app/styles/variables/fontSize';

export const MainSide = () => {
    return (
        <Box className={cls.mainSide}>
            <Box className={cls.info}>
                <Box className={cls.date}>
                    <p className={cls.time}>09:20</p>
                    <p className={cls.text}>
                        <span className={cls.city}>Москва</span> <br />
                        19.05.2022
                    </p>
                </Box>
                <Box className={cls.flight}>
                    <Box className={cls.IATA}>
                        <Box className={cls.CityBox}>
                            <p>SVO</p>
                            <Box className={cls.point} />
                        </Box>
                        <Box className={cls.CityBox}>
                            <p>ROV</p>
                            <Box className={cls.point} />
                        </Box>
                    </Box>
                    <Box className={cls.line} />
                    <p>В пути 1 ч 55 мин</p>
                </Box>
            </Box>
            <Box className={cls.times}>Time choose</Box>
        </Box>
    );
};
