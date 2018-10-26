import React, { Component } from 'react';

import './titleBar.css';
import Nav from '../Nav/nav';

export default class TitleBar extends Component {
    constructor() {
        super()
        this.state = {
            menuVisibility: true
        }
    }


    toggleMenuVisibility() {
        this.setState({
            menuVisibility: !this.state.menuVisibility
        })
    }

    displayMenuOptions() {
        if (this.state.menuVisibility) {
            return (
                <div className="menu-tiles">
                    <Nav></Nav>
                </div>
            )
        }
    }
    render() {
        return (
            <div className="titleBar ">
                <div className="title-menu row">
                    <div className="title">
                        <span>Title Bar</span>
                    </div>
                    <div className="menu" onClick={this.toggleMenuVisibility}>
                        <span className="fa fa-bars"></span>
                        <span>Change Menu</span>
                    </div>
                </div>
                {this.displayMenuOptions}
            </div>
        )
    }
}
