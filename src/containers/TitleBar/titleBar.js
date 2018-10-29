import React, { Component } from 'react';

import './titleBar.css';
import Nav from '../Nav/nav';

export default class TitleBar extends Component {
    constructor() {
        super()
        this.state = {
            menuVisibility: false
        }
    }
    toggleMenuVisibility = () => {
        this.setState({
            menuVisibility: !this.state.menuVisibility
        })
    }

    render() {
        let displayMenuOptions = null;

        if (this.state.menuVisibility) {
            displayMenuOptions = (
                <div className="menu-tiles">
                    <Nav></Nav>
                </div>
            );
        }

        return (
            <div className="titleBar">
                <div className="title-menu row">
                    <div className="title">
                        <span>{this.props.barTitle}</span>
                    </div>
                    <div className="menu" onClick={this.toggleMenuVisibility}>
                        <span className="fa fa-bars"></span>
                        <span>{this.state.menuVisibility ? 'Hide' : 'Show'} Menu</span>
                    </div>
                </div>
                {displayMenuOptions}
            </div>
        )
    }
}
