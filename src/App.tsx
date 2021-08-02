import React from 'react';
import './i18n/config';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';

function App() {
    return (
        <Switch>
            <Route path="/" component={HomePage} />
        </Switch>
    );
}

export default App;
