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
                        SeeDoo TV is a product of Tech Bridges Associates; a versatile multi-media solutions company established in 2009 focused on developing deployable solutions in a variety of sectors including education, transportation, media, broadcast and content development.
                    </p>
                    <p>
                        SeeDoo TV is a premiere innovative and interactive platform that provides real time, engaging content on the go. It is a multimedia, entertainment and informative platform that allows for geo-fenced and direct advertising. Our services are rendered across interactive and personalized digital screens across varying modes of transportation and unique locations.
                    </p>
                    <p>
                        Our goal is to become every commuter and traveler’s companion. We aim to achieve this by introducing a platform that improves the ride experience of our clients in a bid to become the nation’s one stop mobile entertainment platform, granting viewers access to real-time information and entertainment relevant to their every need and also providing a platform for businesses to market their products and services to their potential and existing customers.
                    </p>
                    <p>
                        Click <a href="http://techbridges.com.ng/" target="_black">here</a> to visit <a href="http://techbridges.com.ng/" target="_black">Tech Bridges Africa Associates</a> for more information
                    </p>
                </div>
            </div>
        )
    }
}
