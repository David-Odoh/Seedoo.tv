import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Truncate from 'react-truncate-html';

import './videoList.css';

const VideoList = (props) => {
    return (
        <div>
            <div className="videoList">
                <div className="list-wrapper">
                    <div className="image-section">
                        <img className="image" src={props.tileImg} alt="Card Image" />
                    </div>
                    <div className="text-section">
                        <Truncate
                            lines={2}
                            portrait={1}
                            responsive={false}
                            dangerouslySetInnerHTML={{
                                __html: `${props.tileTitle}...`
                            }}
                            className="title"
                        />
                        <div className="category"></div>
                        <hr />
                        <Truncate
                            lines={5}
                            portrait={4}
                            responsive={false}
                            dangerouslySetInnerHTML={{
                                __html: `${props.tileSum}...`
                            }}
                            className="summary"
                        />
                        <div className="bottom-section">
                            <div className="views">
                                <span>Views: </span>&nbsp;
                                <div>{props.tileViews}</div>
                            </div>
                            <Link
                                to={{
                                    pathname: "/videos-details",
                                    data: {
                                        tileVid: props.tileVid,
                                        tileImg: props.tileImg,
                                        tileTitle: props.tileTitle,
                                        tileSum: props.tileSum,
                                        tileView: props.tileViews
                                    }
                                }}
                                className="watch-vid">
                                <p className="read-more">{props.btnTitle}
                                    <i className="fa fa-angle-double-right"></i>
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default VideoList;
