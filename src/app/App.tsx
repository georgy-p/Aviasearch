import './styles/index.scss';
import { Container } from '@mui/material';
import AppRouter from 'app/providers/router/ui/AppRouter';

function App() {
    return (
        <div className='App'>
            <Container maxWidth='lg'>
                <AppRouter />
            </Container>
        </div>
    );
}

export default App;
