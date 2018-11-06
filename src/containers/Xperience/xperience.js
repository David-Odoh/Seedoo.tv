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
                <div className="x-body">
                    <div className="x-tablet">
                        <div className="x-left">
                            <div className="x-display"></div>
                            <div className="x-bottom-ads"></div>
                        </div>
                        <div className="x-right">
                            <div className="x-menu">
                                <span className="x-buttons" id="one">This is Lagos</span>
                                <span className="x-buttons" id="one">Map</span>
                                <span className="x-buttons" id="one">News</span>
                                <span className="x-buttons" id="one">Blog</span>
                                <span className="x-buttons" id="one">Kiddies</span>
                                <span className="x-buttons" id="one">Others</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
