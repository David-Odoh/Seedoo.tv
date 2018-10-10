import React, { Component } from 'react';

import './tile.css';

export default class tile extends Component {
    render() {
        return (
            <div>
                <div className="tile">
                    <div className="title-head">
                        <img class="card-img-top" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg" alt="Card image cap" />
                    </div>
                    <div className="tile body">
                    </div>
                </div>
            </div>
        )
    }
}
