import React, { Component } from 'react';

import './listItem.css';

export default class ListItem extends Component {
    render() {
        return (
            <div className="listItem">
                <span>List Item</span>
                <div className="list-wrapper">
                    <div className="left image-section">
                        <img src="" alt="" />
                    </div>
                    <div className="right">
                        <div className="title"></div>
                        <div className="category"></div>
                        <div className="summary"></div>
                        <div className="read-more"></div>
                    </div>
                </div>
            </div>
        )
    }
}
