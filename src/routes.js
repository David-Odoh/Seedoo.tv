import React from 'react';
import { Route } from 'react-router-dom';

import App from './App';
import AboutUs from './containers/AboutUs/aboutUs';
import ContactUs from './containers/ContactUs/contactUs';

const Routes = () => (
    <div>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/contact" component={ContactUs} />
    </div>
);

export default Routes;