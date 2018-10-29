import React, { Component } from 'react';

import './news.css';
import SlimHeader from '../SlimHeader/slimHeader';
import TitleBar from '../TitleBar/titleBar';

export default class News extends Component {
    render() {
        return (
            <div className="news">
                <SlimHeader></SlimHeader>
                <TitleBar barTitle="News"></TitleBar>
                News Works but isn't finished
            </div>
        )
    }
}
