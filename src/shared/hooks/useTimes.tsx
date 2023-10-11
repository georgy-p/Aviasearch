import { useSelector } from 'react-redux';
import { RootState } from 'app/slices';

const useTimes = (isBack: boolean) => {
    if (isBack) {
        return useSelector((state: RootState) => state.flightInfo.times.back);
    }
    return useSelector((state: RootState) => state.flightInfo.times.there);
};

export default useTimes;
