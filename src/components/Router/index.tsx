import React, { Suspense, lazy } from 'react';
import { Router as ReactRouter, Switch, Route, } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from 'pages/home';
import NotFound from 'components/NotFound';

const history = createBrowserHistory();

function Router() {
    return (
        <ReactRouter history={history}>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact component={NotFound} />
            </Switch>
        </ReactRouter>
    );
}

export default Router;