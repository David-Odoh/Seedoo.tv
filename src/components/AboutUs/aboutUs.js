import React, { Component } from 'react';

import './aboutUs.css';
import TabletImage from '../../img/Seedoo_tablet.png';

export default class AboutComp extends Component {
    render() {
        return (
            <div className="aboutComp row">
                <div className="image">
                    <img src={TabletImage} alt="" />
                </div>
                <div className="title">
                    <h1>Welcome to <span className="seedooItalics">Seedoo.tv</span></h1>
                </div>
                <div className="body">
                    <p>
                        We are a versatile multi-media solutions company established in 2009. Offer team is committed to proffering evolving IT solutions to square off the Social and Economic challenges in various business setup and start-ups. Our focus is on developing deployable solutions in a variety of sectors including education, transportation, media, broadcast and content development.
                    </p>
                    <p>
                        Tech Bridges provides IT solutions comprising an intermingling of IT Product services, user experience design, web & mobile application development, content development & management systems to facilitate exceptional customer experiences.
                    </p>
                    <p>
                        We offer professional services with a unique industry-based, consultative approach helping clients envision, build and run more innovative and efficient businesses
                    </p>
                </div>
            </div>
        )
    }
}
