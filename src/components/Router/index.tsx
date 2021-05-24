import React, { Suspense, lazy } from 'react';
import { Router as ReactRouter, Switch, Route, } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Loading from 'components/Loading';
const Home = lazy(() => import('pages/home'));
const NotFound = lazy(() => import('components/NotFound'));

const history = createBrowserHistory();

function Router() {
    return (
        <Suspense fallback={<Loading />}>
            <ReactRouter history={history}>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact component={NotFound} />
                </Switch>
            </ReactRouter>
        </Suspense>
    );
}

export default Router;