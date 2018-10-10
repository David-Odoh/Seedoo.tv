import React, { Component } from 'react';

import './home.css'
import HomeAds from '../../components/Home-Ad/homeAd';
import HomeMain from '../../components/Home-Main/homeMain';

export default class home extends Component {
    render() {
        return (
            <div className="content-wrap row">
                <div className="homeWrapper">
                    <aside>
                        <HomeAds></HomeAds>
                    </aside>
                    <div className="main-area">
                        <HomeMain></HomeMain>
                    </div>
                </div>
            </div>
        )
    }
}
