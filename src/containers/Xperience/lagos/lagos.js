import React, { Component } from 'react';

import './lagos.css';

export default class Lagos extends Component {
    render() {
        return (
            <div className='lagos'>
                <div className="nav-bar">
                    <div className="back"></div>
                    <div className="title"></div>
                    <div className="home"></div>
                </div>
                <div className="menu"></div>
                <div className="body"></div>
            </div>
        )
    }
}
