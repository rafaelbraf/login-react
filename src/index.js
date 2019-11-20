import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Inicio from './Inicio';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App}></Route>
            <Route path="/:user" component={Inicio}></Route>
        </Switch>
    </BrowserRouter>, 
    document.getElementById('root')
);
