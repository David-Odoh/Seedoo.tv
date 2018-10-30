import React, { Component } from 'react';
import { connect } from 'react-redux';

import './news.css';
import SlimHeader from '../SlimHeader/slimHeader';
import TitleBar from '../TitleBar/titleBar';
import NewsComp from '../../components/News/news';
import HomeAds from '../../components/Home-Ad/homeAd';

class News extends Component {
    render() {
        return (
            <div className="news">
                <SlimHeader></SlimHeader>
                <TitleBar barTitle="News"></TitleBar>
                <div className="news-wrapper row">
                    <aside>
                        <HomeAds></HomeAds>
                    </aside>
                    <div className="main-area">
                        <div className="top-strip">
                            <div className="category">
                                <div className="item-count">470 Items Listed</div>
                                <div className="category-tabs">
                                    <div className="tab one">Local News</div>
                                    <div className="tab two">Entertainment</div>
                                    <div className="tab three">Human Angle Stories</div>
                                    <div className="tab four">African News</div>
                                </div>
                            </div>
                            <div className="category-title"><span>Local News</span></div>
                        </div>
                        <NewsComp></NewsComp>
                    </div>
                </div>
            </div>
        )
    }
}

export default News;