import { useSelector } from 'react-redux';
import { RootState } from 'app/slices';

const useSeletedTimes = (isBack: boolean) => {
    if (isBack) {
        return useSelector(
            (state: RootState) => state.flightInfo.selected.back,
        );
    }
    return useSelector((state: RootState) => state.flightInfo.selected.there);
};

export default useSeletedTimes;
