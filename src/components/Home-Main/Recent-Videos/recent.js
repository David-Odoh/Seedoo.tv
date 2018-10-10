import React, { Component } from 'react';

import './recent.css';
import Tile from '../../../UI-Helpers/tile/tile';

export default class recent extends Component {
    render() {
        return (
            <div className="recent">
                <h3>Recent Videos</h3>
                <Tile></Tile>
            </div>
        )
    }
}
