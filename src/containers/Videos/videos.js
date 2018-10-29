import React, { Component } from 'react';

import './videos.css';
import SlimHeader from '../SlimHeader/slimHeader';
import TitleBar from '../TitleBar/titleBar';

export default class Videos extends Component {
    render() {
        return (
            <div className="videos">
                <SlimHeader></SlimHeader>
                <TitleBar barTitle="Videos"></TitleBar>
                Videos Works but isn't finished
            </div>
        )
    }
}
