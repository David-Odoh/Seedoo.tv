import React, { Component } from 'react';



import HomeVideos from './../../components/Home-Video/homeVideos';
import HomeAds from './../../components/Home-Ad/homeAd';
import './highlights.css';

export default class highlights extends Component {
    render() {
        return (
            <div className="content-wrap">
                <div className="wrapper">
                    <div className="main-area">
                        <HomeVideos></HomeVideos>
                    </div>
                    <aside>
                        <HomeAds></HomeAds>
                    </aside>
                </div>
            </div>
        )
    }
}
