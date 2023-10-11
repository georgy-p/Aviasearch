import { useSelector } from 'react-redux';
import { RootState } from 'app/slices';

const useCities = (isBack: boolean) => {
    const stateCities = useSelector((state: RootState) => state.search.cities);

    if (isBack) {
        return {
            from: stateCities.to,
            to: stateCities.from,
        };
    }
    return stateCities;
};

export default useCities;
