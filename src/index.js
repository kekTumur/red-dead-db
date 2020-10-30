import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'; 

import App from './components/app';
import ErrorBoundary from './components/error-boundary';
import ReaddeadService from './services/reddead-service';
import { ReddeadProvider} from './components/reddead-service-context';

import store from './store';

const reddeadService = new ReaddeadService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <ReddeadProvider value={reddeadService}>
                <Router>
                    <App />
                </Router>
            </ReddeadProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);
