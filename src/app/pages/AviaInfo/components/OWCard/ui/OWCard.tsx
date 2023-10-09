import cls from './OWCard.module.scss';
import { Box } from '@mui/material';
import { LeftSide } from 'app/pages/AviaInfo/components/shared/LeftSide';
import { RightSide } from 'app/pages/AviaInfo/components/shared/RightSide';
import { MainSide } from 'app/pages/AviaInfo/components/shared/MainSide';

export const OWCard = () => {
    return (
        <Box className={cls.OWCard}>
            <LeftSide />
            <MainSide />
            <RightSide />
        </Box>
    );
};
