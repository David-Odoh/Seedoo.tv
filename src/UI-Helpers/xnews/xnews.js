import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Truncate from 'react-truncate-html';

import './xnews.css'

const XnewsList = (props) => {
    return (
        <div>
            <div className="listItem">
                <div className="list-wrapper">
                    <div className="image-section">
                        <img className="image" src={props.tileImg} alt="Card Image" />
                    </div>
                    <div className="text-section">
                        <div className="title">{props.tileTitle}</div>
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
                                    pathname: "/news-details",
                                    data: {
                                        tileImg: props.tileImg,
                                        tileTitle: props.tileTitle,
                                        tileSum: props.tileSum
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
export default XnewsList;
