import React from 'react';
import { Route } from 'react-router-dom';

import App from './App';
import AboutUs from './containers/AboutUs/aboutUs';
import ContactUs from './containers/ContactUs/contactUs';
import Download from './containers/Download/download';
import News from './containers/News/news';
import Videos from './containers/Videos/videos';
import Xperience from './containers/Xperience/xperience';

const Routes = () => (
    <div>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/contact" component={ContactUs} />
        <Route exact path="/download" component={Download} />
        <Route exact path="/news" component={News} />
        <Route exact path="/videos" component={Videos} />
        <Route exact path="/xperience" component={Xperience} />
    </div>
);

export default Routes;