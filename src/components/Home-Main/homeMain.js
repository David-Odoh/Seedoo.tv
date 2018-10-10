import React, { Component } from 'react';

import './homeMain.css';
import RecentVideos from './Recent-Videos/recent';
import HomepageNews from './News-Bit/news';

export default class homeMain extends Component {
    render() {
        return (
            <div className="homeMain">
                <RecentVideos></RecentVideos>
                <HomepageNews></HomepageNews>
            </div>
        )
    }
}
