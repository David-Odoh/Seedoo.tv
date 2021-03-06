import React from 'react';
import { Route } from 'react-router-dom';

import App from './App';
import AboutUs from './containers/AboutUs/aboutUs';
import ContactUs from './containers/ContactUs/contactUs';
import Download from './containers/Download/download';
import News from './containers/News/news';
import Videos from './containers/Videos/videos';
import Xperience from './containers/Xperience/xperience';
import DetailsPage from './containers/News/News-Details/newsDetails';
import VideoDetails from "./containers/Videos/Videos-Details/videoDetails"

const Routes = () => (
    <div>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/contact" component={ContactUs} />
        <Route exact path="/download" component={Download} />
        <Route path="/news" component={News} />
        <Route path="/videos" component={Videos} />
        <Route path="/xperience" component={Xperience} />
        <Route exact path="/news-details" component={DetailsPage} />
        <Route exact path="/videos-details" component={VideoDetails} />
    </div>
);

export default Routes;