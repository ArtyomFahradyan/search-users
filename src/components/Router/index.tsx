import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-r';
import Home from 'pages/home';

function Router() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default Router;