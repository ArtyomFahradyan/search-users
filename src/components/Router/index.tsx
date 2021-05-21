import React, { Suspense, lazy } from 'react';
import { Router as ReactRouter, Switch, Route, } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from 'pages/home';
const history = createBrowserHistory();
function Router() {
    return (
        <ReactRouter history={history}>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </ReactRouter>
    );
}

export default Router;