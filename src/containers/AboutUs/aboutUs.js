import React, { Component } from 'react';

import './aboutUs.css';
import SlimHeader from '../SlimHeader/slimHeader';
import TitleBar from '../TitleBar/titleBar';

export default class AboutUs extends Component {
    render() {
        return (
            <div>
                <SlimHeader></SlimHeader>
                <TitleBar></TitleBar>
                About Us works
            </div>
        )
    }
}
