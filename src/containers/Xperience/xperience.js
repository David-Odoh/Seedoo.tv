import React, { Component } from 'react';

import './xperience.css';
import SlimHeader from '../SlimHeader/slimHeader';
import TitleBar from '../TitleBar/titleBar';

export default class Xperience extends Component {
    render() {
        return (
            <div className="xperience">
                <SlimHeader></SlimHeader>
                <TitleBar barTitle="Xperience"></TitleBar>
                Xperience Works but isn't finished
            </div>
        )
    }
}
