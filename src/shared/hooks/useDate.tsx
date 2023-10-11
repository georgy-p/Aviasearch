import { useSelector } from 'react-redux';
import { RootState } from 'app/slices';

const useDate = (isBack: boolean) => {
    if (isBack) {
        return useSelector((state: RootState) => state.search.dates.back);
    }
    return useSelector((state: RootState) => state.search.dates.there);
};

export default useDate;
