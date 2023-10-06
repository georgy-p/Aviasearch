import { createRoot } from 'react-dom/client';

import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { theme } from 'app/styles/ThemeProvider/ThemeProvider';
import { Provider } from 'react-redux';
import { store } from 'app/slices';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <App />
            </Provider>
        </ThemeProvider>
    </BrowserRouter>,
);
