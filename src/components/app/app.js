import React from 'react'
import Header from '../header';
import PeoplePage from '../pages';
import './app.css';
import { Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <React.Fragment>
            <Header />
            <PeoplePage />
        </React.Fragment>
    );
};

export default App;