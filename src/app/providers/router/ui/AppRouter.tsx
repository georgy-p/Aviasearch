import { Navigate, Route, Routes } from 'react-router-dom';
import { AviaSearch } from 'app/pages/AviaSearch';
import { AviaInfo } from 'app/pages/AviaInfo';
const AppRouter = () => (
    <Routes>
        <Route path='/avia/' element={<AviaSearch />} />
        <Route path='/avia/info' element={<AviaInfo />} />
        <Route path='*' element={<Navigate to='/avia' />} />
    </Routes>
);

export default AppRouter;
