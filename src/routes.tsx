import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LandingPage from './pages/Landing';
import MapPage from './pages/MapPage';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={LandingPage} />
            <Route path="/map" exact component={MapPage} />
        </BrowserRouter>
    )
}

export default Routes;